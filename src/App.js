import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CampaignPage from './pages/campaign'
import ProtectedRoute from './auth/ProtectedRoute'
import ContactPage from './pages/contact'
import OverviewPage from './pages/overview'
import SettingsPage from './pages/settings'
import CampaignDetail from './pages/campaign/CampaignDetail'
import CustomerPage from './pages/customer'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="campaign" element={<CampaignPage />} />
          <Route path="campaign/:id" element={<CampaignDetail />} />
          <Route path="campaign/customers" element={<CustomerPage />} />
          <Route path="contacts" element={<ContactPage />} />
          <Route path="overview" element={<OverviewPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App