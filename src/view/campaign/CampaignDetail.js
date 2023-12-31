import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'reactstrap'
import { campaignDetailColumnsData } from '../../utils/constant/campaign-data'
import { customerList } from '../../utils/constant/campaign-data'
import PostCardDetail from '../../components/postcard/PostCardDetail'
import CampaignTable from './CampaignTable'
import SectionHeading from '../../components/shared/SectionHeading'
import DownloadCustomerDetail from '../../components/shared/button'
import { CustomerBadge } from '../../components/shared/badges'
import CampaignCustomInput from '../../components/input'


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
    <section className='campaign_detail_section_container'>
      <div className='campaign_detail_section bg-white border_radius_26 mb-3 bg-info'>
        <SectionHeading mainHeading="Campaign Detail" subHeading="Campaign Information" />
        <CampaignCustomInput />
        <CampaignTable coloumnData={campaignDetailColumnsData} rowData={updatedRowData} />

        <DownloadCustomerDetail margin="mb-4" actionType="campaign-detail" tableId="customer_table_detail" fileName="customer_table_detail" />


        <div className='customers_list_section mb-3 '>
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
                    )
                  })
                }
              </div>
            </Col>
          </Row>
        </div>
        <div className='d-flex justify-content-end align-content-end'>
          <Link className='sf_pro_text_500w_14f common_link_color' to="/dashboard/campaign/customers">
            See all customers details
          </Link>
        </div>
      </div >
      <PostCardDetail />
    </section >
  )
}

export default CampaignDetail