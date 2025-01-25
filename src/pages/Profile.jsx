import React from 'react';

function Profile() {
  return (
    <div className="flex justify-center items-center min-w-screen mb-3">
      <div className="w-4/5 border border-gray-600 p-6 rounded-2xl shadow-lg">
        <h1 className="text-center text-3xl font-bold mb-8">Profile</h1>
        <div className="grid grid-cols-12 gap-6">
          {/* General Info Section */}
          <div className="col-span-6">
            <h2 className="text-lg font-semibold mb-4">General Info</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3"
              />
            </div>
          </div>

          {/* Profile Picture Section */}
          <div className="col-span-6 flex flex-col items-center">
            <div className="w-64 h-64 mb-4">
              <img
                src="/cookedCatPFP.jpg"
                alt="Profile"
                className="w-full h-full rounded-full object-cover shadow-md"
              />
            </div>
            <a href="#">
              <button
                type="button"
                className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Change Profile Picture
              </button>
            </a>
          </div>
        </div>

        {/* Password Changer Section */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Change Password</h3>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="current-password" className="block text-sm font-medium text-gray-300">Current Password</label>
              <input
                type="password"
                id="current-password"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3"
              />
            </div>
            <div>
              <label htmlFor="new-password" className="block text-sm font-medium text-gray-300">New Password</label>
              <input
                type="password"
                id="new-password"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3"
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm  py-2 px-3"
              />
            </div>
            <button
              type="button"
              className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Update Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
