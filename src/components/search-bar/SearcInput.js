import React from 'react'
import searchIcon from "../../assets/icons/search-icon.svg"


const SearchInput = ({ query, setQuery, placeholder }) => {

  const handleChange = (e) => {
    setQuery(e.target.value)
  }
  return (
    <form role="search">
      <div className="input_section d-flex justify-content-start align-items-center px-4 border_radius_12" >
        <span className='mx-2'>
          <img src={searchIcon} alt='search-icon' />
        </span>
        <input className="mx-2 w-100 interfont_14f_400w" type="search"
          placeholder={placeholder ? placeholder : "Search Campaigns"} aria-label="Search"
          value={query}
          onChange={handleChange}
        />
      </div>
    </form>
  )
}

export default SearchInput