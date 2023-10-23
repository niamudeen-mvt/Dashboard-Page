import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CampaignPage from './pages/campaign/CampaignPage'
import ProtectedRoute from './auth/ProtectedRoute'
import ContactPage from './pages/ContactPage'
import OverviewPage from './pages/OverviewPage'
import SettingsPage from './pages/SettingsPage'
import CampaignDetail from './pages/campaign/CampaignDetail'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="" element={<CampaignPage />} />
          <Route path="campaign-detail/:id" element={<CampaignDetail />} />
          <Route path="contacts-page" element={<ContactPage />} />
          <Route path="overview-page" element={<OverviewPage />} />
          <Route path="settings-page" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App