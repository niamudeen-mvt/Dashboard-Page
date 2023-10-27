import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap'
import { Link } from 'react-router-dom'
import Pagination from '../pagination/Pagination'
import SearchBar from '../search-bar'
import { DisabledBadge, ProgressBadge, SuccessBadge } from '../shared/badges'
import { customerDetailStatuslist } from '../../utils/constant/campaign-data'


const CustomerTable = ({ coloumnData, rowData, setShowCustomerDetail }) => {


  const [rowDataList, setRowDataList] = useState(rowData)
  const [currentPage, setCurrentPage] = useState(1)
  const [query, setQuery] = useState("")
  const [updatedRowList, setUpdatedRowList] = useState([])
  const [selectedFilterStatus, setSelectedFilterStatus] = useState('Filter')

  const handleSelectStatus = (e, index) => {
    let newArray = [...rowDataList]
    newArray[index].status = e.target.textContent
    setRowDataList(newArray)
  }

  const handleCustomerDetail = () => {
    setShowCustomerDetail(true)
  }
  const itemPerPage = 7
  const totalPages = rowDataList?.length

  const endIndex = currentPage * itemPerPage
  const startIndex = endIndex - itemPerPage



  const filterAndSearchQuery = () => {
    if (selectedFilterStatus !== "" && selectedFilterStatus !== "All" && selectedFilterStatus !== "Filter") {

      if (query?.length > 0) {

        //  if query and status both exist 
        let upadatedList = rowDataList?.filter(row => {
          return row.customer?.toLowerCase().includes(query.toLowerCase()) && row?.status === (selectedFilterStatus)
        })
        setUpdatedRowList(upadatedList)
      } else {

        // if status is selected
        let upadatedList = rowDataList?.filter(row => row?.status === (selectedFilterStatus))
        setUpdatedRowList(upadatedList.slice(startIndex, endIndex))
      }


    } else {
      if (query?.length > 0) {
        // if query exist
        let upadatedList = rowDataList?.filter(row => {
          return row.customer?.toLowerCase().includes(query.toLowerCase())
        })
        setUpdatedRowList(upadatedList)
      } else {
        // if query is empty 
        setUpdatedRowList(rowDataList.slice(startIndex, endIndex))
      }
    }
  }


  useEffect(() => {
    filterAndSearchQuery()
  }, [query, selectedFilterStatus, startIndex, endIndex])



  return (
    <>
      <SearchBar query={query} setQuery={setQuery} statusList={customerDetailStatuslist} selectedFilterStatus={selectedFilterStatus} setSelectedFilterStatus={setSelectedFilterStatus} placeholder="Search Customers" />
      <div className='custom_table_section'>
        <div className='custom_table_container mb-5'>
          {
            updatedRowList?.length ?
              <Table responsive className='table' borderless>
                <thead>
                  <tr>
                    {
                      coloumnData?.length ?
                        coloumnData.map(coloumn => {
                          return (
                            <th key={coloumn?.id} className='coloumn_headings sf_pro_font_400w_12f' style={{
                              minWidth: (coloumn?.id === 1 || coloumn?.id === 4) ? '240px' : (coloumn?.id === 2 ? '330px' : coloumn?.id === 3 ? '160px' : coloumn?.id === 6 ? '100px' : '240px')
                            }} >
                              {coloumn?.title}
                            </th>
                          )
                        }) : null
                    }
                  </tr>
                </thead>
                <tbody>
                  {
                    updatedRowList?.length ?
                      updatedRowList.map((row, index) => {
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
                                <div className="dropdown">
                                  <button className={`${selectedFilterStatus === "Filter" ? 'dropdown-toggle' : ''} w-100 d-flex`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {
                                      row?.status === 'Sent Out' ? <DisabledBadge content={row?.status} /> : row?.status === 'Scheduled' ? <ProgressBadge content={row?.status} /> : <SuccessBadge content={row?.status} />
                                    }
                                  </button>

                                  <ul className="dropdown-menu">
                                    {
                                      customerDetailStatuslist?.length ?
                                        customerDetailStatuslist?.filter(e => e !== "All").map((e) => {
                                          return (
                                            <li key={e}><a className="dropdown-item" href="#" onClick={(e) => handleSelectStatus(e, index)} >{e}</a></li>
                                          )
                                        }) : null
                                    }

                                  </ul>
                                </div>

                              </div>
                            </td>
                            <td className='common_campaign_heading'>
                              <p className='sf_pro_font_400w_16f created_on'>
                                {row?.createdOn}
                              </p>
                            </td>
                            <td className='common_campaign_location sf_pro_font_400w_14f'>
                              {row?.location}
                            </td>
                            <td className='common_campaign_heading  '>
                              <Link to="#" onClick={handleCustomerDetail} className='sf_pro_font_400w_16f campaign_action_link'>
                                {row?.action}
                              </Link>
                            </td>
                          </tr>
                        )
                      }) :
                      null
                  }
                </tbody>
              </Table>
              :
              <div className='text-center'>
                <p className='sf_pro_font_400w_12f'>No Data to Display</p>
              </div>
          }
        </div>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} rowDataList={updatedRowList} itemPerPage={itemPerPage} totalPages={totalPages} />
      </div >
    </>
  )
}

export default CustomerTable
