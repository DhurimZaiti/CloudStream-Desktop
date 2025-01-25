import React from "react";
import { HiOutlineArrowDownTray } from "react-icons/hi2";

function Downloads() {
  return (
    <div className="flex justify-center items-center min-w-screen mt-6">
      {/* Main Box */}
      <div className="w-full max-w-6xl border-2 border-gray-700 rounded-lg p-8 relative">
        {/* Title and Add Button */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-white">Downloads</h2>
          <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition">
            Download a Movie
          </button>
        </div>

        <hr className="bg-gray-500" />

        {/* Empty State Message */}
        <div className="flex flex-col items-center justify-center mt-16">
          <HiOutlineArrowDownTray className="text-6xl text-gray-500 mb-4" />
          <p className="text-gray-400 text-center">
            You haven't downloaded any media yet. <br />
            Click <span className="text-blue-500 font-semibold">Download a Movie</span> to start watching offline.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Downloads;
