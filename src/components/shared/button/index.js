import React from 'react'
import { useLocation } from 'react-router-dom'

const DownloadCustomerDetail = ({ setShowCustomerDetail, margin }) => {
  const subRoute = useLocation().pathname?.substring(0, 9)
  return (
    <div className={`custom_btn_section d-flex justify-content-end align-content-end ${margin ? margin : ''}`}>
      {
        subRoute === "/campaign" ? null :
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