import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import PricingPolicy from './pages/PricingPolicy';
import RefundPolicy from './pages/RefundPolicy';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> }, 
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
      { path: 'terms-of-service', element: <TermsOfService /> },
      { path: 'pricing-policy', element: <PricingPolicy /> },
      { path: 'refund-policy', element: <RefundPolicy /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default router;