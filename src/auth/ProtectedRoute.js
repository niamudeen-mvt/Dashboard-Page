import React from 'react'
import MainLayout from '../layout/index'
import { Outlet } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {

  // consider user is login
  let isAuthenticated = true


  return (
    <>
      {
        isAuthenticated ?
          <MainLayout>
            <Outlet>
              {children}
            </Outlet>
          </MainLayout> :
          <h1>Unprotected Route</h1>
      }
    </>
  )
}

export default ProtectedRoute