import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/Contact/ContactPage';
import { NiblPage } from './pages/projects/NiblPage';
import { SteepsPage } from './pages/projects/SteepsPage';
import { TheConversationPage } from './pages/projects/TheConversationPage';
import { AlgorithmVisualizerPage } from './pages/projects/AlgorithmVisualizerPage';
import { ChatAppPage } from './pages/projects/ChatAppPage';
import { PopperPigPage } from './pages/projects/PopperPigPage';
import { YahtzeePage } from './pages/projects/YahtzeePage';
import { ShapeFallPage } from './pages/projects/ShapeFall';
import { GoldcrestPage } from './pages/projects/Goldcrest';
import { BinkosDragstripPage } from './pages/projects/BinkosDragstripPage';
import { TheGoldenPeachPage } from './pages/projects/TheGoldenPeachPage';
import { JSHeroPage } from './pages/projects/JSHero';

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
  {
    path: '/projects/chat-app',
    element: <ChatAppPage />,
  },
  {
    path: '/projects/popper-pig',
    element: <PopperPigPage />,
  },
  {
    path: '/projects/yahtzee',
    element: <YahtzeePage />,
  },
  {
    path: '/projects/shape-fall',
    element: <ShapeFallPage />,
  },
  {
    path: '/projects/goldcrest',
    element: <GoldcrestPage />,
  },
  {
    path: '/projects/binkos-dragstrip',
    element: <BinkosDragstripPage />,
  },
  {
    path: '/projects/the-golden-peach',
    element: <TheGoldenPeachPage />,
  },
  {
    path: '/projects/js-hero',
    element: <JSHeroPage />,
  },
]);

export const AppRouter: React.FunctionComponent = () => (
  <RouterProvider router={router} />
);
