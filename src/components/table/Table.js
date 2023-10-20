import React from 'react'
import { Table, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { campaignColumnData, campaignRowData } from '../../data/campaign-data'
import useWindowSize from '../../hooks/useWindowSize'

const CustomTable = () => {
  const windowSize = useWindowSize()
  return (
    <Table responsive>
      <thead>
        <tr>
          {
            campaignColumnData?.length ?
              campaignColumnData.map(coloumn => {
                return (
                  <th key={coloumn?.id} className={coloumn?.id === 1 ? 'coloumn_headings px-4' : 'coloumn_headings'}>
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
                  <td className={windowSize?.width <= 1440 ? 'common_campaign_heading px-3' : 'common_campaign_heading'}>
                    <span className={windowSize?.width <= 1440 ? 'd-none' : 'mx-3'}>
                      <img src={row?.img} alt='campaign-defalut-img' className='img-fluid' />
                    </span>
                    {row?.campaignName}
                  </td>
                  <td className='common_campaign_heading'>
                    {row?.storeName}
                  </td>
                  <td>
                    <p className={row?.status == "On Going" ? 'campaign_status status_badge_ongoing flex_center' : 'campaign_status status_badge_paused flex_center'}>
                      {row?.status}
                    </p>
                  </td>
                  <td className='common_campaign_heading'>
                    {row?.budget}
                    <span className='per_month'>Per Month</span>
                  </td>
                  <td className='common_campaign_heading'>
                    {row?.startDate}
                  </td>
                  <td className='common_campaign_heading'>
                    {row?.stopDate}
                  </td>
                  <td className='common_campaign_heading'>
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
  )
}

export default CustomTable