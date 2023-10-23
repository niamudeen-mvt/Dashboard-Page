import React from 'react'
import { Table } from 'reactstrap'

const ResuseTable = ({ rowData, coloumnData }) => {
  console.log(rowData, "rowdata");

  return (
    <div className='custom_table_section'>
      <div className='custom_table_container pb-0' style={{
        border: '1px solid #DBDBDB'
      }}>
        <Table responsive className='table' >
          <thead>
            <tr>
              {
                coloumnData?.length ?
                  coloumnData.map(coloumn => {
                    return (
                      <th key={coloumn?.id} className={coloumn?.id === 1 ? 'coloumn_headings  sf_pro_font_400' : 'coloumn_headings sf_pro_font_400'} style={{
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
                      <td className="common_campaign_heading sf_pro_font_400">
                        {row?.campaignName}
                      </td>
                      <td className='common_campaign_heading sf_pro_font_400'>
                        {row?.storeName}
                      </td>
                      <td className='common_campaign_heading sf_pro_font_400'>
                        {row?.budget}
                        <span className='per_month sf_pro_font_400 text-left'>Per Month</span>
                      </td>
                      <td className='common_campaign_heading sf_pro_font_400'>
                        {row?.spent}
                      </td>
                      <td className='common_campaign_date_heading sf_pro_font_400'>
                        {row?.startDate}
                      </td>
                      <td className='common_campaign_date_heading sf_pro_font_400'>
                        {row?.stopDate}
                      </td>
                      <td >
                        <p className={row?.status == "On Going" ? 'campaign_status sf_pro_text status_badge_ongoing d-flex justify-content-center align-items-center border_radius_12 mt-2' : 'campaign_status sf_pro_text status_badge_paused d-flex justify-content-center align-items-center border_radius_12 mt-2'}>
                          {row?.status}
                        </p>
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

export default ResuseTable