import React, { useState } from 'react'
import { Row, Col } from "reactstrap"
import SectionHeading from '../../components/shared/SectionHeading'
import UserProfile from '../../components/profile/UserProfile'
import settingIcon from "../../assets/icons/setting-blue-icon.svg"
import ResetPassword from '../forms/ResetPassword'
import SettingTab from './SettingTab'

const SettingsPage = () => {
  const [tab, setTab] = useState(1)
  return (
    <section className='setting_section mt-5'>
      <SectionHeading mainHeading="Settings" />
      <div className='common_section_content_margin  setting_tab_grid'>
        <SettingTab heading="Account" tabNum={1} icon={settingIcon} tab={tab} setTab={setTab} />
        <SettingTab heading="Reset Password" tabNum={2} icon={settingIcon} tab={tab} setTab={setTab} />
      </div>
      {
        tab === 1 ?
          <UserProfile />
          :
          <ResetPassword />
      }
    </section >
  )
}

export default SettingsPage