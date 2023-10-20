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


  const mainLayoutStyles = {
    display: 'flex',
    width: '100%'
  }
  return (
    <div className='min-vh-100' style={mainLayoutStyles}>
      {/* =========== 20% ============ */}
      <SideNaviagation isNavOpen={isNavOpen} />

      {/* ============== 80% ========== */}
      <MainContainer isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} children={children} />
    </div>
  )
}

export default MainLayout
