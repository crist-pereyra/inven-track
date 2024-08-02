import { createBrowserRouter } from 'react-router-dom';
import { DashboardLayout, Home, Root } from '../index';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          {
            path: '',
            element: <Home />,
          },
        ],
      },
    ],
  },
]);
