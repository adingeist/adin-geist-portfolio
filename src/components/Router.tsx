import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFoundPage />,
    element: <HomePage />,
  },
]);

export const AppRouter: React.FunctionComponent = () => (
  <RouterProvider router={router} />
);
