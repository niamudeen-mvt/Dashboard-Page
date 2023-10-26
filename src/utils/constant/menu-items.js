import campaignIcon from "../../assets/icons/campaign-white-icon.svg"
import contactIcon from "../../assets/icons/contacts-icon.svg"
import overViewIcon from "../../assets/icons/overview-icon.svg"
import settingIcon from "../../assets/icons/setting-icon.svg"

import campaignActiveIcon from "../../assets/icons/campaign-icon.svg"
import contactActiveIcon from "../../assets/icons/active-contacts-icon.svg"
import overviewActiveIcon from "../../assets/icons/active-overview-icon.svg"
import settingsActiveIcon from "../../assets/icons/active-settings-icon.svg"


export const menuItems = [
  {
    id: 'campaign',
    title: 'Campaign',
    url: '/dashboard/campaign',
    icon: campaignIcon,
    activeIcon: campaignActiveIcon
  },
  {
    id: 'customer',
    title: 'Customer',
    url: '/dashboard/customer',
    icon: contactIcon,
    activeIcon: contactActiveIcon
  },
  {
    id: 'contacts',
    title: 'Contacts',
    url: '/dashboard/contacts',
    icon: contactIcon,
    activeIcon: contactActiveIcon
  },
  {
    id: 'overview',
    title: 'Overview',
    url: '/dashboard/overview',
    icon: overViewIcon,
    activeIcon: overviewActiveIcon
  },
  {
    id: 'settings',
    title: 'Settings',
    url: '/dashboard/settings',
    icon: settingIcon,
    activeIcon: settingsActiveIcon
  },
]