import React from 'react'
import SectionHeading from '../../components/common/SectionHeading'
import UserProfile from '../../components/profile/UserProfile'


const SettingsPage = () => {
  return (
    <>
      <SectionHeading mainHeading="Settings" />
      <UserProfile />
    </>
  )
}

export default SettingsPage