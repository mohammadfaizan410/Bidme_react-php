import React from 'react'
import "./globalStyles.css"
import { useState } from 'react'
import jQuery from 'jquery';
import { useStoreActions, useStoreState } from 'easy-peasy';
function Login() {

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const userStore = useStoreState((state) => state.userStore);
  const setUser = useStoreActions((actions) => actions.setUserStore);

  console.log(userStore)
  if (userStore.id) {
    window.location.href = "http://localhost:3000/"
  }

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: ""
  });


  const [loginError, setLoginError] = useState("");

  const handleChange = (e) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) => {

    setLoginError("")

    if (!loginDetails.password.length > 0 || !loginDetails.email.length > 0 ) {
      setLoginError("Fields cannot be empty")
    }
    else if (!(emailRegex.test(loginDetails.email))) {
      setLoginError("Email is in incorrect format")
    }
    else {
      jQuery.ajax({
        method: "POST",
        url: "http://localhost/bidMe_backend/login.php",
        data: {
          email: loginDetails.email,
          password: loginDetails.password
        },
        success: function (data) {
          if (data === "post data not recieved") {
            setLoginError("Server did not respond please try again later")
          }
          else if (data === "login failed") {
            setLoginError("Password or Email incorrect")
          }
          else {
            localStorage.setItem("current_user", data);
            setUser(JSON.parse(data))
            
          }
        },
        failure: function (error) {
          console.log("could not reach server")
        }
      })
    }

  }
  


  return (
    <div className='container-padded'>

                    <h1 className='title-primary' >Login</h1>
                    <div className='register-container'>
                        <input className='input-item' type="email" placeholder='Email' name='email' onChange={handleChange} value={loginDetails.email} />
                        <input className='input-item' type="password" placeholder='pasword' name='password' onChange={handleChange} value={loginDetails.password} />
                        <p className='validation-error'>{loginError}</p>
                        <button className='submit-btn' type='submit' onClick={handleSubmit}>
                            Login
                        </button>
                    </div>
    </div>
  )
}

export default Login