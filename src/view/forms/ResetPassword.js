import React, { useState } from 'react'
import { useAuth } from '../../context/authContext';
import { checkIfObjFieldsEmpty } from '../../utils/helper';

const ResetPassword = () => {

  const { authUser, setAuthUser } = useAuth()

  const [passwordDetials, setPasswordDetails] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  const handleOnchange = (e) => {
    const { name, value } = e.target
    setPasswordDetails({ ...passwordDetials, [name]: value })
  }

  const handleChangePassword = (e) => {
    e.preventDefault();

    let isFieldsEmpty = checkIfObjFieldsEmpty(passwordDetials)

    if (!isFieldsEmpty) {
      if (passwordDetials?.newPassword !== passwordDetials?.oldPassword && passwordDetials?.newPassword === passwordDetials?.confirmPassword) {
        setAuthUser({
          ...authUser,
          password: passwordDetials?.newPassword
        })
        alert("Password Updated Succesfuly")
      } else {
        alert("Please enter a new Password")
      }
    } else {
      alert("All field are required")
    }

  }
  return (
    <div className='reset_form_container'>
      <form className='reset_form_wrapper '>
        <h2 className='sf_pro_font_700w_42f text-center mb-4'>Reset Password</h2>
        <div className='d-flex justify-content-center align-items-center flex-column reset_form_content '>
          <div className='form_input border_radius_12 d-flex justify-content-start align-items-center  mb-3 px-3' >
            <input type='text' name='oldPassword' placeholder='Old Password'
              value={passwordDetials?.oldPassword}
              onChange={handleOnchange}
            />
          </div>
          <div className='form_input border_radius_12 d-flex justify-content-start align-items-center  mb-3 px-3' >
            <input type='text' name='newPassword' placeholder='New Password'
              value={passwordDetials?.newPassword}
              onChange={handleOnchange}
            />
          </div>
          <div className='form_input border_radius_12 d-flex justify-content-start align-items-center  mb-5 px-3' >
            <input type='text' name='confirmPassword' placeholder='Confirm Password'
              value={passwordDetials?.confirmPassword}
              onChange={handleOnchange}
            />
          </div>
          <div className='form_input border-0 border_radius_12'>
            <button className='custom_theme_btn w-100 border_radius_12' onClick={handleChangePassword}>
              Change Password
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ResetPassword
