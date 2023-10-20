import React from 'react'
import userIcon from "../../assets/icons/user-icon.svg"
import { Container } from 'reactstrap'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import SearchNavbar from '../../components/navbar/SearchNavbar'

const MainContainer = ({ isNavOpen, setIsNavOpen, children }) => {

  const handleToggle = () => {
    console.log("clicked")
    setIsNavOpen(!isNavOpen)
  }


  const mainContainerStyles = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    paddingLeft: window?.innerWidth <= 992 ? '0' : (isNavOpen ? '320px' : '0'),
    paddingRight: '16px'
  }

  return (
    <div className='min-vh-100 main_container transition_5s' style={mainContainerStyles}>

      {/* ============ top nav ================= */}
      <div className='bg-white px-3 mb-3 py-2 d-flex justify-content-between align-items-center'>
        {
          isNavOpen ?
            <AiOutlineMenu className={window?.innerWidth <= 992 ? 'fs-4 cursor text-white' : 'fs-4 cursor'} onClick={handleToggle} /> :
            <AiOutlineClose className='fs-4 cursor' onClick={handleToggle} />
        }
        <div>
          <img src={userIcon} alt='user-icon' />
        </div>
      </div>
      <Container className=''>
        <SearchNavbar />
        {/* ================== pages data ============== */}
        <section className='mx-5'>
          {children}
        </section>
      </Container>
    </div >
  )
}

export default MainContainer