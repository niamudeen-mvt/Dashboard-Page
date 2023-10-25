import React from 'react'
import { useLocation } from 'react-router-dom'
import { Container } from 'reactstrap'
import userIcon from "../../assets/icons/user-icon.svg"
import SearchBar from '../../components/navbar'
// import menuIcon from "../../assets/icons/menu-icon.svg"
// import closeIcon from "../../assets/icons/close-icon.svg"

const MainContainer = ({ isNavOpen, setIsNavOpen, children }) => {

  const routeName = useLocation()?.pathname

  const mainContainerStyles = {
    width: '83%',
  }
  // const handleToggle = () => {
  //   console.log("clicked")
  //   setIsNavOpen(!isNavOpen)
  // }

  // const mainContainerStyles = {
  //   position: 'absolute',
  //   top: '0',
  //   left: '0',
  //   width: '100%',
  //   paddingLeft: window?.innerWidth <= 992 ? '0' : (isNavOpen ? '320px' : '0'),
  //   paddingRight: '16px'
  // }

  return (
    <div className='min-vh-100 main_container transition_5s px-3' style={mainContainerStyles}>

      {/* ============ top nav ================= */}
      <div className='bg-white px-3 mb-3 py-3 d-flex justify-content-end align-items-center  top_nav'>
        <div>
          <img src={userIcon} alt='user-icon' />
        </div>
      </div>


      {/* <div className='bg-white px-3 mb-3 py-2 d-flex justify-content-between align-items-center'>
        {
          isNavOpen ?
            <span className={window?.innerWidth <= 992 ? 'fs-4 cursor text-white' : 'fs-4 cursor'} onClick={handleToggle}>
              <img src={menuIcon} alt='menu-icon' />
            </span> :
            <span className='fs-4 cursor' onClick={handleToggle} >
              <img src={closeIcon} alt='menu-icon' />
            </span>
        }
        <div>
          <img src={userIcon} alt='user-icon' />
        </div>
      </div> */}


      <Container className='container'>
        {/* {
          routeName === "/campaign" ? <SearchBar /> : null
        } */}
        {/* ================== pages data ============== */}
        <section className='mx-5'>
          {children}
        </section>
      </Container>
    </div >
  )
}

export default MainContainer