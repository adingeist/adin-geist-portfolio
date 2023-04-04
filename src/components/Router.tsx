import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/Contact/ContactPage';
import { AboutPage } from './pages/AboutPage';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFoundPage />,
    element: <HomePage />,
  },
  {
    path: '/projects',
    element: <ProjectsPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
]);

export const AppRouter: React.FunctionComponent = () => (
  <RouterProvider router={router} />
);
