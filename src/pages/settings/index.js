import React from 'react'
import SectionHeading from '../../components/shared/SectionHeading'
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