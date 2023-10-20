import React from 'react'
import userIcon from "../../assets/icons/user-icon.svg"
import { Container } from 'reactstrap'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import SearchNavbar from '../../components/navbar/SearchNavbar'

const MainContainer = ({ isNavOpen, setIsNavOpen, children }) => {

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen)
  }

  const topNavStyles = {
    minHeight: '86px'
  }
  const mainContainerStyles = {
    paddingRight: '16px',
    width: '100%'
  }
  return (
    <div className='min-vh-100 main_container' style={mainContainerStyles}>
      <div className='bg-white flex_SB px-3 mb-3' style={topNavStyles}>
        {
          isNavOpen ?
            <AiOutlineMenu className='fs-4 cursor' onClick={handleToggle} /> :
            <AiOutlineClose className='fs-4 cursor' onClick={handleToggle} />
        }
        <div>
          <img src={userIcon} alt='user-icon' />
        </div>
      </div>
      <Container className=''>
        <SearchNavbar />
        <div className='mx-5'>
          {children}
        </div>
      </Container>
    </div>
  )
}

export default MainContainer