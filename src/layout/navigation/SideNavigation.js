import React from 'react'
import logoutBtn from "../../assets/icons/logout-icon.svg"
import { menuItems } from '../../menu-items'
import { Link } from 'react-router-dom'



const SideNaviagation = ({ isNavOpen }) => {

  const sideNavigationStyles = {
    position: 'absolute',
    top: '0',
    left: isNavOpen ? '0' : '-100%',
    width: '320px',
    zIndex: '1'
  }

  return (
    <div className='side_navigaiton_container transition_5s min-vh-100'
      style={sideNavigationStyles}
    >
      {
        isNavOpen ?
          <div className='content_section'>
            <div className='top_section '>
              <h2 className="mx-4">Paper Notes </h2>
              <div className='navigation flex_SBV'>
                {
                  menuItems?.length ?
                    menuItems.map(menu => {
                      return (
                        <Link to={menu?.url} key={menu?.id} className="w-100 py-3 mb-2 text-white flex_start">
                          <span className='mx-4'>
                            <img src={menu.icon} alt='icon' />
                          </span>
                          <p>
                            {menu?.title}
                          </p>
                        </Link>
                      )
                    })
                    : null
                }
              </div>
            </div>
            <div className='bottom_section flex_start position-absolute'>
              <button className='flex_start mx-4'>
                <span >
                  <img src={logoutBtn} alt="logoutBtn" />
                </span>
                <p >Log Out</p>
              </button>
            </div>
          </div > : null
      }
    </div>
  )
}

export default SideNaviagation
