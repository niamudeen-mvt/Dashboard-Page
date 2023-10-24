import React from 'react'

const SectionHeading = ({ mainHeading, subHeading }) => {
  return (
    <div className='top_content'>
      <h2 className='sf_pro_font_700 mb-3'>{mainHeading}</h2>
      {subHeading ? <p className='sf_pro_font_500'>{subHeading}</p> : null}
    </div>
  )
}

export default SectionHeading