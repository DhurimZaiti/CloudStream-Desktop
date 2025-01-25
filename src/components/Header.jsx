import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Logo from './../assets/images/CloudstreamLogo.png';
import {
  HiHome, HiMagnifyingGlass, HiMiniUserCircle, HiOutlineBars3BottomLeft, HiOutlineArrowDownTray, HiOutlineFolderOpen, HiCog6Tooth
} from 'react-icons/hi2';
import HeaderItem from './HeaderItem';
import { HiDotsVertical } from 'react-icons/hi';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const menu = [
    { name: 'HOME', icon: HiHome, path: '/home' },
    { name: 'SEARCH', icon: HiMagnifyingGlass, path: '/search' },
    { name: 'WATCHLIST', icon: HiOutlineFolderOpen, path: '/watchlist' },
    { name: 'DOWNLOADED', icon: HiOutlineArrowDownTray, path: '/downloads' },
    { name: 'PROVIDER', icon: HiOutlineBars3BottomLeft, path: '/provider' },
    { name: 'ACCOUNT', icon: HiMiniUserCircle, path: '/account' },
    { name: 'SETTINGS', icon: HiCog6Tooth, path: '/settings' },
  ];

  return (
    <div className="flex justify-between items-center p-5">
      <div className="flex-7 flex items-center gap-8">
        {/* Wrapped logo in a Link to redirect to the homepage */}
        <Link to="/home">
          <img src={Logo} className="w-[80px] md:w-[80px] object-cover" alt="Logo" />
        </Link>

        {/* Navigation for large screens */}
        <div className="hidden lg:flex gap-8">
          {menu.map((item, index) => (
            <Link key={index} to={item.path}>
              <HeaderItem name={item.name} Icon={item.icon} />
            </Link>
          ))}
        </div>

        {/* Navigation for small screens */}
        <div className="flex lg:hidden gap-5">
          {menu.slice(0, 3).map((item, index) => (
            <Link key={index} to={item.path}>
              <HeaderItem name={''} Icon={item.icon} />
            </Link>
          ))}
        </div>

        {/* Dropdown menu for small screens */}
        <div className="flex lg:hidden gap-8" onClick={() => setToggle(!toggle)}>
          <HeaderItem name={''} Icon={HiDotsVertical} />
          {toggle && (
            <div className="absolute mt-12 bg-[#121212] border-[1px] border-gray-600 p-3 px-5 py-4">
              <div>
                {menu.slice(3).map((item, index) => (
                  <Link key={index} to={item.path}>
                    <HeaderItem name={item.name} Icon={item.icon} />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex-3 flex justify-end">
        {/* Wrapped profile icon in a Link to redirect to the profile page */}
        <Link to="/profile">
          <img
            src="/cookedCatPFP.jpg"
            alt="Profile"
            className="w-[40px] h-[40px] rounded-full cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
