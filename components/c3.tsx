"use client";

import { useRouter } from "next/navigation";

export default function C3() {
  const router = useRouter();

  const trips = [
    {
      title: "chandratal",
      subtitle: "The Moon Lake Experience",
      description: "TREK X CAMPING X STARRY NIGHTS",
      price: "₹20,000 onwards",
      image: "https://beyondwildplaces.com/wp-content/uploads/2023/09/Chandratal-Lake-blog.jpg",
      buttonText: "BOOK NOW",
    },
    {
      title: "Manali",
      subtitle: "The Snowy Retreat",
      description: "SKIING X HOT SPRINGS X ADVENTURE",
      price: "₹15,000 onwards",
      image: "https://ihplb.b-cdn.net/wp-content/uploads/2015/12/vashisht_640.jpg",
      buttonText: "BOOK NOW",
    },
    {
      title: "kasol",
      subtitle: "The Himalayan Adventure",
      description: "BIKE X PASSES X CULTURE",
      price: "₹30,000 onwards",
      image: "https://himalayandaredevils.com/storage/uploads/6728952a1c46a.jpg",
      buttonText: "BOOK NOW",
    },
    {
      title: "NagTibba",
      subtitle: "The Colonial Charm",
      description: "HERITAGE X SNOW X NATURE",
      price: "₹18,000 onwards",
      image: "https://static.wixstatic.com/media/1a8384_e32c9396160e4c648fc88dc513853143~mv2.jpg/v1/fill/w_600,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1a8384_e32c9396160e4c648fc88dc513853143~mv2.jpg",
      buttonText: "BOOK NOW",
    }
  ];

  const handleLocationChange = (location: string) => {
    const formattedLocation = location.toLowerCase().replace(/\s+/g, "-");
    console.log("Navigating to:", formattedLocation);
    router.push(`/Destination/${formattedLocation}`);
  };

  return (
    <div className="px-4 sm:px-6 md:px-10 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {trips.map((trip, index) => (
          <div 
            key={index} 
            className="relative bg-white shadow-lg rounded-2xl overflow-hidden group transition-transform duration-700 transform"
          >
            {/* Image */}
            <img
  src={trip.image}
  alt={trip.title}
  className="w-full h-auto sm:h-[45vh] md:h-[45vh] object-cover rounded-2xl transition-all duration-300"
/>

            {/* Trip Title */}
            <h2 className="absolute top-2 left-2 text-white text-sm sm:text-base font-bold bg-black/50 px-2 py-1 rounded-lg z-10">
              {trip.title}
            </h2>

            {/* Always Visible Book Now Button */}
            <div className="absolute bottom-2 right-2 z-20">
              <button
                onClick={() => handleLocationChange(trip.title)}
                className="bg-white text-black px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold hover:bg-black hover:text-white transition-all duration-300"
              >
                {trip.buttonText}
              </button>
            </div>

            {/* Hover Overlay with Details */}
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-xs sm:text-sm uppercase">{trip.subtitle}</p>
              <h2 className="text-lg sm:text-2xl font-bold">{trip.title}</h2>
              <p className="text-xs sm:text-sm mt-1 sm:mt-2">{trip.description}</p>
              <p className="text-sm sm:text-lg font-semibold mt-2">{trip.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}