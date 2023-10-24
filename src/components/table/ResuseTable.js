import React, { useState } from 'react'
import { Table } from 'reactstrap'
import { Link } from 'react-router-dom'
import Pagination from '../pagination/Pagination'

const ReuseTable = ({ coloumnData, rowData, setShowCustomerDetail }) => {

  // const dropdownList = [
  //   'Sent Out',
  //   'Delivered',
  //   'Scheduled'
  // ]

  const handleCustomerDetail = () => {
    setShowCustomerDetail(true)
  }
  return (
    <div className='custom_table_section'>
      <div className='custom_table_container'>
        <Table responsive className='table' >
          <thead>
            <tr>
              {
                coloumnData?.length ?
                  coloumnData.map(coloumn => {
                    return (
                      <th key={coloumn?.id} className='coloumn_headings sf_pro_font_400w_12f'>
                        {coloumn?.title}
                      </th>
                    )
                  }) : null
              }
            </tr>
          </thead>
          <tbody>
            {
              rowData?.length ?
                rowData.map(row => {
                  return (
                    <tr key={row?.id}>
                      <td className="common_campaign_heading sf_pro_font_400w_16f">
                        {row?.customer}
                      </td>
                      <td className="common_campaign_heading sf_pro_font_400w_16f">
                        <span className="mx-2 ">
                          <img src={row?.img} alt='campaign-defalut-img' className='img-fluid' />
                        </span>
                        {row?.campaignName}
                      </td>
                      <td className={`common_campaign_heading`} >
                        <div className='sf_pro_font_400w_12f'>
                          <span className={`status_dropdown sf_pro_text_400w_12f border_radius_12 ${row?.status === 'Sent Out' ? 'grey_status' : (row?.status === 'Scheduled' ? 'yellow_status' : 'green_status')}`}>
                            {row?.status}
                          </span>

                          <select className='mx-2'>
                            <option selected hidden className=''></option>
                            {/* {
                            dropdownList?.length ?
                              dropdownList?.map((e, index) => {
                                return (
                                  <option key={e} selected={e === row?.status} className='bg-white' value={e}>
                                    {e}
                                  </option>
                                )
                              }) : null
                          } */}
                          </select>

                        </div>
                      </td>
                      <td className='common_campaign_heading'>
                        <p className='sf_pro_font_400w_16f'>
                          {row?.createdOn}
                        </p>
                      </td>
                      <td className='common_campaign_heading sf_pro_font_400w_14f'>
                        {row?.location}
                      </td>
                      <td className='common_campaign_heading sf_pro_font_400w_16f campaign_detail'>
                        <Link to="#" onClick={handleCustomerDetail}>
                          {row?.action}
                        </Link>
                      </td>
                    </tr>
                  )
                }) : null
            }
          </tbody>
        </Table>
      </div>
      <Pagination />
    </div >
  )
}

export default ReuseTable
