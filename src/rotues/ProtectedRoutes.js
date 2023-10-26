import React, { useEffect } from 'react'
import MainLayout from '../layout/index'
import { Outlet, useNavigate } from 'react-router-dom'
import SignInPage from '../view/forms/signin'

const ProtectedRoute = ({ children }) => {

  const navigate = useNavigate()
  // consider user is authenticated
  let isAuthenticated = true

  // useEffect(() => {
  //   navigate("/campaign")
  // }, [])



  return (
    <>
      {
        isAuthenticated ?
          <MainLayout>
            <Outlet>
              {children}
            </Outlet>
          </MainLayout> :
          <SignInPage />
      }
    </>
  )
}

export default ProtectedRoute