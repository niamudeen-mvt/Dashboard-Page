import React from 'react'
import searchIcon from "../../assets/icons/search-icon.svg"


const SearchInput = () => {
  return (
    <form role="search">
      <div className="input_section d-flex justify-content-start align-items-center px-4 border_radius_12" >
        <span className='mx-2'>
          <img src={searchIcon} alt='search-icon' />
        </span>
        <input className="mx-2 w-100" type="search" placeholder="Search Campaigns" aria-label="Search" />
      </div>
    </form>
  )
}

export default SearchInput