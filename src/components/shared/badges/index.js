import React from 'react'

export const SuccessBadge = ({ content }) => {
  // green color
  return (
    <div className='progress_badge border_radius_12 sf_pro_text_400w_12f d-flex justify-content-center align-items-center' style={{ backgroundColor: '#E3FFBF' }}>
      {content}
    </div>
  )
}

export const ProgressBadge = ({ content }) => {
  // yellow color
  return (
    <div className='progress_badge border_radius_12 sf_pro_text_400w_12f d-flex justify-content-center align-items-center' style={{ backgroundColor: '#FFF2AD' }}>
      {content}
    </div>
  )
}

export const DisabledBadge = ({ content }) => {
  // green color
  return (
    <div className='disabled_badge border_radius_12 sf_pro_text_400w_12f d-flex justify-content-center align-items-center' style={{ backgroundColor: '#EAEAEA' }}>
      {content}
    </div>
  )
}

export const CustomerBadge = ({ content }) => {
  // dark grey color
  return (
    <div className='customer_badge  sf_pro_font_400w_16f d-flex justify-content-center align-items-center border_radius_9' style={{
      backgroundColor:
        '#d4d4d4'
    }}>
      {content}
    </div>
  )
}


