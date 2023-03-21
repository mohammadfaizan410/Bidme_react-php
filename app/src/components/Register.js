import React from 'react'
import { useState } from 'react'
import "./globalStyles.css"
import "./registerStyles.css"
import { Link } from 'react-router-dom'
import { MdCelebration } from 'react-icons/md'
import jQuery from 'jquery'
function Register() {


    const [registrationDetails, setRegistrationDetails] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const [isAgreed, setIsAgreed] = useState(false);

    const [validationError, setValidationErrors] = useState("")

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const passRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    const handleChange = (e) => {
        setRegistrationDetails({
            ...registrationDetails,
            [e.target.name]: e.target.value
        })

    }

    const handleAgreement = (e) => {
        if (isAgreed === false) {
            setIsAgreed(true)
        }
        else {
            setIsAgreed(false)
        }
        console.log(isAgreed)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setValidationErrors("");

        if (!registrationDetails.name.length > 0 || !registrationDetails.surname.length > 0 || !registrationDetails.email.length > 0 || !registrationDetails.password.length > 0 || !registrationDetails.confirmPassword.length > 0) {
            setValidationErrors("Fields cannot be empty")
        }
        else if (!(emailRegex.test(registrationDetails.email))) {
            setValidationErrors("Email is in incorrect format") 
        }   
        else if (!passRegex.test(registrationDetails.password)) {
            setValidationErrors("Password must be minimum 8 characters, include a atleast 1 one number and one special character")
        }

        else if (registrationDetails.password !== registrationDetails.confirmPassword) {
            setValidationErrors("Passwords do not match")
        }
        else if (!(isAgreed)) {
            setValidationErrors("Please agree to the terms and conditions")
        }
        else {
            jQuery.ajax({
                method: "POST",
                url: "http://localhost/bidMe_backend/register.php",
                data: {
                    name: registrationDetails.name,
                    surname: registrationDetails.surname,
                    email: registrationDetails.email,
                    password: registrationDetails.password,
                },
                success: function (data) {
                    if (data === "registered") {
                        setRegistrationSuccess(true);
                    }
                    if (data === "user exists") {
                        setValidationErrors("A user with the same email already exists! Please try again with a different email");
                    }
                },
                failure: function (error) {
                    console.log("Could not reach the url:http://localhost/bidMe_backend/register.php", error);
                }

            })
        }
    }

    return (
        <div>
            {registrationSuccess === false ?
                <div className='container-padded'>
                    <h1 className='title-primary' >Register</h1>
                    <div className='register-container'>
                        <input className='input-item' type="text" placeholder='Name' name='name' onChange={handleChange} value={registrationDetails.name} />
                        <input className='input-item' type="text" placeholder='Surname' name='surname' onChange={handleChange} value={registrationDetails.surname} />
                        <input className='input-item' type="email" placeholder='Email' name='email' onChange={handleChange} value={registrationDetails.email} />
                        <input className='input-item' type="password" placeholder='pasword' name='password' onChange={handleChange} value={registrationDetails.password} />
                        <input className='input-item' type="password" placeholder='confirm password' name='confirmPassword' onChange={handleChange} value={registrationDetails.confirmPassword} />
                        <p className='validation-error'>{validationError}</p>
                        <div className='conditions'>
                            <input type="checkbox" name="agreement" onChange={handleAgreement} value={registrationDetails.agreement} />
                            <p>I agree to the Terms and Conditions of Bidme</p>
                        </div>
                        <button className='submit-btn' type='submit' onClick={handleSubmit}>
                            Register
                        </button>
                    </div>

                </div>
                :
                <div className='container-padded'>
                    <div className='register-celeb'>
                        <div>
                        <MdCelebration style={{color: "#191923", width:"500px", height:"500px"}} />
                        </div>
                        <h3 className='title-primary'>You have been successfully registered! Head to the login page to start using BidMe</h3>
                        <div>
                        <Link to='/login' style={{width: '100%', height: '100%', textDecoration: 'none', color: '#191923'}}>
                        <button className='submit-btn'>
                            Login
                         </button>
                        </Link>
                        </div>
                    </div>
                </div>
            }
        </div>
  )
}

export default Register