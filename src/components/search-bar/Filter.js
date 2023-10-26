import React from 'react'

const Filter = ({ selectedFilterStatus, setSelectedFilterStatus, statusList }) => {


  const handleSelect = (e) => {
    setSelectedFilterStatus(e.target.textContent)
  }
  return (
    <div class="dropdown ms-auto filter_container">
      <button class="dropdown-toggle w-100 border border_radius_12 sf_pro_text_500w_14f" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {selectedFilterStatus}
      </button>
      <ul class="dropdown-menu">
        {
          statusList?.length ?
            statusList?.map(e => {
              return (
                <li key={e}><a class="dropdown-item sf_pro_text_500w_14f" href="#" onClick={handleSelect}>{e}</a></li>
              )
            }) : <li ><a class="dropdown-item sf_pro_text_500w_14f" href="#" onClick={handleSelect}>No Status Available</a></li>
        }
      </ul>
    </div>
  )
}

export default Filter