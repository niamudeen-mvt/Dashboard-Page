import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const PublicRoutes = ({ children }) => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate("/signin")
  }, [])

  return (
    <Outlet>
      {children}
    </Outlet>
  )
}

export default PublicRoutes