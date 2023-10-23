import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col } from 'reactstrap'
import { campaignDetailColumnsData } from '../../data/campaign-data'
import ResuseTable from '../../components/table/ReuseTable'
import { customerList } from '../../data/campaign-data'


const CampaignDetail = () => {
  const { id } = useParams()

  const updatedRowData = [{
    id: 1,
    campaignName: 'First Purchase Celebration',
    storeName: 'Cody',
    budget: '$851.99 ',
    spent: '150$',
    startDate: 'Sept 21, 2023',
    stopDate: 'Sept 30, 2023',
    status: 'On Going',
  }]


  return (
    <section className='campaign_detail_section bg-white border_radius_26'>
      <div className='top_content'>
        <h2 className='sf_pro_font_700 mb-3'>Campaign Detail</h2>
        <p className='sf_pro_font_500'>Campaign Information</p>
      </div>
      <div className='table_section'>
        <ResuseTable coloumnData={campaignDetailColumnsData} rowData={updatedRowData} />
      </div>
      <div className='download_capmpaign_details d-flex justify-content-end align-content-end'>
        <button className='border_radius_12 sf_pro_text'>
          Download Campaign Details
        </button>
      </div>

      <div className='customers_section'>
        <Row className=''>
          <Col className='col-3 subtitle'>
            <div className='d-flex justify-content-center align-items-center  h-100'>
              <p>
                Customers
              </p>
            </div>
          </Col>
          <Col className='col-9 customer_list'>
            <Row className='py-2'>
              {
                customerList?.map((customer) => {
                  return (
                    <Col key={customer?.id}
                      className={customer?.id <= 12 ? 'col-1 mb-3 ' : ''}>
                      <div className='customer_badge d-flex justify-content-center align-items-center w-100 sf_pro_font_400'>
                        {customer?.name}
                      </div>
                    </Col>
                  )
                })
              }
            </Row>
          </Col>
        </Row>
      </div>
      <div className='download_capmpaign_details d-flex justify-content-end align-content-end'>
        <Link className='sf_pro_text'>
          See all customers details
        </Link>
      </div>
    </section >
  )
}

export default CampaignDetail