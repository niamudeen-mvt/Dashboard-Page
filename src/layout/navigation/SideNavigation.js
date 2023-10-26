import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logoutBtn from "../../assets/icons/logout-icon.svg"
import { menuItems } from '../../utils/constant/menu-items'



const SideNaviagation = ({ isNavOpen }) => {
  const navigate = useNavigate()
  const routeName = (useLocation()).pathname
  const subRoute = routeName?.substring(0, 19)

  console.log(routeName, "routeName");
  console.log(subRoute, "subroute")

  const sideNavigationStyles = {
    width: '17%',
    marginBottom: '4px'
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate("/signin")
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
                        <Link to={menu?.url} key={menu?.id} className={`w-100 py-3 mb-4 text-white d-flex justify-content-start align-items-center border_radius_12 nav_link interfont_14f_400w ${(routeName === menu?.url || subRoute === menu?.url) ? 'active' : ''}`}>
                          <span className='mx-4'>
                            <img src={((routeName === menu?.url || subRoute === menu?.url)) ? menu.activeIcon : menu.icon} alt='icon' />
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
            <div className='bottom_section d-flex justify-content-start align-items-center position-absolute py-5'>
              <button className='d-flex justify-content-start align-items-center mx-4' onClick={handleLogout}>
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
