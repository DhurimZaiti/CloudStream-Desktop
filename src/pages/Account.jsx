import React from "react";

function Account() {
  const profiles = [
    { name: "Dad", image: ".././public/dad.jpg" },
    { name: "Mom", image: ".././public/mom.jpg" },
    { name: "Katie", image: ".././public/sis.jpg" },
    { name: "John", image: ".././public/bro.jpg" },
    { name: "James", image: ".././public/bro2.jpg" },
    { name: "Anna", image: ".././public/sis2.webp" },
    { name: "Manage Profiles", image: "" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-w-screen mt-6">
      <h1 className="text-white text-4xl font-bold mb-8">Who's watching?</h1>

      <div className="grid grid-cols-6 gap-6">
        {profiles.slice(0, 6).map((profile, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
          >
            <img
              src={profile.image}
              alt={profile.name}
              className="w-32 h-32 rounded-md border-2 border-gray-700 hover:border-blue-700 transition-colors object-cover"
            />
            <p className="text-white text-lg font-semibold mt-2">{profile.name}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <button className="text-lg font-medium text-gray-600 border border-blue-600 px-6 py-3 rounded-md hover:text-white transition-colors">
          {profiles[6].name}
        </button>
      </div>
    </div>
  );
}

export default Account;
