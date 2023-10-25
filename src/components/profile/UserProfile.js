import React from 'react'
import { Row, Col } from 'reactstrap'
import userProfileIcon from "../../assets/icons/user-profile-icon.svg"

const UserProfile = () => {
  return (
    <div className='common_section settings_continer border'>
      <div className='profile_section bg-white py-4 px-3'>
        <span className='sf_pro_font_700w_22f'>
          Profile
        </span>
        <Row>
          <Col className='col-3 px-5'>
            <div className='d-flex justify-content-end align-items-center'>
              <span>
                <img src={userProfileIcon} alt='user-profile-icon' />
              </span>
            </div>
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
    </div>
  )
}

export default UserProfile