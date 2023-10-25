import ProtectedRoute from "./auth/ProtectedRoute";
import CampaignPage from "./pages/campaign";
import CampaignDetail from "./pages/campaign/CampaignDetail";
import ContactPage from "./pages/contact";
import CustomerPage from "./pages/customer";
import OverviewPage from "./pages/overview";
import SettingsPage from "./pages/settings";




export const routes = [
  {
    exact: 'true',
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        exact: 'true',
        path: "campaign",
        element: <CampaignPage />
      },
      {
        exact: 'true',
        path: "campaign/:id",
        element: <CampaignDetail />
      },
      {
        exact: 'true',
        path: "campaign/customers",
        element: <CustomerPage />
      },
      {
        exact: 'true',
        path: "contacts",
        element: <ContactPage />
      },
      {
        exact: 'true',
        path: "overview",
        element: <OverviewPage />
      },
      {
        exact: 'true',
        path: "settings",
        element: <SettingsPage />
      },
    ]
  }
]