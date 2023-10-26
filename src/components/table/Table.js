import React, { useEffect, useState } from 'react'
import { Table } from 'reactstrap'
import { Link } from 'react-router-dom'
import { campaignColumnData, campaignRowData } from '../../utils/constant/campaign-data'
import Pagination from '../pagination/Pagination'
import { DisabledBadge, SuccessBadge } from '../shared/badges'
import SearchBar from '../navbar'

const CustomTableComponent = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [rowDataList, setRowDataList] = useState(campaignRowData)
  const [query, setQuery] = useState("")
  const [updatedRowList, setUpdatedRowList] = useState([])

  const itemPerPage = 7
  const totalPages = campaignRowData?.length

  const endIndex = currentPage * itemPerPage
  const startIndex = endIndex - itemPerPage

  useEffect(() => {
    setUpdatedRowList(rowDataList.slice(startIndex, endIndex))
  }, [startIndex, endIndex])


  useEffect(() => {
    if (query?.length > 0) {
      let upadatedList = rowDataList?.filter(row => {
        return row.campaignName?.toLowerCase().includes(query.toLowerCase())
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
                  campaignColumnData?.length ?
                    campaignColumnData.map(coloumn => {
                      return (
                        <th key={coloumn?.id} className={coloumn?.id === 1 ? 'coloumn_headings  sf_pro_font_400w_12f' : 'coloumn_headings sf_pro_font_400w_12f'} style={{
                          minWidth: coloumn?.id === 1 ? '300.9px' : (coloumn?.id === 2 ? '142px' : coloumn?.id === 3 ? '183.45px' : coloumn?.id === 7 ? '212px' : '161px')
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
                      <tr key={row?.index}>
                        <td className="common_campaign_heading sf_pro_font_400w_16f">
                          <span className="mx-2 ">
                            <img src={row?.img} alt='campaign-defalut-img' className='img-fluid' />
                          </span>
                          {row?.campaignName}
                        </td>
                        <td className='common_campaign_heading sf_pro_font_400w_16f'>
                          {row?.storeName}
                        </td>
                        <td >
                          {
                            row?.status === 'On Going' ?
                              <SuccessBadge content={row?.status} />
                              :
                              <DisabledBadge content={row?.status} />
                          }
                        </td>
                        <td className='common_campaign_heading sf_pro_font_400w_16f'>
                          {row?.budget}
                          <span className='per_month sf_pro_font_400w_16f text-left'>Per Month</span>
                        </td>
                        <td className='common_campaign_date_heading sf_pro_font_400w_16f'>
                          {row?.startDate}
                        </td>
                        <td className='common_campaign_date_heading sf_pro_font_400w_16f'>
                          {row?.stopDate}
                        </td>
                        <td className='common_campaign_heading sf_pro_font_400w_16f campaign_detail'>
                          <Link to={`/campaign/${index + 1}`}>
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
      </div>
    </>
  )
}

export default CustomTableComponent