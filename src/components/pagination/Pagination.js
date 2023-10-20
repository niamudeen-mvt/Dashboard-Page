import React from 'react'
import prevIcon from "../../assets/icons/left-arrow-icon.svg"
import rightIcon from "../../assets/icons/right-arrow-icon.svg"

const Pagination = () => {
  const pageNumber = 3
  return (
    <div className='d-flex justify-content-end align-items-center pagination_section mt-2'>
      <div>
        <span className='icon px-3 py-2'>
          <img src={prevIcon} alt />
        </span>
        <span className='page_count mx-3 sf_pro_text text-cener'>1 of {pageNumber} page</span>
        <span className='icon px-3 py-2'>
          <img src={rightIcon} alt />
        </span>
      </div>
    </div>
  )
}

export default Pagination