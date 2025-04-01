"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link'; 

export default function Navbar() {
  const router = useRouter();
  const [selectedLocation, setSelectedLocation] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const locations = [
    "manali",
    "chandratal",
    "nagtibba",
    "kasol",
    "jibhi",
    "tungnathyatra",
    "valleyofflowers",
  ];

  const handleLocationChange = (location: string) => {
    if (!location) return;
    setSelectedLocation(location);
    router.push(`/Destination/${location.replace(/\s/g, "")}`);
  };

  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 bg-white border-b border-gray-200 h-20 w-full">
      
      <div className="text-4xl flex items-center">
        <span className="text-sky-950">HIMALE</span>
        <span className="text-sky-400">∩</span>
        <span className="text-sky-950">S</span>
      </div>

      
      <button
        className="md:hidden text-3xl text-sky-950 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "×" : "☰"}
      </button>

      
      <div
        className={`absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent 
                    shadow-md md:shadow-none z-50 md:flex items-center space-x-6 text-lg text-sky-950 
                    transition-all duration-300 ease-in-out ${isMenuOpen ? "block" : "hidden"}`}
      >
        <Link href="#c5">
          <span className="block md:inline-block py-2 px-4 hover:text-sky-400 transition">
            Tours
          </span>
        </Link>
        <Link href="#c2">
          <span className="block md:inline-block py-2 px-4 hover:text-sky-400 transition">
            Personalized Travel
          </span>
        </Link>
        <Link href="#c7">
          <span className="block md:inline-block py-2 px-4 hover:text-sky-400 transition">
            Contact Us
          </span>
        </Link>
      </div>

     
      <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-lg space-x-2">
        <select
          value={selectedLocation}
          onChange={(e) => handleLocationChange(e.target.value)}
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
          className="px-6 py-2 text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg 
             hover:from-blue-600 hover:to-blue-800 transition-all duration-300 ease-in-out 
             shadow-md"
        >
          Search
        </button>
      </div>
    </nav>
  );
}