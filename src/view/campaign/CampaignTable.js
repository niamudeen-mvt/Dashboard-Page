import React from 'react'
import { Table } from 'reactstrap'
import { SuccessBadge } from '../../components/shared/badges';

const CampaignTable = ({ rowData, coloumnData }) => {

  return (
    <div className='custom_table_section'>
      <div className='custom_table_container pb-0' style={{
        border: '1px solid #DBDBDB',
        minHeight: '113px'
      }}>
        <Table responsive className='table' id="customer_table_detail" >
          <thead>
            <tr>
              {
                coloumnData?.length ?
                  coloumnData.map(coloumn => {
                    return (
                      <th key={coloumn?.id} className={coloumn?.id === 1 ? 'coloumn_headings  sf_pro_font_400w_12f' : 'coloumn_headings sf_pro_font_400w_12f'} style={{
                        minWidth: coloumn?.id === 1 ? '247px' : (coloumn?.id === 2 ? '220px' : coloumn?.id === 7 ? '180px' : '162px')
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
              rowData?.length ?
                rowData.map(row => {
                  return (
                    <tr key={row?.id}>
                      <td className="common_campaign_heading sf_pro_font_400w_12f">
                        {row?.campaignName}
                      </td>
                      <td className='common_campaign_heading sf_pro_font_400w_12f'>
                        {row?.storeName}
                      </td>
                      <td className='common_campaign_heading sf_pro_font_400w_12f'>
                        {row?.budget}
                        <span className='per_month sf_pro_font_400w_12f text-left'>Per Month</span>
                      </td>
                      <td className='common_campaign_heading sf_pro_font_400w_12f'>
                        {row?.spent}
                      </td>
                      <td className='common_campaign_date_heading sf_pro_font_400w_12f'>
                        {row?.startDate}
                      </td>
                      <td className='common_campaign_date_heading sf_pro_font_400w_12f'>
                        {row?.stopDate}
                      </td>
                      <td className='common_campaign_heading'>
                        <SuccessBadge content={row?.status} />
                      </td>
                    </tr>
                  )
                }) : null
            }
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default CampaignTable