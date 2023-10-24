import React from 'react'

const DownloadCustomerDetail = ({ setShowCustomerDetail }) => {
  return (
    <div className='custom_btn_section d-flex justify-content-end align-content-end'>
      <button className='border_radius_12 sf_pro_text cancel_btn' onClick={() => setShowCustomerDetail(false)}>
        Cancel
      </button>
      <button className='border_radius_12 sf_pro_text download_btn'>
        Download Campaign Details
      </button>
    </div>
  )
}

export default DownloadCustomerDetail