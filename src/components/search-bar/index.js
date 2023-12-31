import React from 'react'
import Filter from './Filter'
import SearcInput from './SearcInput'
import { useLocation } from 'react-router-dom'

const SearchBar = ({ query, setQuery, statusList, selectedFilterStatus, setSelectedFilterStatus, placeholder }) => {
  const routeName = useLocation().pathname
  return (
    <div className='search_navbar mb-5 p-0'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          {
            routeName === "/dashboard/campaign" ?
              <a className="navbar-brand sf_pro_font_700" href="#">All Campaigns</a>
              : null
          }
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Filter statusList={statusList} selectedFilterStatus={selectedFilterStatus}
              setSelectedFilterStatus={setSelectedFilterStatus}
            />
            <SearcInput query={query} setQuery={setQuery} placeholder={placeholder} />
          </div>
        </div>
      </nav >
    </div >
  )
}

export default SearchBar
