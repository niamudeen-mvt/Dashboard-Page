import React from 'react'
import postCardDesignImg from "../../assets/images/postcard-design-img1.png"
import postCardShadowImg from "../../assets/images/postcard-shadow-img.png"



export const PostImageCard1 = () => {
  return (
    <div className='design_card'>
      <div className='img_section mb-2 position-relative'>
        <img src={postCardDesignImg} alt='img' />
        <div className='img_overlay position-absolute d-flex justify-content-center align-items-center'>
          <span>Thankyou</span>
        </div>
      </div>
      <span className='tag'>img 1 X</span>
    </div>
  )
}

export const PostImageCard2 = () => {
  return (
    <div className='design_card mx-5'>
      <div className='img_section mb-2 position-relative'>
        <img src={postCardShadowImg} alt='img' />
        <div className='img_overlay2 position-absolute '>
          <span className='name mb-4'>Your Name</span>
          <p className='mb-2'>Address</p>
          <p>Number</p>
        </div>
      </div>
      <span className='tag'>img 2 X</span>
    </div>
  )
}

