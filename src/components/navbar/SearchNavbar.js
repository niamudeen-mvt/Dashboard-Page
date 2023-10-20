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

          <ul class="navbar-nav ms-auto mb-2 mb-lg-0  filter_section px-4 border_radius_12 sf_pro_text d-flex justify-content-center align-items-center">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                {"Filter "}
              </a>
              {/* <ul class="dropdown-menu mt-2">
                <li><a class="dropdown-item" href="#">Test 1</a></li>
                <li><a class="dropdown-item" href="#">Test 2</a></li>
              </ul> */}
            </li>
          </ul>

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
    </nav>
  )
}

export default SearchNavbar
