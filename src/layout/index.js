import React, { useEffect, useState } from 'react'
import SideNaviagation from './navigation/SideNavigation'
import MainContainer from './container/MainContainer'
import useWindowSize from '../hooks/useWindowSize'

const MainLayout = ({ children }) => {

  const windowSize = useWindowSize()
  const [isNavOpen, setIsNavOpen] = useState(true)

  useEffect(() => {
    if (windowSize?.width <= 1360) {
      setIsNavOpen(false)
    } else {
      setIsNavOpen(true)
    }
  }, [windowSize?.width])


  return (
    <div className='min-vh-100 position-realtive d-flex w-100 main_layout' >
      <SideNaviagation isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <MainContainer isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} children={children} />
    </div>
  )
}

export default MainLayout
