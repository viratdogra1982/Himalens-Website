"use client";

import { useParams } from "next/navigation";
import Navbar from "@/components/navbar";
import C7 from "@/components/c7";
import { LocationData } from "@/components/types";

const locationContent :  Record<string, LocationData>= {
  "leh-ladakh": {
    Longest:"ITINERARY",
    title: "leh-ladakh",
    description: "Explore the breathtaking landscapes of Leh Ladakh...",
    image: "https://t4.ftcdn.net/jpg/10/26/53/73/240_F_1026537378_V5odPh8L80rBklgml4sFOLZimo361hjD.jpg",
    imageTag:"https://i.pinimg.com/736x/ce/e2/b0/cee2b0daa6f7a552d39c2edf9064bb33.jpg",
    imagetag2:"https://www.naturetravelagency.com/uploads/1713791996Chandratal%20Lake%20camping.jpg",
    imagetag3:"https://www.shutterstock.com/shutterstock/photos/103027724/display_1500/stock-photo-random-generated-qr-code-abstract-pattern-103027724.jpg",
    packagePrice: "₹30,000",
    duration: "6 Days & 5 Nights",
    bestTime: "May - October",
    trekDistance: "Approx. 50 Km",
    Weekends:"PACKAGES",
    Payment:"PAYMENT DETAILS",
    maxAltitude: "17,600 ft",
    overview: [
      "Region: Chandratal, a breathtaking high-altitude lake in Himachal Pradesh, known for its stunning turquoise waters and surrounding Himalayan peaks.",
      "Altitude: 14,100 ft above sea level, offering mesmerizing reflections of the snow-capped mountains and a serene environment.",
      "Duration: 3 days / 2 nights, ideal for an adventurous yet peaceful getaway in the lap of nature.",
      "Distance: Approximately 14 kilometers of trekking, covering rugged landscapes, river crossings, and panoramic mountain views.",
      "Difficulty Level: Moderate, suitable for trekkers with some experience and those looking to explore the raw beauty of the Himalayas.",
      "Trek Start Point: Batal, a remote yet scenic location that serves as the gateway to Chandratal Lake.",
      "End Point: Chandratal Lake, where travelers can camp beside the pristine waters under a star-lit sky.",
      "Pickup Point: Manali Bus Stand, the most convenient access point for travelers coming from major cities like Delhi and Chandigarh."
    ],
    
    itinerary: [
      {
        day: 1,
        description:"Upon arrival in Manali, begin your journey by exploring the bustling local markets and charming cafés. Stroll along Mall Road, where you can shop for traditional Himachali woolens, handcrafted souvenirs, and aromatic spices. Visit the Hadimba Devi Temple, an ancient wooden shrine nestled amidst cedar forests, and take a walk to Old Manali, known for its bohemian vibe, lively cafés, and scenic river views. Relax at a cozy café, sipping on warm Himalayan tea while enjoying the breathtaking mountain backdrop. As the evening sets in, soak in the cool breeze, relish local delicacies, and prepare for the adventures that await in the coming days.",
        image: "https://www.lehladakhtaxis.com/img/sightseeing-map-of-ladakh/333x241_yarab-tso-lake.jpg",
        Topic:"MANALI TO KUNZUM PASS TREK TO CHANDRATAL LAKE CAMPSITE"
      },
      {
        day: 2,
        description: "Embark on an exhilarating drive from Manali to Chandratal, a journey that takes you through some of the most breathtaking landscapes in the Himalayas. As you leave Manali, the winding roads lead you through lush green valleys, dense pine forests, and alongside the gushing Beas River, offering spectacular views at every turn. As you ascend, the scenery begins to change verdant meadows give way to rugged terrains, towering cliffs, and snow capped peaks. -You will pass through the iconic Rohtang Pass, a high altitude gateway that connects Manali to the Spiti Valley, where the air gets crisp and the landscape becomes more dramatic. The journey continues along the barren yet mesmerizing Spiti region, filled with surreal mountain views, deep gorges, and picturesque villages that seem frozen in time.",
        image: "https://discoverwithdheeraj.com/wp-content/uploads/2014/10/314-1200x803.jpg",
        Topic:"SPITI VALLEY EXPEDITION TO CHANDRATAL LAKE & KUNZUM PASS"
      }
    ],
  }, manali: {
    Longest:"ITINERARY",
    title: "manali",
    description: "A beautiful hill station surrounded by snowy mountains..",
    image: "https://images.pexels.com/photos/939715/pexels-photo-939715.jpeg",
    imageTag:"https://moxtain.s3.ap-south-1.amazonaws.com/blogs/HamptaPassTrekBlog/Hamptapass-map.png",
    imagetag2:"https://tickyourtour.com/wp-content/uploads/2022/07/1-9.png",
    imagetag3:"https://www.shutterstock.com/shutterstock/photos/103027724/display_1500/stock-photo-random-generated-qr-code-abstract-pattern-103027724.jpg",
    packagePrice: "₹30,000",
    duration: "6 Days & 5 Nights",
    bestTime: "May - October",
    trekDistance: "Approx. 50 Km",
    maxAltitude: "17,600 ft",
    Weekends:"PACKAGES",
    Payment:"PAYMENT DETAILS",
    overview: [
      "Region: Manali, a stunning hill station in Himachal Pradesh, known for its lush valleys, snow-capped mountains, and adventure sports.",
      "Altitude: 6,726 ft above sea level, offering breathtaking views of the Pir Panjal and Dhauladhar ranges.",
      "Duration: 4 days / 3 nights, perfect for an unforgettable getaway filled with adventure and relaxation.",
      "Distance: Varies depending on the trek and activities, covering scenic landscapes, waterfalls, and picturesque villages.",
      "Difficulty Level: Easy to Moderate, making it suitable for both beginners and experienced travelers looking for a thrilling experience.",
      "Trek Start Point: Old Manali, a charming hub for trekkers, backpackers, and nature lovers.",
      "End Point: Manali, completing the adventure in this vibrant and picturesque town.",
      "Pickup Point: Manali Bus Stand, easily accessible for travelers coming from Delhi, Chandigarh, and other major cities."
    ],
    
    itinerary: [
      {
        day: 1,
        description: "Upon arriving in Manali, immerse yourself in its vibrant atmosphere by exploring the bustling local markets and cozy cafés. Take a leisurely stroll along Mall Road, where you can shop for traditional Himachali woolens, handcrafted souvenirs, and aromatic spices. Visit the Hadimba Devi Temple, an ancient wooden shrine surrounded by towering cedar forests, offering a serene escape. Wander into Old Manali, known for its bohemian vibe, charming cafés, and scenic river views. Enjoy a cup of warm Himalayan tea at a riverside café while soaking in the breathtaking mountain backdrop. Savor local delicacies like Siddu and Thukpa, adding a flavorful touch to your journey. As evening sets in, feel the crisp mountain breeze and unwind amidst the peaceful surroundings. This marks the perfect beginning to your adventure in the heart of the Himalayas.",
        image: "https://media.easemytrip.com/media/Blog/Travel%20Itinerary/638155296500611066/638155296500611066LjKS74.png",
        Topic: "MANALI TO SOLANG VALLEY TREK TO BHRIGU LAKE CAMPSITE" 
      },
      {
        day: 2,
        description: "Embark on a thrilling journey from Manali to Chandratal, passing through some of the most breathtaking landscapes in the Himalayas. As you drive, witness the scenery transform from lush green valleys to rugged mountain terrains. Cross the iconic Rohtang Pass, where snow capped peaks and misty landscapes create a surreal experience. The route takes you through winding roads, deep gorges, and pristine rivers, offering picture-perfect views at every turn. Enter the Spiti Valley, where barren yet mesmerizing landscapes stretch endlessly, dotted with remote villages and fluttering prayer flags. Along the way, take in the crisp mountain air and soak in the raw beauty of the untouched wilderness. As you approach Chandratal Lake, the anticipation builds for the magical experience that awaits.",
        image: "https://media.easemytrip.com/media/Blog/Travel%20Itinerary/638155296500611066/638155296500611066QsTa0O.png",
        Topic: "MANALI TO HAMPTA PASS TREK VIA CHANDRATAL LAKE CAMPSITE"
      }
    ],
  }, "dayara-bugyal": {
    Longest:"ITINERARY",
    title: "Dayara Bugyal, Uttarakhand",
    description: "A mesmerizing meadow trek with panoramic Himalayan views...",
    image: "https://img.freepik.com/free-photo/beautiful-shot-seiser-alm-alpine-meadow-italy-early-spring_181624-2211.jpg?t=st=1743000063~exp=1743003663~hmac=031cb1b08f63b122084a9b2fb13a80ab6eaafc18bba254ec6326c2656ee48008&w=996",
    imageTag:"https://wildsummit.in/wp-content/uploads/2024/11/IMG_1605.jpeg",
    imagetag2:"https://www.honeymoonpackagesmanali.org/uploads/8/2/6/1/8261259/published/shimla-manali-tour-packages.jpg",
    imagetag3:"https://www.shutterstock.com/shutterstock/photos/103027724/display_1500/stock-photo-random-generated-qr-code-abstract-pattern-103027724.jpg",
    packagePrice: "₹30,000",
    duration: "6 Days & 5 Nights",
    bestTime: "May - October",
    Payment:"PAYMENT DETAILS",
    trekDistance: "Approx. 50 Km",
    maxAltitude: "17,600 ft",
    Weekends:"PACKAGES",
    
    overview: [
      "Region: Dayara Burgyal, a mesmerizing state in northern India, known for its breathtaking Himalayan landscapes, lush green meadows, and serene trekking routes.",
      "Altitude: 11,000 ft above sea level, offering stunning panoramic views of the Gangotri range, Bandarpoonch, and Black Peak.",
      "Duration: 4 days / 3 nights, an ideal trek for nature lovers looking to experience the beauty of alpine meadows.",
      "Distance: 20 kilometers round trip, covering scenic oak forests, high-altitude grasslands, and breathtaking mountain views.",
      "Difficulty Level: Easy to Moderate, suitable for beginners and experienced trekkers looking for a refreshing and rewarding adventure.",
      "Trek Start Point: Raithal Village, a picturesque village serving as the gateway to this enchanting trek.",
      "End Point: Raithal Village, concluding the journey in the same charming village after a scenic trek.",
      "Pickup Point: Dehradun Railway Station, a convenient starting location with easy access for trekkers traveling from various cities."
    ],
    
    itinerary: [
      {
        day: 1,
        description: "Upon arriving in Manali, immerse yourself in the town’s lively atmosphere by exploring its vibrant local markets and charming cafés. Stroll along the famous Mall Road, where you’ll find a variety of traditional Himachali woolens, handcrafted souvenirs, and aromatic spices. The streets are lined with cozy cafés offering delicious local delicacies and warm Himalayan tea. Visit the Hadimba Devi Temple, a serene wooden shrine surrounded by towering deodar trees, or take a leisurely walk to Old Manali, known for its bohemian vibe and scenic river views. As the evening sets in, soak in the cool mountain air, enjoy a hearty meal, and prepare for the exciting adventures that await.",
        image: "https://www.adventurush.com/wp-content/uploads/2022/09/overview-4.jpg",
        Topic: "DEHRADUN TO RAITHAL VILLAGE TREK TO DAYARA BUGYAL CAMPSITE"
      },
      {
        day: 2,
        description: "Embark on a breathtaking journey from Manali to Chandratal, traversing some of the most stunning landscapes in the Himalayas. The drive takes you through lush green valleys, dense pine forests, and alongside the gushing Beas River, offering spectacular views at every turn. As you ascend, the scenery transforms—verdant meadows give way to rugged terrains, towering cliffs, and snow capped peaks. -You’ll cross the iconic Rohtang Pass, a high altitude gateway connecting Manali to the mystical Spiti Valley. The winding roads, dramatic mountain vistas, and serene surroundings make this drive an unforgettable experience, setting the stage for the adventures ahead at the mesmerizing Chandratal Lake.",
        image: "https://www.adventurush.com/wp-content/uploads/2022/09/shutterstock_1719688519.jpg",
        Topic: "EXPERIENCE THE SCENIC DAYARA BUGYAL TREK FROM DEHRADUN TO RAITHAL VILLAGE"
      }
    ],
  },"NagTibba": {
    Longest:"ITINERARY",
    title: "NagTibba",
    description: "A mesmerizing meadow trek with panoramic Himalayan views..",
    image: "https://static2.tripoto.com/media/filter/tst/img/1023333/TripDocument/1642947182_dsc_8538_2_1.jpg",
    imageTag:"https://trekthehimalayas.com/images/NagTibbaWeekendTrek/Map/d93e4163-45c7-4082-9bb7-93c83791cb66_Nag%20Tibba%20map.webp",
    packagePrice: "₹30,000",
    duration: "6 Days & 5 Nights",
    bestTime: "May - October",
    trekDistance: "Approx. 50 Km",
    maxAltitude: "17,600 ft",
    Payment:"PAYMENT DETAILS",
    imagetag2:"https://cdn1.tripoto.com/media/filter/tst/img/1358540/Image/1561638649_naagi.jpg.webp",
    imagetag3:"https://www.shutterstock.com/shutterstock/photos/103027724/display_1500/stock-photo-random-generated-qr-code-abstract-pattern-103027724.jpg",
    Weekends:"PACKAGES",
    overview:[
  "Region: Uttarakhand, a picturesque state in northern India, known for its breathtaking Himalayan landscapes, serene hill stations, and spiritual significance.",
  "Altitude: 9915 ft above sea level, offering stunning panoramic views of the surrounding Himalayan peaks and a refreshing mountain climate.",
  "Duration: 2 days / 1 night, perfect for a weekend getaway with moderate trekking and scenic landscapes.",
  "Distance: 16 kilometers round trip, covering beautiful forest trails and breathtaking mountain views",
  "Difficulty Level: Easy, making it an ideal trek for beginners looking for an adventurous yet manageable experience.",
  "Trek Start Point: Pantwari Village, a charming location serving as the gateway to this mesmerizing trek.",
  "End Point: Pantwari Village, completing the trek at the same picturesque village where the journey begins.",
  "Pickup Point: Dehradun Railway Station, a convenient starting location with easy access for trekkers traveling from various cities.",
    ],
    
    itinerary: [
      {
        day: 1,
        description:` On day 1, as you reach Dehradun, a pick up will be arranged at the Dehradun Railway Station early in the morning, which is generally a jeep on a sharing basis.
        - The drive would take you to Pantwari village, which is the starting point of the Nag Tibba Trek. On the way, you will cross the beautiful hill station of Mussoorie.
        - As you reach the campsite, you will be prepared for your short first day trek to Nag Tibba Temple. Fix your camp and enjoy the bonfire with your fellow trekkers before starting your adventurous journey the next day.`,
        image: "https://t.eucdn.in/tourism/lg/nagtibba-9751077.webp",
        Topic:"DEHRADUN TO PANTWARI VILLAGE TREK TO NAG TIBBA TEMPLE CAMPSITE"
      },
      {
        day: 2,
        description:   `On day 1, as you reach Dehradun, a pick up will be arranged at the Dehradun Railway Station early in the morning, which is generally a jeep on a sharing basis.
      - The drive would take you to Pantwari village, which is the starting point of the Nag Tibba Trek. On the way, you will cross the beautiful hill station of Mussoorie.
      - As you reach the campsite, you will be prepared for your short first day trek to Nag Tibba Temple. Fix your camp and enjoy the bonfire with your fellow trekkers before starting your adventurous journey the next day.`,
        image: "https://trekthehimalayas.com/images/HomePageImages/Desktop/c0703865-0096-46f3-8161-809ba0d6286e_Nag-tibba-Day-1.webp",
        Topic:"TREK TO NAGTIBBA TOP &RETURN TO PANTWARI VILLAGE"
      },
    ],
  },"Shimla": {
    Longest:"ITINERARY",
    title: "Shimla, Himachal",
    description: "A mesmerizing meadow trek with panoramic Himalayan views...",
    image: "https://img.freepik.com/free-photo/aerial-shot-small-bright-town-snowy-mountains-evening_181624-36838.jpg?t=st=1742999911~exp=1743003511~hmac=d1c69319849090cfbfd01c3703a978644bf0265dcaf05295546435e32d3f75b7&w=996",
    imageTag:"https://trekthehimalayas.com/images/NagTibbaWeekendTrek/Map/d93e4163-45c7-4082-9bb7-93c83791cb66_Nag%20Tibba%20map.webp",
    packagePrice: "₹30,000",
    duration: "6 Days & 5 Nights",
    imagetag2:"https://www.honeymoonpackagesmanali.org/uploads/8/2/6/1/8261259/published/shimla-manali-tour-packages.jpg",
    imagetag3:"https://www.shutterstock.com/shutterstock/photos/103027724/display_1500/stock-photo-random-generated-qr-code-abstract-pattern-103027724.jpg",
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
        description: "Upon arriving in Manali, immerse yourself in the vibrant charm of this mountain town. Begin your journey by strolling through the bustling local markets, where you can shop for traditional Himachali woolens, handcrafted souvenirs, and aromatic spices. -Explore the quaint cafés scattered around Old Manali, offering cozy corners to relax with a cup of Himalayan tea. Walk along Mall Road, absorbing the lively atmosphere filled with street vendors, musicians, and stunning views of the surrounding peaks. Visit the famous Hadimba Devi Temple, nestled amidst towering deodar trees, and soak in the spiritual aura of this ancient shrine. As the evening sets in, relish delicious local delicacies, enjoy the cool mountain breeze, and prepare for the adventures that await.",
        image: "https://d2qa7a8q0vuocm.cloudfront.net/images/20445420230513174156.png",
        Topic: "DELHI TO SHIMLA EXPLORE THE QUEEN OF HILLS & SCENIC HIMALAYAN RETREAT"
      },
      {
        day: 2,
        description: "Embark on a mesmerizing drive from Manali to Chandratal, a journey through some of the most breathtaking landscapes in the Himalayas. As you leave Manali, the winding roads take you through lush valleys, dense pine forests, and along the gushing Beas River. The scenery transforms dramatically as you ascend, with green meadows giving way to rugged terrains and towering snow-capped peaks. Cross the iconic Rohtang Pass, where crisp mountain air and panoramic vistas await. As you enter the Spiti Valley, witness barren yet surreal landscapes, deep gorges, and remote villages that seem frozen in time. Every turn of the road offers a new spectacle, making the drive an unforgettable experience.",
        image: "https://d2qa7a8q0vuocm.cloudfront.net/images/35028920230513174156.png",
        Topic:"TREK TO SHIMLA'S KUFRI & RETURN TO SHIMLA TOWN"
      },
    ],
  },
};

export default function LocationPage() {
  const params = useParams();
  const locationKey = params.location as keyof typeof locationContent;
  const locationData = locationContent[locationKey] || locationContent["leh-ladakh"];
  

  return (
    <div>
      <Navbar/>

      <div 
        className="h-[88vh] flex flex-col items-center justify-center relative"
        style={{
          backgroundImage: `url('${locationData.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-extrabold uppercase">
            {locationData.title.split("").map((letter, index) => (
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
      
      <div className="flex justify-center">
  <h1 className="text-2xl md:text-3xl font-semibold text-white bg-red-700 px-6 rounded-full">
    OVERVIEW
  </h1>
</div>
<ul className="mt-8 text-lg text-gray-700 font semibold list-disc list-inside pl-42">
    {locationData.overview.map((point, index) => (
      <li key={index} className="mt-2 semibold">{point}</li>
    ))}
  </ul>
  <div className="mt-8 flex justify-center">
  <h2 className="text-2xl md:text-3xl font-bold text-white bg-red-700 px-6 rounded-full">
    TREK MAP
  </h2>
</div>
<br>
</br>

<div className="flex justify-center">
  <img src={locationData.imageTag} alt="Location Image" className="w-198 h-100 m-2 rounded-lg" />
</div>

<div className="mt-8 flex justify-center">
  <h2 className="text-2xl md:text-3xl font-bold text-white bg-red-700 px-6  rounded-full">
    {locationData.Longest}
  </h2>
</div>
        <div className="mt-4 space-y-6">
          {locationData.itinerary.map((day, index) => (
            <div key={index} className="p-6 rounded-lg flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-2">Day {day.day}</h3>
              <img src={day.image} alt={`Day ${day.day}`} className="w-[800px] h-96 object-cover rounded-md mb-2" />
              <div className="text-2xl md:text-3xl font-bold text-red mt-8">
              <p className="text-2xl text-red-500">{day.Topic}</p>
              </div>
              <ul className="text-lg mt-6 font-semibold  max-w-[80%] list-disc list-inside">
        {day.description
          .split("-") 
          .filter(point => point.trim() !== "") 
          .map((point, i) => (
            <li key={i} className="mt-2">{point.trim()}</li> 
        ))}
      </ul>
            </div>
          ))}
        </div>
        <br>
        </br>
        <div className="mt-8 flex justify-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white bg-red-700 px-6 rounded-full">
            {locationData.Weekends}
          </h1>
        </div>
        <div className="mt-8 flex justify-center">
          <img src={locationData.imagetag2}  className="w-200 h-100 m-2 rounded-lg"></img>
        </div>
        <br>
        </br>
        <br></br>
        <div className="mt-8 flex justify-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white bg-red-700 px-6  rounded-full">
            {locationData.Payment}
          </h1>
        </div>
        <div className="mt-8 flex justify-center">
          <img src={locationData.imagetag3}  className="w-100 h-100 m-2 rounded-lg"></img>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <C7 />
    </div>
  );
}
