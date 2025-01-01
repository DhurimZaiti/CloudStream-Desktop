import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your pages
import Home from './../pages/Home';
import Search from './../pages/Search';
import Watchlist from './../pages/Watchlist';
import Downloads from './../pages/Downloads';
import Provider from './../pages/Provider';
import Account from './../pages/Account';
import Profile from './../pages/Profile';
import Settings from './../pages/Settings';
// Import other pages as needed...

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/provider" element={<Provider />} />
        <Route path="/account" element={<Account />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AppRouter;
