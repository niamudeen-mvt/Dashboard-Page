import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap'
import { Link } from 'react-router-dom'
import Pagination from '../../pagination/Pagination'
import SearchBar from '../../navbar'
import { DisabledBadge, ProgressBadge, SuccessBadge } from '../badges'
import { customerDetailStatuslist } from '../../../utils/constant/campaign-data'

const CustomerTable = ({ coloumnData, rowData, setShowCustomerDetail }) => {
  const [rowDataList, setRowDataList] = useState(rowData)
  const [currentPage, setCurrentPage] = useState(1)
  const [query, setQuery] = useState("")
  const [updatedRowList, setUpdatedRowList] = useState([])

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

  useEffect(() => {
    setUpdatedRowList(rowDataList.slice(startIndex, endIndex))
  }, [startIndex, endIndex])


  useEffect(() => {
    if (query?.length > 0) {
      let upadatedList = rowDataList?.filter(row => {
        return row.customer?.toLowerCase().includes(query.toLowerCase())
      })
      setUpdatedRowList(upadatedList)
    } else {
      setUpdatedRowList(rowDataList.slice(startIndex, endIndex))
    }
  }, [query])


  return (
    <>
      <SearchBar query={query} setQuery={setQuery} />
      <div className='custom_table_section'>
        <div className='custom_table_container'>
          <Table responsive className='table' >
            <thead>
              <tr>
                {
                  coloumnData?.length ?
                    coloumnData.map(coloumn => {
                      return (
                        <th key={coloumn?.id} className='coloumn_headings sf_pro_font_400w_12f' style={{
                          minWidth: (coloumn?.id === 1 || coloumn?.id === 4) ? '243px' : (coloumn?.id === 2 ? '338px' : coloumn?.id === 3 ? '154px' : coloumn?.id === 6 ? '154px' : '')
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
                            <div class="dropdown">
                              <button class="dropdown-toggle w-100 d-flex" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {
                                  row?.status === 'Sent Out' ? <DisabledBadge content={row?.status} /> : row?.status === 'Scheduled' ? <ProgressBadge content={row?.status} /> : <SuccessBadge content={row?.status} />
                                }
                              </button>
                              <ul class="dropdown-menu">
                                {
                                  customerDetailStatuslist?.length ?
                                    customerDetailStatuslist?.map((e) => {
                                      return (
                                        <li key={e}><a class="dropdown-item" href="#" onClick={(e) => handleSelectStatus(e, index)} >{e}</a></li>
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
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} rowDataList={rowDataList} itemPerPage={itemPerPage} totalPages={totalPages} />
      </div >
    </>
  )
}

export default CustomerTable
