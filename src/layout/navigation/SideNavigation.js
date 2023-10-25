import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoutBtn from "../../assets/icons/logout-icon.svg"
import { menuItems } from '../../menu-items'



const SideNaviagation = ({ isNavOpen }) => {

  const routeName = (useLocation()).pathname
  const subRoute = routeName?.substring(0, 9)



  const sideNavigationStyles = {
    width: '17%',
    marginBottom: '4px'
  }

  // const sideNavigationStyles = {
  //   position: 'absolute',
  //   top: '0',
  //   left: isNavOpen ? '0' : '-100%',
  //   width: '320px',
  //   zIndex: '1',
  // }

  return (
    <div className='side_navigaiton_container transition_5s min-vh-96 px-3 position-relative'
      style={sideNavigationStyles}
    >
      {
        isNavOpen ?
          <div className='content_section'>
            <div className='top_section'>
              <h2 className="mx-4 ">Paper Notes</h2>
              <div className='navigation d-flex justify-content-between align-items-center flex-column '>
                {
                  menuItems?.length ?
                    menuItems.map(menu => {
                      return (
                        <Link to={menu?.url} key={menu?.id} className={`w-100 py-3 mb-4 text-white d-flex justify-content-start align-items-center border_radius_12 nav_link ${(routeName === menu?.url || subRoute === menu?.url) ? 'active' : ''}`}>
                          <span className='mx-4'>
                            <img src={((routeName === menu?.url || subRoute === menu?.url)) ? menu.activeIcon : menu.icon} alt='icon' />
                            {/* <img src={((routeName === menu?.url || subRoute === menu?.url) && menu?.id === 1) ? menu.activeIcon : menu.icon} style={{ backgroundColor: (menu?.id === 1 && routeName === menu?.url) ? 'white' : routeName !== menu?.url ? 'transparent' : '#219fff' }} alt='icon' /> */}
                          </span>
                          <p>
                            {menu?.title}
                          </p>
                        </Link>
                        //   <Link to={menu?.url} key={menu?.id} className={routeName === menu?.url ? 'w-100 py-3 mb-3 text-white d-flex justify-content-start align-items-center active border_radius_12' : 'w-100 py-3 mb-3 text-white d-flex justify-content-start align-items-center border_radius_12 '}>
                        //   <span className='mx-4'>
                        //     <img src={menu.icon} alt='icon' />
                        //   </span>
                        //   <p>
                        //     {menu?.title}
                        //   </p>
                        // </Link>
                      )
                    })
                    : null
                }
              </div>
            </div>
            <div className='bottom_section d-flex justify-content-start align-items-center position-absolute py-5'>
              <button className='d-flex justify-content-start align-items-center mx-4'>
                <span className='mx-3'>
                  <img src={logoutBtn} alt="logout-btn-icon" />
                </span>
                <p>Log Out</p>
              </button>
            </div>
          </div > : null
      }
    </div>
  )
}

export default SideNaviagation
