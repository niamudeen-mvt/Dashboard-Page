import React from 'react'
import SignInForm from './SignInForm'

const SignInPage = () => {
  return (
    <section className='singin_page_section min-vh-100'>
      <div className=''>
        <div className='text-center top_heading'>
          <h3 className='interfont_32f_700w'>Paper <span className='notes'>Notes</span></h3>
        </div>
        <SignInForm />
      </div>
    </section>
  )
}

export default SignInPage