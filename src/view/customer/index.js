import React, { useState } from 'react'
import SectionHeading from "../../components/shared/SectionHeading"
import CustomerTable from '../../components/table/CustomerTable'
import { customerColumnsData, customerRowData } from '../../utils/constant/campaign-data'
import CustomerDetailModal from '../../components/modal/CustomerDetailModal'

const CustomerPage = () => {

  const [showCustomerDetail, setShowCustomerDetail] = useState(false);


  return (
    <section className='customer_detail_section'>
      <div className='common_section_margin'>
        {
          showCustomerDetail ? <CustomerDetailModal setShowCustomerDetail={setShowCustomerDetail} showCustomerDetail={showCustomerDetail} /> : null
        }
        <SectionHeading mainHeading="Customer Detail" />
        <CustomerTable coloumnData={customerColumnsData} rowData={customerRowData} setShowCustomerDetail={setShowCustomerDetail} showCustomerDetail={showCustomerDetail} />
      </div>
    </section>
  )
}

export default CustomerPage