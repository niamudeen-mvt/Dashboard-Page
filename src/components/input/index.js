import React from 'react'

const CampaignCustomInput = () => {
  return (
    <div className='d-flex input_section'>
      <div className='custom_input d-flex justify-center-end align-items-center border_radius_12 px-3'>
        <input type='text' placeholder='Amounts per postcard' className='w-100 interfont_14f_400w border-0' />
      </div>
      <button className='custom_theme_btn border_radius_12 mx-3'>Save</button>
    </div>
  )
}

export default CampaignCustomInput