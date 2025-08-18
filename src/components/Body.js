// src/components/Body.js

import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
import Header from './Header'; // Import Header here

// This is your main App Layout
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

// This is your router configuration
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/browse',
        element: <Browse />,
      },
    ],
  },
]);

const Body = () => {
  return <RouterProvider router={appRouter} />;
};

export default Body;