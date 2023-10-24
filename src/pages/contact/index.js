import React from 'react'
import SectionHeading from '../../components/common/SectionHeading'
import SearchBar from '../../components/navbar'
import ReuseTable from '../../components/table/ResuseTable'
import { customerColumnsData } from '../../data/campaign-data'
import { customerRowData } from '../../data/campaign-data'

const ContactPage = () => {
  return (
    <div className='common_section'>
      <SectionHeading mainHeading="Contact Page" />
      <SearchBar />
      <ReuseTable coloumnData={customerColumnsData} rowData={customerRowData} />
    </div>
  )
}

export default ContactPage