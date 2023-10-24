import React from 'react'
import { Table } from 'reactstrap'
import { Link } from 'react-router-dom'
import { campaignColumnData, campaignRowData } from '../../data/campaign-data'
import Pagination from '../pagination/Pagination'

const CustomTable = () => {
  return (
    <div className='custom_table_section'>
      <div className='custom_table_container'>
        <Table responsive className='table' >
          <thead>
            <tr>
              {
                campaignColumnData?.length ?
                  campaignColumnData.map(coloumn => {
                    return (
                      <th key={coloumn?.id} className={coloumn?.id === 1 ? 'coloumn_headings  sf_pro_font_400' : 'coloumn_headings sf_pro_font_400'} style={{
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
              campaignRowData?.length ?
                campaignRowData.map(row => {
                  return (
                    <tr key={row?.id}>
                      <td className="common_campaign_heading sf_pro_font_400">
                        <span className="mx-2 ">
                          <img src={row?.img} alt='campaign-defalut-img' className='img-fluid' />
                        </span>
                        {row?.campaignName}
                      </td>
                      <td className='common_campaign_heading sf_pro_font_400'>
                        {row?.storeName}
                      </td>
                      <td >
                        <p className={row?.status == "On Going" ? 'campaign_status sf_pro_text status_badge_ongoing d-flex justify-content-center align-items-center border_radius_12 mt-2' : 'campaign_status sf_pro_text status_badge_paused d-flex justify-content-center align-items-center border_radius_12 mt-2'}>
                          {row?.status}
                        </p>
                      </td>
                      <td className='common_campaign_heading sf_pro_font_400'>
                        {row?.budget}
                        <span className='per_month sf_pro_font_400 text-left'>Per Month</span>
                      </td>
                      <td className='common_campaign_date_heading sf_pro_font_400'>
                        {row?.startDate}
                      </td>
                      <td className='common_campaign_date_heading sf_pro_font_400'>
                        {row?.stopDate}
                      </td>
                      <td className='common_campaign_heading sf_pro_font_400 campaign_detail'>
                        <Link to={`/campaign/${row?.id}`}>
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
    </div>
  )
}

export default CustomTable