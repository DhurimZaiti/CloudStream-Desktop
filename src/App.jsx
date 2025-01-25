import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import AppRouter from './routes/router';
import { ConfigProvider } from './context/ConfigContext';

const App = () => {
  return (
    <Router>
      <Header />
      <ConfigProvider>
        <AppRouter />
      </ConfigProvider>
    </Router>
  );
};

export default App;
