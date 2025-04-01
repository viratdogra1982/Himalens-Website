"use client";

export default function C7() {
  const whatsappLink = "https://wa.me/911234509876";
  const instagramLink = "https://www.instagram.com/simplyraahi?igsh=bWN3a2hneGU1NXJj";
  const phoneNumber = "+917902059525"; // Your phone number

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="w-full mt-20" id="c7">
      {/* Ensure the section covers full width and takes full screen width on mobile */}
      <div className="bg-gray-200 text-center py-10 px-4 w-full">
        <h2 className="text-3xl font-semibold text-sky-950">
          Contact our Travel Planner
        </h2>
        <p className="text-gray-600 mt-2">
          Move one step closer to your dream vacation
        </p>
        <div className="mt-4 flex flex-wrap justify-center space-x-4 gap-4 w-full">
          <button className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-black hover:border border-1 border-black transition duration-300">
            GET IN TOUCH NOW
          </button>
          <button
            onClick={handleCall}
            className="border border-yellow-900 text-yellow-900 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-900 hover:text-yellow transition"
          >
            CALL US
          </button>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition duration-300"
          >
            ENQUIRE NOW
          </a>
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-pink-700 transition duration-300"
          >
            FOLLOW US
          </a>
          <a
            href="https://www.visitcusco.org/vacation-planning/?gad_source=1&gclid=CjwKCAjw-qi_BhBxEiwAkxvbkN6VojTlHUP-mvIMtUTUWYRjkh3LiYxZPHG9ZxyMuWYlEvmv2J__-hoC5DQQAvD_BwE"
            download
            className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-800 transition duration-300"
          >
            DOWNLOAD ITINERARY
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center py-10 px-6 md:px-20 space-y-6 md:space-y-0 md:space-x-32 w-full">
        {/* Ensure content stretches full width */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto">
          <img
            src="https://t3.ftcdn.net/jpg/06/55/19/84/240_F_655198402_OZqFvoFHSO9XFMoKdSRx22D8v9uZoKbi.jpg"
            alt="Himalens Logo"
            className="w-40 h-40 object-contain"
          />
          <h3 className="text-xl font-semibold text-sky-950 mt-4">
            Travel, Culture & Experiences
          </h3>
          <p className="text-gray-600 mt-2 max-w-sm">
            Let Himalens be your trusted guide as you step into the unexplored
            and create memories that last a lifetime.
          </p>
        </div>

        <div className="text-center md:text-left w-full md:w-auto">
          <p className="text-gray-600 mt-1">
            Himalens, 216, Sanket Colony, Ajabpur Kalan, <br />
            Dehradun, Uttarakhand 248121
          </p>
          <button
            onClick={handleCall}
            className="mt-4 bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-black hover:border border-1 border-black transition duration-300"
          >
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
}