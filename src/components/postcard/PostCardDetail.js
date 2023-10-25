import React from 'react'
import { Row, Col } from 'reactstrap'
import pendingIcon from "../../assets/icons/customer-pending-icon.svg"

import sentIcon from "../../assets/icons/postcard-sent-icon.svg"
import postCardDesignImg from "../../assets/images/postcard-design-img1.png"
import postCardShadowImg from "../../assets/images/postcard-shadow-img.png"
import { Link } from 'react-router-dom'
import DownloadCustomerDetail from '../shared/button'

const PostCardDetail = () => {
  return (
    <section className='postcard_detail_section bg-white border_radius_26 mb-5'>
      <div className='top_content mb-5'>
        <h2 className='sf_pro_font_700 mb-3'>Postcard Detail</h2>
      </div>


      {/* =========== customer-card ============ */}
      <div className='card_section mb-5'>
        <Row >
          <Col className='col-6 d-flex'>
            <div className='post_card transition_5s cursor border_radius_9'>
              <div className='status_badge pending d-flex justify-content-center align-items-center '>
                <img src={pendingIcon} alt='pending-icon' />
              </div>
              <p className='main_heading my-3'>Customer Pending</p>
              <p className='count'>23</p>
            </div>
            <div className='post_card transition_5s cursor border_radius_9 mx-4'>
              <div className='status_badge sent d-flex justify-content-center align-items-center'>
                <img src={sentIcon} alt='sent-icon' />
              </div>
              <p className='main_heading my-3 '>Sent</p>
              <p className='count'>66</p>
            </div>
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