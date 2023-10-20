import React from 'react'
import searchIcon from "../../assets/icons/search-icon.svg"

const SearchNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">All Campaigns</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className='ms-auto mb-2 mb-lg-0'>
            <select className='filter_section px-4 border_radius_12 sf_pro_text'>
              <option hidden>Filter</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
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
    </nav>
  )
}

export default SearchNavbar
