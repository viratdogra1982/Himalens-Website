"use client";

import { useRouter } from "next/navigation";

export default function C3() {
  const router = useRouter();

  const trips = [
    {
      title: "Chandratal",
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
      title: "dayara-bugyal",
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
    const formattedLocation = location.toLowerCase().replace(/\s+/g, "-"); // Convert spaces to hyphens
    router.push(`/Destination/${formattedLocation}`);
  };
  return (
    <div className="px-10 mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {trips.map((trip, index) => (
          <div key={index} className="relative bg-white shadow-lg rounded-2xl overflow-hidden group transition-transform duration-1000 transform group-hover:rotate-y-180">
            {/* Image */}
            <img
              src={trip.image}
              alt={trip.title}
              className="w-full h-[65vh] object-cover rounded-2xl transition-all duration-300"
            />
              <h2 className="absolute top-4 left-4 text-white text-xl font-bold bg-black/10 px-3 py-1 rounded-lg z-10">
            {trip.title}
             </h2>

            {/* Overlay details (appears on hover) */}
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm uppercase">{trip.subtitle}</p>
              <h2 className="text-2xl font-bold">{trip.title}</h2>
              <p className="text-sm mt-2">{trip.description}</p>
              <p className="text-lg font-semibold mt-2">{trip.price}</p>
              {trip.buttonText === "BOOK NOW" ? (
                <button
                  onClick={() => handleLocationChange(trip.title)}
                  className="mt-4 bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-black hover:text-white transition-all duration-300"
                >
                  {trip.buttonText}
                </button>
              ) : (
                <button className="mt-4 bg-gray-400 text-white px-4 py-2 rounded-full text-sm font-bold cursor-not-allowed">
                  {trip.buttonText}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
