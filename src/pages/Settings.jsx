import React from "react";
import { IoChevronForwardOutline } from "react-icons/io5";

function Settings() {
  return (
    <>
      <ul className="px-16 space-y-3">
        <li className="text-lg font-semibold border border-blue-600 rounded-lg py-3 px-5 flex items-center justify-between transition hover:bg-blue-900 hover:border-blue-800">
          <a href="#general">General</a>
          <IoChevronForwardOutline className="text-xl" />
        </li>
        <li className="text-lg font-semibold border border-blue-600 rounded-lg py-3 px-5 flex items-center justify-between transition hover:bg-blue-900 hover:border-blue-800">
          <a href="#player">Player</a>
          <IoChevronForwardOutline className="text-xl" />
        </li>
        <li className="text-lg font-semibold border border-blue-600 rounded-lg py-3 px-5 flex items-center justify-between transition hover:bg-blue-900 hover:border-blue-800">
          <a href="#providers">Providers</a>
          <IoChevronForwardOutline className="text-xl" />
        </li>
        <li className="text-lg font-semibold border border-blue-600 rounded-lg py-3 px-5 flex items-center justify-between transition hover:bg-blue-900 hover:border-blue-800">
          <a href="#layout">Layout</a>
          <IoChevronForwardOutline className="text-xl" />
        </li>
        <li className="text-lg font-semibold border border-blue-600 rounded-lg py-3 px-5 flex items-center justify-between transition hover:bg-blue-900 hover:border-blue-800">
          <a href="#updates-backup">Updates and Backup</a>
          <IoChevronForwardOutline className="text-xl" />
        </li>
        <li className="text-lg font-semibold border border-blue-600 rounded-lg py-3 px-5 flex items-center justify-between transition hover:bg-blue-900 hover:border-blue-800">
          <a href="#accounts-security">Accounts and Security</a>
          <IoChevronForwardOutline className="text-xl" />
        </li>
        <li className="text-lg font-semibold border border-blue-600 rounded-lg py-3 px-5 flex items-center justify-between transition hover:bg-blue-900 hover:border-blue-800">
          <a href="#extensions">Extensions</a>
          <IoChevronForwardOutline className="text-xl" />
        </li>
      </ul>
      <div>
        <p className="text-sm text-center py-5">4.4.0 - January 1, 2025</p>
      </div>
    </>
  );
}

export default Settings;
