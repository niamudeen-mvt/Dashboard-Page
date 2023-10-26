import React, { useState } from 'react'
import { Row, Col } from "reactstrap"
import SectionHeading from '../../components/shared/SectionHeading'
import UserProfile from '../../components/profile/UserProfile'
import settingIcon from "../../assets/icons/setting-blue-icon.svg"
import ResetPassword from '../forms/ResetPassword'

const SettingsPage = () => {
  const [tab, setTab] = useState(1)
  return (
    <section className='setting_section mt-5'>
      <SectionHeading mainHeading="Settings" />
      <Row className='common_section_content_margin'>
        <Col className='col-2 '>
          <div className={`setting_option transition_5s border_radius_9   d-flex justify-content-start  align-items-center ${tab === 1 ? 'active_setting_tab' : ''}`}
            onClick={() => setTab(1)}
          >
            <div className='status_badge  pending  d-flex justify-content-center align-items-center '>
              <img src={settingIcon} alt='setting-icon' width="14.4px" height="14.4px" />
            </div>
            <p className='mx-2 interfont_14f_400w text-black'>
              Account
            </p>
          </div>
        </Col>
        <Col className='col-2  mx-3'>
          <div className={`setting_option transition_5s border_radius_9   d-flex justify-content-start  align-items-center ${tab === 2 ? 'active_setting_tab' : ''}`}
            onClick={() => setTab(2)}
          >
            <div className='status_badge  pending  d-flex justify-content-center align-items-center '>
              <img src={settingIcon} alt='setting-icon' width="14.4px" height="14.4px" />
            </div>
            <p className='mx-2 interfont_14f_400w text-black'>
              Reset Password
            </p>
          </div>
        </Col>
      </Row>
      {
        tab === 1 ?
          <UserProfile />
          :
          <ResetPassword />
      }
    </section>
  )
}

export default SettingsPage