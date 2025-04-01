"use client";

import { useParams } from "next/navigation";
import Navbar from "@/components/navbar";
import C7 from "@/components/c7";
import { LocationData } from "@/components/types";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import C5 from "@/components/c5";
import C2 from "@/components/c2";

const locationContent :  Record<string, LocationData>= {
  "ChardhamYatra": {
    Longest:"ITINERARY",
    title: "chardhamyatra",
    description: "Explore the breathtaking landscapes of Leh Ladakh...",
    image: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1280/Holy%20shrine%20of%20%20Kedarnath.jpg",
    imageTag:"https://www.yatrabyhelicopter.in/blog/wp-content/uploads/2024/12/Char-Dham-Yatra-Route-Map-Guide.jpg",
    imagetag2:"https://www.epicyatra.com/wp-content/uploads/2025/01/ChardhamYatraOpeningandClosingDate_ChardhamYatraPackage_LuxuryCharDhamYatraPackage_CharDhamYatra1.webp",
    imagetag3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5o1_GSqJYfHESRl_C7e4Yb9Rma5oi3IiTFQ&s",
    packagePrice: "₹30,000",
    duration: "6 Days & 5 Nights",
    bestTime: "May - October",
    trekDistance: "Approx. 50 Km",
    Weekends:"PACKAGES",
    Payment:"PAYMENT DETAILS",
    maxAltitude: "17,600 ft",
    overview: [
        `Region: Chardham, a sacred pilgrimage circuit in Uttarakhand, encompassing the revered shrines of Yamunotri, Gangotri, Kedarnath, and Badrinath."
        "Altitude: Ranges from 10,000 ft to 11,755 ft, offering breathtaking views of snow-capped peaks and lush valleys."
        "Duration: 10 days / 9 nights, covering all four dhams with spiritual experiences, scenic landscapes, and cultural insights."
        "Distance: Over 1,600 kilometers by road, passing through picturesque mountains, rivers, and ancient temples."
        "Difficulty Level: Moderate to challenging, involving high-altitude travel and treks, suitable for pilgrims and adventure seekers."
        "Trek Start Point: Yamunotri, the first stop of the Chardham Yatra, requiring a 6 km trek from Janki Chatti."
        "End Point: Badrinath, the final dham, home to a revered Vishnu temple surrounded by the majestic Nar and Narayan mountain ranges."
        "Pickup Point: Haridwar/Rishikesh, the gateway to the Himalayas, serving as the main access point for travelers from major cities like Delhi and Dehradun.`
        ],
    
    itinerary: [
      {
        day: 1,
        description:`.  Begin with a visit to the local temples and ashrams, where the air is filled with the prayers and the fragrance of incense-.
Explore the vibrant markets, offering sacred souvenirs, rudraksha beads, and woolen shawls to keep you warm in the Himalayan chill-.
Take a peaceful stroll along the banks of the holy river, letting the serene waters cleanse your mind and soul-.
In the evening, participate in the Ganga Aarti, where the rhythmic hymns and glowing diyas create a mesmerizing spiritual experience-.
Conclude your day with a simple yet fulfilling meal, preparing yourself for the divine pilgrimage ahead, where every step brings you closer to spiritual enlightenment.`,
        image: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/09/kedarnath-1632036632.jpg",
        Topic:"Embark on the sacred Chardham Yatra, exploring Yamunotri, Gangotri, Kedarnath, and Badrinath"
      },
      {
        day: 2,
        description: `Travel to Gaurikund, the starting point of the challenging trek to Kedarnath-
Undertake a 16 km trek (or opt for a pony/helicopter service) through rugged mountain trails-
Seek divine blessings at the Kedarnath Temple, one of the 12 Jyotirlingas of Lord Shiva, nestled amidst towering snow capped peaks-
Experience the tranquil and spiritual ambiance of this revered shrine.-`,
        image: "https://www.chardham.in/uploads/chardham-tours.jpg ",
        Topic:"Journey through Spiti Valley to Chandratal Lake & Kunzum Pass for an unforgettable adventure"
      }
    ],
  }, kedarnathyatra: {
    Longest:"ITINERARY",
    title: "KEDARNATH YATRA",
    description: "A beautiful hill station surrounded by snowy mountains..",
    image: "https://www.chardhamplan.com/Blog/wp-content/uploads/2024/11/kedarnath-1681874169.jpg",
    imageTag:"https://www.pilgrimagetour.in/blog/wp-content/uploads/2024/02/Kedarnath-Route-Map-by-Helicopter.jpg",
    imagetag2:"https://5.imimg.com/data5/SELLER/Default/2024/3/396447165/KY/FS/OO/12810608/1.png",
    imagetag3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5o1_GSqJYfHESRl_C7e4Yb9Rma5oi3IiTFQ&s",
    packagePrice: "₹30,000",
    duration: "6 Days & 5 Nights",
    bestTime: "May - October",
    trekDistance: "Approx. 50 Km",
    maxAltitude: "17,600 ft",
    Weekends:"PACKAGES",
    Payment:"QR",
    overview: [
      "• Region: Kedarnath, one of the holiest pilgrimage sites in Uttarakhand, nestled in the Garhwal Himalayas and dedicated to Lord Shiva.",
      "• Altitude: 11,755 ft above sea level, offering awe-inspiring views of the snow-clad peaks and serene surroundings.",
      "• Duration: 5 days / 4 nights, covering the spiritual journey to Kedarnath along with breathtaking Himalayan landscapes.",
      "• Distance: 16 kilometers of trekking from Gaurikund to Kedarnath, passing through lush valleys, waterfalls, and rugged mountain trails.",
      "• Difficulty Level: Moderate to Challenging, requiring good stamina and preparation for high-altitude trekking.",
      "• Trek Start Point: Gaurikund, the base camp for the Kedarnath trek, accessible via road from Rishikesh and Haridwar.",
      "• End Point: Kedarnath Temple, the sacred abode of Lord Shiva, surrounded by the majestic Kedarnath range.",
      "• Pickup Point: Haridwar/Rishikesh, the main starting point for pilgrims traveling from Delhi, Dehradun, and other major cities."
    ],
    
    itinerary: [
      {
        day: 1,
        description: `Witness the mesmerizing Ganga Aarti at Har Ki Pauri in Haridwar or Triveni Ghat in Rishikesh, where the rhythmic chants and glowing lamps create a soul-stirring experience.-
                      Explore the vibrant streets of Rishikesh, known as the "Yoga Capital of the World," and visit the iconic Lakshman Jhula and Ram Jhula, offering breathtaking views of the Ganges.-
                      Savor traditional Pahadi cuisine, including Aloo Ke Gutke and Mandua Roti, at local eateries, adding a delicious cultural touch to your journey.-
                      Prepare for the upcoming trek by collecting essentials from local markets, where you’ll find warm clothing, trekking gear, and puja offerings for your Kedarnath visit.-`,
        image: "https://imagesvs.oneindia.com/img/2015/07/23-1437651158-kedarnath-temple1.jpg",
        Topic: "Haridwar/Rishikesh → Guptkashi → Gaurikund → Kedarnath Trek → Kedarnath Campsite → Return" 
      },
      {
        day: 2,
        description: `Embark on a spiritual and adventurous journey from Haridwar/Rishikesh to Kedarnath.-
Witness the scenic transition from lush river valleys to snow-clad Himalayan peaks.-
Pass through sacred towns like Devprayag, Rudraprayag, and Guptkashi, rich in mythology.-
Enjoy breathtaking views along winding roads, dense forests, and flowing rivers.-
Reach Gaurikund, the base for the 16 km trek to Kedarnath Temple.-
Trek through rugged mountain trails alongside the Mandakini River, absorbing nature's beauty.
Experience the divine aura of Kedarnath Temple, nestled amid towering Himalayan peaks.`,
        image: "https://www.hindustantimes.com/ht-img/img/2024/06/07/550x309/PTI05-30-2024-000093B-0_1717725519811_1717725614758.jpg",
        Topic: "Haridwar/Rishikesh → Guptkashi → Gaurikund → Kedarnath Trek → Vasuki Tal → Return."
      }
    ],
  }, "dodhamyatra": {
    Longest:"ITINERARY",
    title: "D0-Dham Yatra, Uttarakhand",
    description: "A mesmerizing meadow trek with panoramic Himalayan views...",
    image: "https://www.indiantempletour.com/wp-content/uploads/2022/08/Kedarnath-Temple.jpg",
    imageTag:"https://www.shikhar.com/blog/wp-content/uploads/2023/05/Route-Map-for-Char-Dham-Yatra.jpg",
    imagetag2:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/do-dham-yatra-design-template-6b94b00346f27dbc220b8a6e2520002a_screen.jpg?ts=1652025937",
    imagetag3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5o1_GSqJYfHESRl_C7e4Yb9Rma5oi3IiTFQ&s",
    packagePrice: "₹30,000",
    duration: "6 Days & 5 Nights",
    bestTime: "May - October",
    Payment:"PAYMENT DETAILS",
    trekDistance: "Approx. 50 Km",
    maxAltitude: "17,600 ft",
    Weekends:"PACKAGES",
    overview: [
      " Region: Uttarakhand, a sacred state in northern India, home to the revered Kedarnath and Badrinath temples, surrounded by the majestic Himalayas.",
      " Altitude: Varies, with Kedarnath at 11,755 ft and Badrinath at 10,827 ft, offering divine tranquility amid breathtaking mountain landscapes.",
      " Distance: Covers the journey between Kedarnath and Badrinath, passing through scenic valleys, dense forests, and holy river confluences.",
      " Difficulty Level: Moderate, suitable for both pilgrims and adventure seekers, with high-altitude trekking and road travel involved.",
      " Trek Start Point: Gaurikund for Kedarnath and Govindghat for Badrinath, serving as the gateways to these sacred shrines.",
      " End Point: Badrinath, where the journey concludes with a visit to the revered temple of Lord Vishnu.",
      " Pickup Point: Haridwar/Rishikesh, the main starting point for pilgrims, offering easy access from major cities across India."
    ],
    itinerary: [
      {
        day: 1,
        description: 
`Region: Uttarakhand, a sacred state in northern India, home to the revered Kedarnath and Badrinath temples, surrounded by the majestic Himalayas.-"
"Trek Start Point: Gaurikund for Kedarnath and Govindghat for Badrinath, serving as the gateways to these sacred shrines.-"
"End Point: Badrinath, where the journey concludes with a visit to the revered temple of Lord Vishnu.-"
"Pickup Point: Haridwar/Rishikesh, the main starting point for pilgrims, offering easy access from major cities across India.-`
,
        image: "https://www.thesearchingsouls.com/wp-content/uploads/2020/03/kedarnath2.jpg",
        Topic: "DEHRADUN TO RAITHAL VILLAGE TREK TO DAYARA BUGYAL CAMPSITE"
      },
      {
        day: 2,
        description: "Embark on a breathtaking journey from Manali to Chandratal, traversing some of the most stunning landscapes in the Himalayas. -The drive takes you through lush green valleys, dense pine forests, and alongside the gushing Beas River, offering views at turn. -As you ascend, the scenery transforms—verdant meadows give way to rugged terrains, towering cliffs, and snow capped peaks. -You’ll cross the iconic Rohtang Pass, a high altitude gateway connecting Manali to the mystical Spiti Valley. The winding roads. -dramatic mountain vistas, and serene surroundings make this drive an unforgettable experience, setting the stage for the adventures ahead at the mesmerizing Chandratal Lake.",
        image: "https://m.economictimes.com/thumb/height-450,width-600,imgsize-79794,msid-110143723/do-not-send-any-vip-till-may-31-for-char-dham-yatra-uttarakhand-dgp-writes-letter-to-state-dgps.jpg",
        Topic: "EXPERIENCE THE SCENIC DAYARA BUGYAL TREK FROM DEHRADUN TO RAITHAL VILLAGE"
      }
    ],
  },"tungnathyatra": {
    Longest:"ITINERARY",
    title: "TUNGNATH YATRA",
    description: "A mesmerizing meadow trek with panoramic Himalayan views..",
    image: "https://imgcld.yatra.com/ytimages/image/upload/t_yt_blog_c_fill_q_auto:good_f_auto_w_800_h_500/v1481019868/DO_NOT_USE_DISCOVER_INDIA_EDITORIAL/Chopta_Blog1.jpg",
    imageTag:"https://i.pinimg.com/736x/4f/0c/7a/4f0c7aa0fbd20ce18a5444754f692cc8.jpg",
    packagePrice: "₹30,000",
    duration: "6 Days & 5 Nights",
    bestTime: "May - October",
    trekDistance: "Approx. 50 Km",
    maxAltitude: "17,600 ft",
    Payment:"PAYMENT DETAILS",
    imagetag2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm8FEDKxFH-Hw417ZAvDKUzv2fMjJxs6h_AQ&s",
    imagetag3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5o1_GSqJYfHESRl_C7e4Yb9Rma5oi3IiTFQ&s",
    Weekends:"PACKAGES",
    overview: [
      " Region: Uttarakhand, a sacred state in northern India, renowned for its spiritual heritage, majestic Himalayan peaks, and pristine natural beauty.",
      " Altitude: Varies, with Kedarnath at 11,755 ft and Badrinath at 10,827 ft, offering breathtaking views and a serene pilgrimage experience.",
      " Distance: Covers the revered Kedarnath and Badrinath temples, passing through scenic valleys, dense forests, and sacred river confluences.",
      " Difficulty Level: Moderate, suitable for both pilgrims and adventure seekers, with trekking and high-altitude travel involved.",
      " Trek Start Point: Gaurikund for Kedarnath and Govindghat for Badrinath, serving as the gateways to these sacred shrines.",
      " End Point: Badrinath, concluding the journey at the revered temple dedicated to Lord Vishnu.",
      " Pickup Point: Haridwar/Rishikesh, the main access point for travelers, providing seamless connectivity from major cities across India."
    ],
    
    itinerary: [
      {
        day: 1,
        description:` On day 1, as you reach Dehradun, a pick up will be arranged at the Dehradun Railway Station early in the morning, which is generally a jeep on a sharing basis.
        - The drive would take you to Pantwari village, which is the starting point of the Nag Tibba Trek. On the way, you will cross the beautiful hill station of Mussoorie.
        - As you reach the campsite, you will be prepared for your short first day trek to Nag Tibba Temple. Fix your camp and enjoy the bonfire with your fellow trekkers before starting your adventurous journey the next day.`,
        image: "https://static.toiimg.com/photo/90976675.cms",
        Topic:"DEHRADUN TO PANTWARI VILLAGE TREK TO NAG TIBBA TEMPLE CAMPSITE"
      },
      {
        day: 2,
        description:   `On day 1, as you reach Dehradun, a pick up will be arranged at the Dehradun Railway Station early in the morning, which is generally a jeep on a sharing basis.
      - The drive would take you to Pantwari village, which is the starting point of the Nag Tibba Trek. On the way, you will cross the beautiful hill station of Mussoorie.
      - As you reach the campsite, you will be prepared for your short first day trek to Nag Tibba Temple. Fix your camp and enjoy the bonfire with your fellow trekkers before starting your adventurous journey the next day.`,
        image: "https://trekthehimalayas.com/images/HomePageImages/Desktop/df149dd0-b808-4c67-be6b-b853af95bae8_Mythological-significance-of-Tungnath.webp",
        Topic:"TREK TO NAGTIBBA TOP &RETURN TO PANTWARI VILLAGE"
      },
    ],
  },"Shimla": {
    Longest:"ITINERARY",
    title: "Shimla, Himachal",
    description: "A mesmerizing meadow trek with panoramic Himalayan views...",
    image: "https://img.freepik.com/free-photo/aerial-shot-small-bright-town-snowy-mountains-evening_181624-36838.jpg?t=st=1742999911~exp=1743003511~hmac=d1c69319849090cfbfd01c3703a978644bf0265dcaf05295546435e32d3f75b7&w=996",
    imageTag:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWUW2h6i5QTr6l8XJXgcBQi6x__NvlQiVucQ&s",
    packagePrice: "₹30,000",
    duration: "6 Days & 5 Nights",
    imagetag2:"https://i.pinimg.com/736x/c3/4b/63/c34b63f2f79b098feb6b824655f9642d.jpg",
    imagetag3:"https://www.yourprint.in/new-admin-ajax/?action=generate_outer_image_via_design_templates&sku=1976369&dynDesID=Visiting_Card_Rect&cfcache=all",
    bestTime: "May - October",
    trekDistance: "Approx. 50 Km",
    Weekends:"PACKAGES",
    Payment:"PAYMENT DETAILS",
    maxAltitude: "17,600 ft",
    overview: [
      "Region: Shimla, a scenic northern state of India, famous for its lush green valleys, colonial charm, and breathtaking mountain views.",
      "Altitude: 7,467 ft above sea level, providing a cool and refreshing climate along with mesmerizing vistas of the surrounding Himalayan ranges.",
      "Duration: 3 days / 2 nights, ideal for a relaxing weekend escape with a mix of adventure, sightseeing, and leisure.",
      "Distance: Varies depending on the itinerary, covering iconic landmarks, nature trails, and cultural sites.",
      "Difficulty Level: Easy to moderate, making it suitable for families, couples, and solo travelers seeking a rejuvenating experience.",
      "Trek Start Point: Kufri, a popular adventure hub near Shimla, offering exciting trekking and nature walks.",
      "End Point: Shimla, concluding the trip in the heart of the city with its colonial heritage and bustling markets.",
    ],
    itinerary: [
      {
        day: 1,
        description: "Upon arriving in Manali, immerse yourself in the vibrant charm of this mountain town. Begin your journey by strolling through the bustling local markets, where you can shop for traditional Himachali woolens, handcrafted souvenirs, and aromatic spices. -Explore the quaint cafés scattered around Old Manali, offering cozy corners to relax with a cup of Himalayan tea. Walk along Mall Road, absorbing the lively atmosphere filled with street vendors, musicians, and stunning views of the surrounding peaks. -Visit the famous Hadimba Devi Temple, nestled amidst towering deodar trees, and soak in the spiritual aura of this ancient shrine. As the evening sets in, relish delicious local delicacies, enjoy the cool mountain breeze, and prepare for the adventures that await.",
        image: "/company 8.jpg",
        Topic: "DELHI TO SHIMLA EXPLORE THE QUEEN OF HILLS & SCENIC HIMALAYAN RETREAT"
      },
      {
        day: 2,
        description: "Embark on a mesmerizing drive from Manali to Chandratal, a journey through some of the most breathtaking landscapes in the Himalayas. -As you leave Manali, the winding roads take you through lush valleys, dense pine forests, and along the gushing Beas River. The scenery transforms dramatically as you ascend, with green meadows giving way to rugged terrains and towering snow capped peaks. -Cross the iconic Rohtang Pass, where crisp mountain air and panoramic vistas await. As you enter the Spiti Valley, witness barren yet surreal landscapes, deep gorges, and remote villages that seem frozen in time. -Every turn of the road offers a new spectacle, making the drive an unforgettable experience.",
        image: "/company 9.jpg",
        Topic:"TREK TO SHIMLA'S KUFRI & RETURN TO SHIMLA TOWN"
      },
    ],
  },
};

export default function LocationPage() { 
  const router = useRouter();
  const params = useParams();
  const locationKey = params.location as keyof typeof locationContent;
  const locationData = locationContent[locationKey] || locationContent["leh-ladakh"];
  const [openDay, setOpenDay] = useState<number | null>(null);
  const toggleDescription = (index: number) => {
    setOpenDay(openDay === index ? null : index);
  };
  const whatsappNumber = "911234509876"; 
const phoneNumber = "+917902059525"; 

const handleWhatsApp = () => {
  const message = encodeURIComponent("Hello! I am interested in the package.");
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
};

const handleCall = () => {
  window.location.href = `tel:${phoneNumber}`;
};
const [destination, setDestination] = useState(""); 
const handleLocationChange = () => {
  if (!destination) return; 

  const formattedLocation = destination.toLowerCase().replace(/\s+/g, "-");
  router.push(`/NewPoint/${formattedLocation}`);
};
  return (
    <div>
    <Navbar />
    <div 
      className="h-[94vh] flex flex-col items-center justify-center relative bg-cover bg-center"
      style={{
        backgroundImage: `url('${locationData.image}')`,
      }}
    >
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold uppercase">
          {locationData.title.split(" ").map((letter, index) => (
            <span
              key={index}
              className="animated-letter"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
        </h1>
        <p className="text-lg mt-2">{locationData.description}</p>
      </div>
    </div>
      <div className="bg-gray-100 py-10 px-6">      
  <div className="flex flex-col md:flex-row justify-center gap-8">         
    <div className="flex-1">
      <h1 className="text-2xl md:text-3xl font-semibold text-white bg-red-700 px-6 rounded-full text-center">
        OVERVIEW
      </h1>
      <ul className="mt-8 text-lg text-gray-700 font-semibold list-disc list-inside italic pl-6">
        {locationData.overview.map((point, index) => (
          <li key={index} className="mt-2 font-semibold">{point}</li>
        ))}
      </ul>
    </div>         
    <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/3 border border-gray-300">
      <h2 className="text-2xl font-bold text-center text-red-600">₹ 6499 /person</h2>
      <p className="text-center text-gray-600 text-sm">*GST @5% Extra</p>
      <div className="mt-4">
        <input type="text" placeholder="Enter Name" className="w-full border border-gray-300 p-2 rounded mt-2" />
        <input type="text" placeholder="Mobile No." className="w-full border border-gray-300 p-2 rounded mt-2" />
        <input type="email" placeholder="Enter Email" className="w-full border border-gray-300 p-2 rounded mt-2" />
        <input type="number" placeholder="Enter Age" className="w-full border border-gray-300 p-2 rounded mt-2" />    
        <select
          className="w-full border border-gray-300 p-2 rounded mt-2"
          value={destination}
          onChange={(e) => setDestination(e.target.value)} 
        >
          <option value="">Select Destination</option>
          <option value="tungnathyatra">Tungnath Yatra</option>
          <option value="dodhamyatra">dodhamyatra</option>
          <option value="kedarnathyatra">Kedarnath</option>
        </select>
        <button
          onClick={handleLocationChange} 
          disabled={!destination} 
          className="w-full bg-blue-600 text-white p-2 mt-2 rounded disabled:bg-gray-400"
        >
          Proceed
        </button>
      </div>
      <button
        onClick={handleWhatsApp}
        className="w-full bg-green-500 text-white p-2 mt-2 rounded"
      >
        WhatsApp
      </button>
      <button
        onClick={handleCall}
        className="w-full bg-green-500 text-white p-2 mt-2 rounded"
      >
        CALL NOW
      </button>
    </div>
  </div>

  <div className="mt-8 flex justify-center">
    <h2 className="text-2xl md:text-3xl font-bold text-white bg-red-700 px-6 rounded-full text-center">
      TREK MAP
    </h2>
  </div>
  
  <div className="flex justify-center mt-4">
    <img src={locationData.imageTag} alt="Location Map" className="w-198 h-100 m-2 rounded-lg" />
  </div>

  <div className="flex justify-center mt-8">
    <h1 className="text-xl md:text-3xl font-bold text-white bg-red-700 px-6 rounded-full inline-block text-center">
      {locationData.Longest}
    </h1>
  </div>

  <div className="mt-8 font-semibold">
    {locationData.itinerary.map((day, index) => (
      <div key={index} className="p-6 rounded-lg flex flex-col items-center font-semibold">
        <img src={day.image} alt={`Day ${day.day}`} className="w-[800px] h-96 object-cover rounded-md mb-2" />
        <p className="text-2xl text-red-500 mt-4">{day.Topic}</p>
        <h3 
          className="text-xl font-semibold mt-8 cursor-pointer bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition"
          onClick={() => toggleDescription(index)}
        >
          Day {day.day} ▼
        </h3>
        {openDay === index && (
          <ul className="text-lg mt-6 font-semibold max-w-[80%] list-disc list-inside transition-all duration-300">
            {day.description
              .split("-")
              .filter(point => point.trim() !== "")
              .map((point, i) => (
                <li key={i} className="mt-2 semibold italic">{point.trim()}</li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </div>
  <div className="mb-24">
  <C5/>
  </div>

  <div className="mt-12 flex justify-center">
    <h1 className="text-2xl md:text-3xl font-bold text-white bg-red-700 px-6 rounded-full text-center">
      {locationData.Payment}
    </h1>
  </div>

  <div className="mt-12 flex justify-center">
    <img src={locationData.imagetag3} className="w-150 h-120 m-2 rounded-lg" />
  </div>
   <div className="mt-24">
  <C2/>
  </div>
</div>

      <C7 />
    </div>
  );
}
