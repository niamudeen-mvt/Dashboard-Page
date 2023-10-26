import React from 'react'

const SettingTab = ({
  icon,
  heading,
  tab,
  setTab,
  tabNum
}) => {

  console.log(tab, "tab");
  return (
    <div className={`setting_option transition_5s border_radius_9   d-flex justify-content-start  align-items-center ${tab === tabNum ? 'active_setting_tab' : ''}`}
      onClick={() => setTab(tabNum)}
    >
      <div className='status_badge  pending  d-flex justify-content-center align-items-center '>
        <img src={icon} alt='setting-icon' width="14.4px" height="14.4px" />
      </div>
      <p className='mx-2 interfont_14f_400w text-black'>
        {heading}
      </p>
    </div>
  )
}

export default SettingTab