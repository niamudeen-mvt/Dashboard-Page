import React from 'react'
import { Row, Col } from 'reactstrap'
import pendingIcon from "../../assets/icons/customer-pending-icon.svg"
import sentIcon from "../../assets/icons/postcard-sent-icon.svg"

import { Link } from 'react-router-dom'
import DownloadCustomerDetail from '../shared/button'
import SectionHeading from '../shared/SectionHeading'
import PostStatusCard from './PostStatusCard'
import { PostImageCard1, PostImageCard2 } from './PostImageCard'
import { postcardImageList } from '../../utils/constant/campaign-data'

const PostCardDetail = () => {
  return (
    <section className='postcard_detail_section bg-white border_radius_26 mb-5'>

      <SectionHeading mainHeading="Postcard Detail" topMargin="mb-5" />


      {/* =========== customer-card ============ */}
      <div className='card_section mb-5'>
        <div className='postcard_grid'>
          <PostStatusCard type="sent" icon={sentIcon} mainHeading="Sent" count="66" />
          <PostStatusCard type="pending" icon={pendingIcon} mainHeading="Customer Pending" count="23" />
        </div>
      </div>

      {/* ================ design - card ========== */}
      <div className='design_section'>
        <div>
          <p className='mb-3 interfont_18s_500w'>
            Design
          </p>
        </div>
        <Row>
          <Col className='col-xxl-6 col-xl-12  mb-3'>
            <div className='postcard_img_grid'>
              <PostImageCard1 />
              <PostImageCard2 />
            </div>
          </Col>
          <Col className='offset-xxl-2 col-xxl-4 col-xl-12 '>
            <div className='design_card '>
              <h2>
                You can download The design from here
              </h2>
              <Link to="#" className='sf_pro_font_400 common_link_color'>
                Download Design
              </Link>
            </div>
          </Col>
        </Row>
        <DownloadCustomerDetail listToDownload={postcardImageList} actionType="postcard-detail"
        />
      </div>
    </section >
  )
}

export default PostCardDetail