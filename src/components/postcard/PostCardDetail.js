import React from 'react'
import { Row, Col } from 'reactstrap'
import pendingIcon from "../../assets/icons/customer-pending-icon.svg"
import sentIcon from "../../assets/icons/postcard-sent-icon.svg"
import postCardDesignImg from "../../assets/images/postcard-design-img1.png"
import postCardShadowImg from "../../assets/images/postcard-shadow-img.png"
import { Link } from 'react-router-dom'
import DownloadCustomerDetail from '../shared/button'
import SectionHeading from '../shared/SectionHeading'
import PostStatusCard from './PostStatusCard'

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
            <div className='design_card'>
              <div className='img_section mb-2 position-relative'>
                <img src={postCardDesignImg} alt='img' />
                <div className='img_overlay position-absolute d-flex justify-content-center align-items-center'>
                  <span>Thankyou</span>
                </div>
              </div>
              <span className='tag'>img 1 X</span>
            </div>
            <div className='design_card mx-5'>
              <div className='img_section mb-2 position-relative'>
                <img src={postCardShadowImg} alt='img' />
                <div className='img_overlay2 position-absolute '>
                  <span className='name mb-4'>Your Name</span>
                  <p className='mb-2'>Address</p>
                  <p>Number</p>
                </div>
              </div>
              <span className='tag'>img 1 X</span>
            </div>
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