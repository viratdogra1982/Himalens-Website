"use client";

export default function C6() {
    const tours = [
        {
          title: "Chardham Yatra",
          image: "https://5.imimg.com/data5/SELLER/Default/2022/8/ZZ/OT/KM/82956921/chardham-yatra-2022.JPG",
          details: "Embark on a Spiritual Odyssey to Kedarnath & the Chardham Circuit.",
          duration: "10 Days & 9 Nights",
          price: "₹33,000 onwards",
        },
        {
          title: "Kedarnath Yatra",
          image: "https://i.pinimg.com/564x/b3/7d/ae/b37dae0806eec5a55a011a0126ff3c60.jpg",
          details: "Experience the divine Kedarnath Temple surrounded by the Himalayas.",
          duration: "5 Days & 4 Nights",
          price: "₹18,000 onwards",
        },
        {
          title: "Do-Dham Yatra",
          image: "https://www.trekupindia.com/tour/wp-content/uploads/2024/03/Badrinath-Do-Dham-Yatra-scaled.jpg",
          details: "Visit the two most sacred Dhams - Kedarnath and Badrinath.",
          duration: "7 Days & 6 Nights",
          price: "₹25,000 onwards",
        },
        {
          title: "Tungnath Yatra",
          image: "https://t.eucdn.in/tourism/lg/tungnath-5173043.webp",
          details: "Explore the spiritual aura of Kedarnath and the highest Shiva temple, Tungnath.",
          duration: "6 Days & 5 Nights",
          price: "₹20,000 onwards",
        },
      ];
      
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-8 mt-20">
      {tours.map((tour, index) => (
        <div
          key={index}
          className="relative w-72 h-[65vh] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group"
        >
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-full object-cover rounded-2xl transition-all duration-300"
          />
          <h2 className="absolute top-4 left-4 text-white text-xl font-bold bg-black/10 px-3 py-1 rounded-lg z-10">
            {tour.title}
          </h2>
          <div className="absolute inset-0 bg-black/60 text-white p-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-sm text-center">{tour.details}</p>
            <p className="mt-2 text-sm">{tour.duration}</p>
            <p className="mt-2 text-lg font-semibold">{tour.price}</p>
          </div>
          <button className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 rounded-full text-sm font-bold shadow-md transition-all duration-300 hover:bg-black hover:text-white hover:border border-gray-200 border-1 hover:duration-500">
            BOOK NOW
          </button>
        </div>
      ))}
    </div>
  );
}


