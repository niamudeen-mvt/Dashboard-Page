import React, { useState } from 'react'

const Filter = () => {

  const [selectedItem, setSelectedItem] = useState('Filter')
  const handleSelect = (e) => {
    setSelectedItem(e.target.textContent)
  }
  return (
    <div class="dropdown ms-auto filter_container">
      <button class="dropdown-toggle w-100 border border_radius_12" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {selectedItem}
      </button>
      <ul class="dropdown-menu">
        <li ><a class="dropdown-item" href="#" onClick={handleSelect}>Test 1</a></li>
        <li ><a class="dropdown-item" href="#" onClick={handleSelect}>Test 2</a></li>
      </ul>
    </div>
  )
}

export default Filter