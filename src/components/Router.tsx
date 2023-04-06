import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/Contact/ContactPage';
import { NiblPage } from './pages/projects/NiblPage';
import { SteepsPage } from './pages/projects/SteepsPage';
import { TheConversationPage } from './pages/projects/TheConversationPage';
import { AlgorithmVisualizerPage } from './pages/projects/AlgorithmVisualizer';

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
    path: '/projects/nibl',
    element: <NiblPage />,
  },
  {
    path: '/projects/steeps',
    element: <SteepsPage />,
  },
  {
    path: '/projects/the-conversation',
    element: <TheConversationPage />,
  },
  {
    path: '/projects/algorithm-visualizer',
    element: <AlgorithmVisualizerPage />,
  },
]);

export const AppRouter: React.FunctionComponent = () => (
  <RouterProvider router={router} />
);
