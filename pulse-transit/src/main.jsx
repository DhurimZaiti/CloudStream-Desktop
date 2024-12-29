import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes'; // Adjust path to your `routes.js`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
