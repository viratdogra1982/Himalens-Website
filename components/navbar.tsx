"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [selectedLocation, setSelectedLocation] = useState("");

  const locations = [
    "chandratal",
    "manali",
    "leh-ladakh",
    "NagTibba",
    "Shimla",
    "dayara-bugyal"
  ];

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
    router.push(`/Destination/${location.replace(/\s/g, "")}`); // Remove spaces to match filenames
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white border-b border-gray-200 h-24">
      <div className="text-4xl px-10">
        <span className="text-sky-950">HIMALE</span>
        <span className="text-sky-400">∩</span>
        <span className="text-sky-950">S</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8 font-sans text-lg text-sky-950 px-10">
        <a href="#c5" className="hover:text-sky-400 transition">Tours</a>
        <a href="#c2" className="hover:text-sky-400 transition">
          Personalized Travel
        </a>
        <a href="#" className="hover:text-sky-400 transition">
          Our Story
        </a>
        <a href="#c7" className="hover:text-sky-400 transition">
          Contact Us
        </a>
      </div>

      {/* Search Dropdown */}
      <div className="flex items-center bg-gray-100 p-2 rounded-lg">
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="p-2 bg-white border-none outline-none text-gray-700 rounded-md"
        >
          <option value="" disabled>
            Select Location
          </option>
          {locations.map((loc, index) => (
            <option key={index} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        <button
  onClick={() => handleLocationChange(selectedLocation)}
  className="ml-2 px-6 py-2 text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg 
     hover:from-blue-600 hover:to-blue-800 transition-all duration-300 ease-in-out 
     shadow-none outline-none border-none focus:ring-0"
>
  Search
</button>
      </div>
    </nav>
  );
}