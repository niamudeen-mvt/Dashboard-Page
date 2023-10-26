import React from 'react'
import { Row, Col } from 'reactstrap'
import userProfileIcon from "../../assets/icons/username-icon.svg"

const UserProfile = () => {
  return (
    <div className='common_section_content_margin profile_section bg-white py-4 px-3'>
      <p className='sf_pro_font_700w_22f mb-3'>
        Profile
      </p>
      <Row className=' px-3'>
        <Col className='col-2'>
          <span className='user_icon d-flex justify-content-center align-items-center'>
            <img src={userProfileIcon} alt='user-profile-icon' className='img-fluid' />
          </span>
        </Col>
        <Col className='col-9'>
          <Row>
            <Col className='col-3 p-0'>
              <div className='py-3 border-bottom'>
                <p className='interfont_14f_500w' style={{ color: '#949494' }}>Name</p>
              </div>
            </Col>
            <Col className='col-9 p-0'>
              <div className='py-3 border-bottom'>
                <p className='interfont_14f_500w'>Jatin</p>
              </div>
            </Col>
            <Col className='col-3 p-0'>
              <div className='py-3 border-bottom'>
                <p className='interfont_14f_500w' style={{ color: '#949494' }}>Email</p>
              </div>
            </Col>
            <Col className='col-9 p-0'>
              <div className='py-3 border-bottom'>
                <p className='interfont_14f_500w'>js@gmail.com </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default UserProfile