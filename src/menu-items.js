import campaignIcon from "./assets/icons/campaign-white-icon.svg"
import contactIcon from "./assets/icons/contacts-icon.svg"
import overViewIcon from "./assets/icons/overview-icon.svg"
import settingIcon from "./assets/icons/setting-icon.svg"

import campaignActiveIcon from "./assets/icons/campaign-icon.svg"
import contactActiveIcon from "./assets/icons/active-contacts-icon.svg"
import overviewActiveIcon from "./assets/icons/active-overview-icon.svg"
import settingsActiveIcon from "./assets/icons/active-settings-icon.svg"


export const menuItems = [
  {
    id: 1,
    title: 'Campaign',
    url: '/campaign',
    icon: campaignIcon,
    activeIcon: campaignActiveIcon
  },
  {
    id: 2,
    title: 'Contacts',
    url: '/contacts',
    icon: contactIcon,
    activeIcon: contactActiveIcon
  },
  {
    id: 3,
    title: 'Overview',
    url: '/overview',
    icon: overViewIcon,
    activeIcon: overviewActiveIcon
  },
  {
    id: 4,
    title: 'Settings',
    url: '/settings',
    icon: settingIcon,
    activeIcon: settingsActiveIcon
  },
]