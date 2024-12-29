import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './AppLayout'; // Main layout wrapper
import Dashboard from './pages/Dashboard';
import Payment from './pages/Payment';
import MapView from './pages/MapView';
import SchedulePredictor from './pages/SchedulePredictor';
import StopList from './pages/StopList';
import Settings from './pages/Settings';
import About from './pages/About';
import React from 'react';

// Define routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />, // AppLayout wraps the entire app (with Navbar, Sidebar, etc.)
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/map', element: <MapView /> },
      { path: '/payment-options', element: <Payment /> },
      { path: '/schedule', element: <SchedulePredictor /> },
      { path: '/stops', element: <StopList /> },
      { path: '/settings', element: <Settings /> },
      { path: '/about', element: <About /> },
    ],
  },
]);

// Export the RouterProvider component
export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
