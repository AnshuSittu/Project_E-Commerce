import React from 'react'
import "../CSS/LoginSignup.css"

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input id='name' type='text' placeholder='Your Name'/>
          <input id='mail' type='email' placeholder='Email Address'/>
          <input id='password' type='password' placeholder='Password'/>
          <button>Continue</button>
        </div>
        
        <p className="loginsignup-login">
          Already have an account ? <span>Login here</span>
        </p>
        <div className='loginsignup-agree'>
          <input type='checkbox' name='' id=''/>
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup