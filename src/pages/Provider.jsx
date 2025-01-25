import React from "react";
import { IoWarningOutline } from "react-icons/io5";

function Provider() {
  return (
    <div className="flex justify-center items-center min-w-screen mt-6">
      {/* Main Box */}
      <div className="w-full max-w-6xl border-2 border-gray-700 rounded-lg p-8 relative">
        {/* Title and Add Button */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-white">Providers</h2>
          <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition">
            Add a Provider
          </button>
        </div>

        <hr className="bg-gray-500"/>

        {/* Empty State Message */}
        <div className="flex flex-col items-center justify-center mt-16">
          <IoWarningOutline className="text-6xl text-gray-500 mb-4" />
          <p className="text-gray-400 text-center">
            You haven't added any providers yet. <br />
            Click <span className="text-blue-500 font-semibold">Add a Provider</span> to see media.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Provider;
