import React from 'react'
import { Row, Col } from "reactstrap"
import SectionHeading from '../../components/shared/SectionHeading'
import UserProfile from '../../components/profile/UserProfile'
import settingIcon from "../../assets/icons/setting-blue-icon.svg"

const SettingsPage = () => {
  return (
    <div className='setting_section mt-5'>
      <SectionHeading mainHeading="Settings" />
      <Row className='common_section_content_margin'>
        <Col className='col-3 '>
          <div className='setting_option activeSetting transition_5s border_radius_9   d-flex justify-content-start  align-items-center'>
            <div className='status_badge  pending  d-flex justify-content-center align-items-center '>
              <img src={settingIcon} alt='setting-icon' width="14.4px" height="14.4px" />
            </div>
            <p className='mx-2'>
              Account
            </p>
          </div>
        </Col>
        <Col className='col-3 '>
          <div className='setting_option transition_5s border_radius_9   d-flex justify-content-start  align-items-center'>
            <div className='status_badge  pending  d-flex justify-content-center align-items-center '>
              <img src={settingIcon} alt='setting-icon' width="14.4px" height="14.4px" />
            </div>
            <p className='mx-2'>
              Reset Password
            </p>
          </div>
        </Col>
      </Row>
      <UserProfile />
    </div>
  )
}

export default SettingsPage