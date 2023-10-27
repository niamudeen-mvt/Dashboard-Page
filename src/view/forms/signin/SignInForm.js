import React from 'react'
import emailIcon from "../../../assets/icons/email-icon.svg"
import passwordIcon from "../../../assets/icons/password.svg"
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/authContext'
import { checkIfObjFieldsEmpty } from '../../../utils/helper'


const SignInForm = () => {
  const { authUser, setAuthUser } = useAuth()

  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();


    let isFieldsEmpty = checkIfObjFieldsEmpty({
      email: authUser?.email,
      password: authUser?.password
    })

    console.log(isFieldsEmpty, "isFieldsEmpty");
    if (!isFieldsEmpty) {
      setAuthUser({ ...authUser, isLoggedIn: true })
      navigate("/dashboard/campaign")
    } else {
      alert("All the fields are required")
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

        <div className='d-flex justify-content-center align-items-center flex-column signin_form_content '>
          <div className='form_input w-100 border_radius_12 mb-3 d-flex justify-content-start align-items-center px-3 ' >
            <span className=''>
              <img src={emailIcon} alt='email-icon' className='img-fluid' />
            </span>
            <input type='email' placeholder='Email' className='input_interfont_400w_16f '
              value={authUser?.email}
              onChange={(e) => setAuthUser({ ...authUser, email: e.target.value })}
            />
          </div>
          <div className='form_input w-100 border_radius_12 d-flex justify-content-start align-items-center px-3 mb-5' >
            <span>
              <img src={passwordIcon} alt='password-icon' className='img-fluid' />
            </span>
            <input type='password' placeholder='Password' className='input_interfont_400w_16f'
              value={authUser?.password}
              onChange={(e) => setAuthUser({ ...authUser, password: e.target.value })}
            />
          </div>
          <div className='form_input border-0 border_radius_12 w-100 '>
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