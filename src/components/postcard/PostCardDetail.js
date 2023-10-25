import React from 'react'
import { Row, Col } from 'reactstrap'
import pendingIcon from "../../assets/icons/customer-pending-icon.svg"
import sentIcon from "../../assets/icons/postcard-sent-icon.svg"

import { Link } from 'react-router-dom'
import DownloadCustomerDetail from '../shared/button'
import SectionHeading from '../shared/SectionHeading'
import PostStatusCard from './PostStatusCard'
import PostImageCard, { PostImageCard1, PostImageCard2 } from './PostImageCard'

const PostCardDetail = () => {
  return (
    <section className='postcard_detail_section bg-white border_radius_26 mb-5'>

      <SectionHeading mainHeading="Postcard Detail" topMargin="mb-5" />


      {/* =========== customer-card ============ */}
      <div className='card_section mb-5'>
        <Row >
          <Col className='col-2'>
            <PostStatusCard type="pending" icon={pendingIcon} mainHeading="Customer Pending" count="23" />
          </Col>
          <Col className='col-2 mx-4'>
            <PostStatusCard type="sent" icon={sentIcon} mainHeading="Sent" count="66" verticalMarign="mx-4" />
          </Col>
        </Row>
      </div>

      {/* ================ design - card ========== */}
      <div className='design_section'>
        <div>
          <p className='mb-3 interfont_18s_500w'>
            Design
          </p>
        </div>
        <Row>
          <Col className='col-8 d-flex'>
            <PostImageCard1 />
            <PostImageCard2 />
          </Col>
          <Col className='col-xl-offset-1 col-3'>
            <div className='design_card'>
              <h2>
                You can download The design from here
              </h2>
              <Link to="#" className='sf_pro_font_400 common_link_color'>
                Download Design
              </Link>
            </div>
          </Col>
        </Row>
      </div>

      <DownloadCustomerDetail />
    </section >
  )
}

export default PostCardDetail