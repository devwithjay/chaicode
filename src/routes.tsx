import { createBrowserRouter } from 'react-router-dom';

import {
  HomePage,
  NotFound,
  PricingPolicy,
  PrivacyPolicy,
  RefundPolicy,
  TermsOfService,
  Reviews,
} from '@/pages';

import App from './App';

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
      {path: 'reviews', element: <Reviews />},
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default router;
