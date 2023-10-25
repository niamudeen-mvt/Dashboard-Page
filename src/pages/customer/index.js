import React, { useState } from 'react'
import SectionHeading from '../../components/shared/SectionHeading'
import SearchBar from '../../components/navbar'
import ReuseTable from '../../components/table/ResuseTable'
import { customerColumnsData } from '../../data/campaign-data'
import { customerRowData } from '../../data/campaign-data'
import CustomerDetailModal from '../../components/modal/CustomerDetailModal'

const CustomerPage = () => {

  const [showCustomerDetail, setShowCustomerDetail] = useState(false);
  return (
    <div className='common_section'>
      {
        showCustomerDetail ? <CustomerDetailModal setShowCustomerDetail={setShowCustomerDetail} showCustomerDetail={showCustomerDetail} /> : null
      }
      <SectionHeading mainHeading="Customer Detail" />
      <SearchBar />
      <ReuseTable coloumnData={customerColumnsData} rowData={customerRowData} setShowCustomerDetail={setShowCustomerDetail} showCustomerDetail={showCustomerDetail} />
    </div>
  )
}

export default CustomerPage