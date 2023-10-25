import React from 'react'
import { useLocation } from 'react-router-dom'

const DownloadCustomerDetail = ({ setShowCustomerDetail, margin }) => {
  const routeName = useLocation().pathname
  const subRoute = routeName.substring(0, 9)
  return (
    <div className={`custom_btn_section d-flex justify-content-end align-content-end ${margin ? margin : ''}`}>
      {
        (subRoute === "/campaign" && routeName !== "/campaign/customers") ? null :
          <button className='border_radius_12 sf_pro_text cancel_btn' onClick={() => setShowCustomerDetail(false)}>
            Cancel
          </button>
      }

      <button className='border_radius_12 sf_pro_text download_btn'>
        Download Campaign Details
      </button>
    </div>
  )
}

export default DownloadCustomerDetail