import React from 'react';

const HeaderItem = ({ name, Icon }) => {
  return (
    <div className="text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:text-gray-300 hover:underline underline-offset-8 decoration-4 mb-2">
      <Icon className="w-6 h-6" />
      <h2 className="text-sm ">{name}</h2>
    </div>
  );
};

export default HeaderItem;
