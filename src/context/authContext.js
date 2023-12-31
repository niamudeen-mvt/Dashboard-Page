import { createContext, useContext, useState } from "react"


const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {

  const [authUser, setAuthUser] = useState({
    email: "js@gmail.com",
    password: "123",
    isLoggedIn: false
  })

  console.log(authUser);

  const logout = () => {
    setAuthUser({ ...authUser, isLoggedIn: false })
  }


  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, logout }}>
      {children}
    </AuthContext.Provider>
  )
}