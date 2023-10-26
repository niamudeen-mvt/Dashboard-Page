import React from 'react'
import prevIcon from "../../assets/icons/left-arrow-icon.svg"
import rightIcon from "../../assets/icons/right-arrow-icon.svg"

const Pagination = ({ currentPage, setCurrentPage, rowDataList, itemPerPage, totalPages }) => {

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (((currentPage * itemPerPage) < totalPages) && rowDataList?.length > 0) {
      setCurrentPage(currentPage + 1)
    }
  }
  return (
    <div className='d-flex justify-content-end align-items-center pagination_section mt-2'>
      <div>
        <span className='prev_btn px-3 py-2 cursor' onClick={handlePrevPage}>
          <img src={prevIcon} alt="prev-icon-img" />
        </span>
        <span className='page_count mx-3 sf_pro_text_400w_12f text-center'>{currentPage} page</span>
        {/* <span className='page_count mx-3 sf_pro_text_400w_12f text-cener'>1 of {currentPage} page</span> */}
        <span className='next_btn px-3 py-2 cursor' onClick={handleNextPage}>
          <img src={rightIcon} alt="next-icon-img" />
        </span>
      </div>
    </div>
  )
}

export default Pagination