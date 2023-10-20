import React from 'react'
import { Table } from 'reactstrap'
import { Link } from 'react-router-dom'
import { campaignColumnData, campaignRowData } from '../../data/campaign-data'
// import useWindowSize from '../../hooks/useWindowSize'
import Pagination from '../pagination/Pagination'

const CustomTable = () => {
  // const windowSize = useWindowSize()
  return (
    <div className='custom_table_section'>
      <Table responsive >
        <thead>
          <tr>
            {
              campaignColumnData?.length ?
                campaignColumnData.map(coloumn => {
                  return (
                    <th key={coloumn?.id} className={coloumn?.id === 1 ? 'coloumn_headings sf_pro_font_400' : 'coloumn_headings sf_pro_font_400'}>
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
                    {/* <td className={windowSize?.width <= 1440 ? 'common_campaign_heading sf_pro_font_400 px-3' : 'common_campaign_heading sf_pro_font_400'}>
                      <span className={windowSize?.width <= 1440 ? 'd-none' : 'mx-3'}>
                        <img src={row?.img} alt='campaign-defalut-img' className='img-fluid' />
                      </span>
                      {row?.campaignName}
                    </td> */}
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
                    <td className='common_campaign_heading sf_pro_font_400'>
                      <Link>
                        {row?.action}
                      </Link>
                    </td>
                  </tr>
                )
              }) : null
          }
        </tbody>
      </Table>
      <Pagination />
    </div>
  )
}

export default CustomTable