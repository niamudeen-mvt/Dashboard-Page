import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { Row, Col } from 'reactstrap'
import { campaignDetailColumnsData } from '../../data/campaign-data'
import { customerList } from '../../data/campaign-data'
import PostCardDetail from '../../components/postcard/PostCardDetail'
import CampaignTable from './CampaignTable'
import SectionHeading from '../../components/shared/SectionHeading'
import DownloadCustomerDetail from '../../components/shared/button'
import { CustomerBadge } from '../../components/shared/badges'


const CampaignDetail = () => {
  // const { id } = useParams()



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
    <>
      <section className='campaign_detail_section bg-white border_radius_26 mb-3'>
        <SectionHeading mainHeading="Campaign Detail" subHeading="Campaign Information" />

        {/* ====== input section =============== */}
        <div className='input_section'>
          <input type='text' placeholder='Amounts per postcard' className='custom_input border_radius_12 interfont_14f_400w' />
          <button className='custom_theme_btn border_radius_12 mx-3'>Save</button>
        </div>

        {/* ============ table section ============== */}
        <div className='table_section'>
          <CampaignTable coloumnData={campaignDetailColumnsData} rowData={updatedRowData} />
        </div>

        <DownloadCustomerDetail margin="mb-2" />
        {/* =============== customer list section =============== */}

        <div className='customers_list_section'>
          <Row className='py-3 '>
            <Col className='col-3 subtitle'>
              <div className='d-flex justify-content-center align-items-center  h-100'>
                <p>
                  Customers
                </p>
              </div>
            </Col>
            <Col className='col-9  p-0 px-3 '>
              <div className='customer_list'>
                {
                  customerList?.map((customer) => {
                    return (
                      <CustomerBadge key={customer?.id} content={customer?.name} />
                      // <Col key={customer?.id}
                      //   className={customer?.id <= 12 ? 'col-1 mb-3 ' : ''}>
                      //   <div className='customer_badge d-flex justify-content-center align-items-center w-100 sf_pro_font_400'>
                      //     {customer?.name}
                      //   </div>
                      // </Col>
                    )
                  })
                }
              </div>
              {/* <Row className='py-2'>
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
              </Row> */}
            </Col>
          </Row>
        </div>

        <div className='d-flex justify-content-end align-content-end'>
          <Link className='sf_pro_text' to="/campaign/customers">
            See all customers details
          </Link>
        </div>
      </section >
      <PostCardDetail />
    </>
  )
}

export default CampaignDetail