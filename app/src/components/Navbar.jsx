import React from 'react'
import "./styles/navbarStyles.css"
import { FaGavel } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md"
import { Link } from "react-router-dom"
import { useStoreActions, useStoreState } from 'easy-peasy';



function Navbar() {

  const userStore = useStoreState((state) => state.userStore);

  const handleLogout = (e) => {
    localStorage.setItem("current_user", "");
    window.location.href = "http://localhost:3000/"
  }
  return (
      <div className='navbar-container'>
      <div className="navbar-inner">
        <div className='logo-container'>
        <Link to='/' style={{ textDecoration: 'none', color: '#191923'}}>
          <FaGavel style={{ color: "#191923", width: "70px", height: '70px' }} />
          </Link>
        <Link to='/' style={{ textDecoration: 'none', color: '#191923'}}>
          <p className='logo-name'>Bidme</p>
          </Link>
          </div>
        <div className='navitem-container'>
            <Link to='/' style={{width: '100%', height: '100%', textDecoration: 'none', color: '#191923'}}>
          <div className='nav-item'>
              Home
          </div>
            </Link>
            <Link to='/products' style={{width: '100%', height: '100%', textDecoration: 'none', color: '#191923'}}>
          <div className='nav-item'>
              Products
          </div>
            </Link>
            
            <Link to='/contact' style={{width: '100%', height: '100%', textDecoration: 'none', color: '#191923'}}>
          <div className='nav-item'>
              Contact
          </div>
            </Link>
          
        </div>
        <div className='navaccount-container'>
          <div className='nav-account'>
            <MdAccountCircle style={{color: "#191923", width: '50px', height: '50px'}} />
          </div>
          
          <div className='loginoptions-container'>
            {!userStore.id ? 
              <div>

          <Link to='/login' style={{width: '100%', height: '100%', textDecoration: 'none', color: '#191923'}}>
          <div>
              Login
          </div>
            </Link>

          <Link to='/register' style={{width: '100%', height: '100%', textDecoration: 'none', color: '#191923'}}>
          <div>
              Register
          </div>
            </Link>
              </div>
              : 
              <div className='loggedIn-container'>
                <div>
                  
              <div>
                    { userStore.name}
              </div>
              <div>
                  {userStore.surname}
              </div>
              </div>

                <div className='logout-btn' onClick={handleLogout}>
                    Logout
                </div>
                
                  </div>
          }
          </div>
        </div>

      </div>
      {/* --------------------------mobile------------------ */}
      <div className="navbar-innerMobile">
        <div className='logo-containerMobile'>
        <Link to='/' style={{ textDecoration: 'none', color: '#191923'}}>
          <FaGavel style={{ color: "#191923", width: "70px", height: '70px' }} />
          </Link>
          </div>
        <div className='navitem-containerMobile'>
            <Link to='/' style={{width: '100%', height: '100%', textDecoration: 'none', color: '#191923'}}>
          <div className='nav-itemMobile'>
              Home
          </div>
            </Link>
            <Link to='/products' style={{width: '100%', height: '100%', textDecoration: 'none', color: '#191923'}}>
          <div className='nav-itemMobile'>
              Products
          </div>
            </Link>
            
            <Link to='/contact' style={{width: '100%', height: '100%', textDecoration: 'none', color: '#191923'}}>
          <div className='nav-itemMobile'>
              Contact
          </div>
            </Link>
          
        </div>
        <div className='navaccount-containerMobile'>
          <div className='nav-accountMobile'>
            <MdAccountCircle style={{color: "#191923", width: '30px', height: '30px'}} />
          </div>
          
          <div className='loginoptions-containerMobile'>
            {!userStore.id ? 
              <div>

          <Link to='/login' style={{width: '100%', height: '100%', textDecoration: 'none', color: '#191923'}}>
          <div>
              Login
          </div>
            </Link>

          <Link to='/register' style={{width: '100%', height: '100%', textDecoration: 'none', color: '#191923'}}>
          <div>
              Register
          </div>
            </Link>
              </div>
              : 
              <div className='loggedIn-containerMobile'>
                <div>
                  
              <div>
                    { userStore.name}
              </div>
              <div>
                  {userStore.surname}
              </div>
              </div>

                <div className='logout-btnMobile' onClick={handleLogout}>
                    Logout
                </div>
                
                  </div>
          }
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar