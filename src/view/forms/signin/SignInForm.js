import React, { useState } from 'react'
import emailIcon from "../../../assets/icons/email-icon.svg"
import passwordIcon from "../../../assets/icons/password.svg"
import { useNavigate } from 'react-router-dom'


const SignInForm = () => {

  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user?.email !== "" && user?.password !== "") {
      localStorage.setItem('user', JSON.stringify(user))
      navigate("/dashboard/campaign")
    }
  }
  return (
    <div className='signin_form_container' >
      <form className='bg-white border_radius_16 signin_form_wrapper'>
        <div className='text-center mb-4'>
          <h2 className='sf_pro_font_700w_42f'>Welcome Back</h2>
          <p className='sf_pro_text_400w_12f'>
            Welcome Back Please Login To Your Account
          </p>
        </div>

        <div className='d-flex justify-content-center align-items-center flex-column signin_form_content'>
          <div className='form_input w-100 border_radius_12 mb-3 d-flex justify-content-start align-items-center px-3 border' >
            <span className=''>
              <img src={emailIcon} alt='email-icon' className='img-fluid' />
            </span>
            <input type='email' placeholder='Email' className='input_interfont_400w_16f '
              value={user?.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className='form_input w-100 border_radius_12 mb-3 d-flex justify-content-start align-items-center px-3' >
            <span>
              <img src={passwordIcon} alt='password-icon' className='img-fluid' />
            </span>
            <input type='password' placeholder='Password' className='input_interfont_400w_16f'
              value={user?.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <div className='form_input border-0 border_radius_12 w-100'>
            <button className='custom_theme_btn w-100 border_radius_12' onClick={handleSubmit}>
              Log In
            </button>
          </div>
        </div>
      </form>
    </div >
  )
}

export default SignInForm