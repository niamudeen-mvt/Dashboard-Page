import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CampaignPage from './view/campaign'
import ProtectedRoute from './rotues/ProtectedRoute'
import ContactPage from './view/contact'
import OverviewPage from './view/overview'
import SettingsPage from './view/settings'
import CampaignDetail from './view/campaign/CampaignDetail'
import CustomerPage from './view/customer'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="campaign" element={<CampaignPage />} />
          <Route path="campaign/:id" element={<CampaignDetail />} />
          <Route path="campaign/customers" element={<CustomerPage />} />
          <Route path="customer" element={<CustomerPage />} />
          <Route path="contacts" element={<ContactPage />} />
          <Route path="overview" element={<OverviewPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App