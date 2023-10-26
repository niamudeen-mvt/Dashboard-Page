import React from 'react'

const ResetPassword = () => {
  return (
    <div className='reset_form_container'>
      <form className='reset_form_wrapper '>
        <h2 className='sf_pro_font_700w_42f text-center mb-4'>Reset Password</h2>
        <div className='d-flex justify-content-center align-items-center flex-column reset_form_content '>
          <div className='form_input border_radius_12 d-flex justify-content-start align-items-center  mb-3 px-3' >
            <input type='password' placeholder='Old Password' />
          </div>
          <div className='form_input border_radius_12 d-flex justify-content-start align-items-center  mb-3 px-3' >
            <input type='password' placeholder='New Password' />
          </div>
          <div className='form_input border_radius_12 d-flex justify-content-start align-items-center  mb-5 px-3' >
            <input type='password' placeholder='Confirm Password' />
          </div>
          <div className='form_input border-0 border_radius_12'>
            <button className='custom_theme_btn w-100 border_radius_12'>
              Change Password
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ResetPassword
