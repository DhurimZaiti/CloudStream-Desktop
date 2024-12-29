import React, { useState } from 'react';
import Logo from './../assets/images/CloudstreamLogo.png';
import {
  HiHome, HiMagnifyingGlass, HiMiniUserCircle, HiOutlineBars3BottomLeft, HiOutlineArrowDownTray, HiOutlineFolderOpen, HiCog6Tooth
} from 'react-icons/hi2';
import HeaderItem from './HeaderItem';
import { HiDotsVertical } from 'react-icons/hi';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const menu = [
    { name: 'HOME', icon: HiHome },
    { name: 'SEARCH', icon: HiMagnifyingGlass },
    { name: 'WATCHLIST', icon: HiOutlineFolderOpen },
    { name: 'DOWNLOADED', icon: HiOutlineArrowDownTray },
    { name: 'PROVIDER', icon: HiOutlineBars3BottomLeft },
    { name: 'ACCOUNT', icon: HiMiniUserCircle },
    { name: 'SETTINGS', icon: HiCog6Tooth }
  ];

  return (
    <div className="flex justify-between items-center p-5">
      <div className="flex-7 flex items-center gap-8">
        <img src={Logo} className="w-[80px] md:w-[80px] object-cover" alt="Logo" />
        <div className=' hidden lg:flex gap-8 '>
          {menu.map((item, index) => (
            <HeaderItem key={index} name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className='flex lg:hidden gap-5 '>
          {menu.map((item, index) => index<3&& (
            <HeaderItem key={index} name={''} Icon={item.icon} />
          ))}
        </div>
        <div className="flex lg:hidden gap-8" onClick={() => setToggle(!toggle)}>
          <HeaderItem name={''} Icon={HiDotsVertical} />
          {toggle?
          <div className=" absolute mt-12 bg-[#121212] border-[1px] border-gray-600 p-3 px-5 py-4">
            <div className="">
            {menu.map((item, index) => index>2&& (
              <HeaderItem key={index} name={item.name} Icon={item.icon} />
            ))}
            </div>
          </div>:null}
        </div>
      </div>
      <div className="flex-3 flex justify-end">
        <img
          src="/cookedCatPFP.jpg"
          alt="Profile"
          className="w-[40px] h-[40px] rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
