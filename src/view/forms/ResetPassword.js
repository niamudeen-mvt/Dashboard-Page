import React from 'react'

const ResetPassword = () => {
  return (
    <div className='form_container'>
      <form className=''>
        <h2 className='sf_pro_font_700w_42f text-center mb-3'>Reset Password</h2>
        <div className='d-flex justify-content-center align-items-center flex-column'>
          <div className='form_input border_radius_12 text-center border mb-3' >
            <input type='text' placeholder='old password' className='text-capitalize' />
          </div>
          <div className='form_input border_radius_12 text-center border mb-3' >
            <input type='text' placeholder='new password' className='text-capitalize' />
          </div>
          <div className='form_input border_radius_12 text-center border mb-5' >
            <input type='text' placeholder='confirm password' className='text-capitalize' />
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
