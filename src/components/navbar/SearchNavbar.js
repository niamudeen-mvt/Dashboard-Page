import React, { useState } from 'react'
import searchIcon from "../../assets/icons/search-icon.svg"

const SearchNavbar = () => {

  const [selectedItem, setSelectedItem] = useState('Filter')
  console.log(selectedItem, "selectedItem")
  const handleSelect = (e) => {
    setSelectedItem(e.target.textContent)
  }
  return (
    <div className='search_navbar mb-5 p-0'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <a className="navbar-brand sf_pro_font_700" href="#">All Campaigns</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <div class="dropdown ms-auto filter_container">
              <button class="dropdown-toggle w-100 border border_radius_12" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {selectedItem}
              </button>
              <ul class="dropdown-menu">
                <li ><a class="dropdown-item" href="#" onClick={handleSelect}>Test 1</a></li>
                <li ><a class="dropdown-item" href="#" onClick={handleSelect}>Test 2</a></li>
              </ul>
            </div>

            {/* =============== search component ================+ */}
            <form role="search">
              <div className="input_section d-flex justify-content-start align-items-center px-4 border_radius_12" >
                <span className='mx-2'>
                  <img src={searchIcon} alt='search-icon' />
                </span>
                <input className="mx-2 w-100" type="search" placeholder="Search Campaigns" aria-label="Search" />
              </div>
            </form>
          </div>
        </div>
      </nav >
    </div >
  )
}

export default SearchNavbar
