import campaignIcon from "./assets/icons/campaign-white-icon.svg"
import campaignActiveIcon from "./assets/icons/campaign-icon.svg"
import contactIcon from "./assets/icons/contacts-icon.svg"
import overViewIcon from "./assets/icons/overview-icon.svg"
import settingIcon from "./assets/icons/setting-icon.svg"


export const menuItems = [
  {
    id: 1,
    title: 'Campaign',
    url: '/',
    icon: campaignIcon,
    activeIcon: campaignActiveIcon
  },
  {
    id: 2,
    title: 'Contacts',
    url: '/contacts',
    icon: contactIcon
  },
  {
    id: 3,
    title: 'Overview',
    url: '/overview',
    icon: overViewIcon
  },
  {
    id: 4,
    title: 'Settings',
    url: '/settings',
    icon: settingIcon
  },
]