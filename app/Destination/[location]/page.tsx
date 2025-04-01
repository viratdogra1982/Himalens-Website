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
  "chandratal": {
    Longest:"ITINERARY",
    title: "CHANDRATAL",
    description: "Explore the breathtaking landscapes of Leh Ladakh...",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/e5/bc/20/the-memserizing-beauty.jpg?w=1200&h=1200&s=1",
    imageTag:"https://i.pinimg.com/736x/ce/e2/b0/cee2b0daa6f7a552d39c2edf9064bb33.jpg",
    imagetag2:"https://i.pinimg.com/736x/15/d9/55/15d955fd25bffbe51fa462f0e0b2389a.jpg",
    imagetag3:"https://www.yourprint.in/new-admin-ajax/?action=generate_outer_image_via_design_templates&sku=1976369&dynDesID=Visiting_Card_Rect&cfcache=all",
    packagePrice: "₹30,000",
    duration: "6 Days & 5 Nights",
    bestTime: "May - October",
    trekDistance: "Approx. 50 Km",
    Weekends:"PACKAGES",
    Payment:"QR",
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
        description:"Upon arrival in Manali, begin your journey by exploring the bustling local markets and charming cafés. -Stroll along Mall Road, where you can shop for traditional Himachali woolens, handcrafted souvenirs, and aromatic spices. Visit the Hadimba Devi Temple, an ancient wooden shrine nestled amidst cedar forests, and take a walk to Old Manali, known for its bohemian vibe, lively cafés, and scenic river views. -Relax at a cozy café, sipping on warm Himalayan tea while enjoying the breathtaking mountain backdrop. As the evening sets in, soak in the cool breeze, relish local delicacies, and prepare for the adventures that await in the coming days.",
        image: "/company image 2.webp",
        Topic:"MANALI TO KUNZUM PASS TREK TO CHANDRATAL LAKE CAMPSITE"
      },
      {
        day: 2,
        description: "Embark on an exhilarating drive from Manali to Chandratal, a journey that takes you through some of the most breathtaking landscapes in the Himalayas. -As you leave Manali, the winding roads lead you through lush green valleys, dense pine forests, and alongside the gushing Beas River, offering spectacular views at every turn. As you ascend, the scenery begins to change verdant meadows give way to rugged terrains, towering cliffs, and snow capped peaks. -You will pass through the iconic Rohtang Pass, a high altitude gateway that connects Manali to the Spiti Valley, where the air gets crisp and the landscape becomes more dramatic. The journey continues along the barren yet mesmerizing Spiti region, filled with surreal mountain views, deep gorges, and picturesque villages that seem frozen in time.",
        image: "/company image 3.jpg ",
        Topic:"SPITI VALLEY EXPEDITION TO CHANDRATAL LAKE & KUNZUM PASS"
      }
    ],
  },"valleyofflowers": {
    Longest:"ITINERARY",
    title: "VALLEY OF FLOWERS",
    description: "Explore the breathtaking landscapes of Leh Ladakh...",
    image: "https://plus.unsplash.com/premium_photo-1711697144877-b068f748bcd1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmFsbGV5JTIwb2YlMjBmbG93ZXJzfGVufDB8fDB8fHww",
    imageTag:"https://stikage.com/wpimages/maps/valleyofflowers.jpg",
    imagetag2:"https://media.istockphoto.com/id/1487456405/photo/valley-of-flowers.jpg?s=612x612&w=0&k=20&c=Lr4cLcSYlPVf_Twl91dUqR01VEJQ8FvE-CsG95Ym1ig=",
    imagetag3:"https://www.yourprint.in/new-admin-ajax/?action=generate_outer_image_via_design_templates&sku=1976369&dynDesID=Visiting_Card_Rect&cfcache=all",
    packagePrice: "₹30,000",
    duration: "6 Days & 5 Nights",
    bestTime: "May - October",
    trekDistance: "Approx. 50 Km",
    Weekends:"PACKAGES",
    Payment:"QR",
    maxAltitude: "17,600 ft",
    overview: [
      "Region: The Valley of Flowers, a UNESCO World Heritage Site, is nestled in the Chamoli district of Uttarakhand, India.",
      "Altitude: Situated at an elevation of 12,000 ft above sea level, the valley offers mesmerizing views of snow-capped peaks and lush greenery.",
      "Duration: Typically a 4 days / 3 nights trek, perfect for nature lovers, photographers, and adventure seekers.",
      "Difficulty Level: Easy to Moderate, making it accessible to beginners and experienced trekkers alike. However, the ascent to Hemkund Sahib at 14,100 ft requires endurance.",
      "Trek Start Point: Govindghat, a small town near Joshimath, serves as the base camp for the trek.",
      "End Point: Valley of Flowers National Park, where trekkers can witness over 300 species of endemic flowers, including the rare blue poppy and Brahma Kamal.",
      
    ],
    
    itinerary: [
      {
        day: 1,
        description:"Upon arrival in Manali, begin your journey by exploring the bustling local markets and charming cafés. -Stroll along Mall Road, where you can shop for traditional Himachali woolens, handcrafted souvenirs, and aromatic spices. Visit the Hadimba Devi Temple, an ancient wooden shrine nestled amidst cedar forests, and take a walk to Old Manali, known for its bohemian vibe, lively cafés, and scenic river views. -Relax at a cozy café, sipping on warm Himalayan tea while enjoying the breathtaking mountain backdrop. As the evening sets in, soak in the cool breeze, relish local delicacies, and prepare for the adventures that await in the coming days.",
        image: "https://media.istockphoto.com/id/1223790078/photo/beautiful-mountains-in-the-valley-of-flowers.jpg?s=612x612&w=0&k=20&c=SeRSmfRoaNY7I-6GK7NT7nhofuZjxBLeLgYde6G4dKk=",
        Topic:"MANALI TO KUNZUM PASS TREK TO CHANDRATAL LAKE CAMPSITE"
      },
      {
        day: 2,
        description: "Embark on an exhilarating drive from Manali to Chandratal, a journey that takes you through some of the most breathtaking landscapes in the Himalayas. -As you leave Manali, the winding roads lead you through lush green valleys, dense pine forests, and alongside the gushing Beas River, offering spectacular views at every turn. As you ascend, the scenery begins to change verdant meadows give way to rugged terrains, towering cliffs, and snow capped peaks. -You will pass through the iconic Rohtang Pass, a high altitude gateway that connects Manali to the Spiti Valley, where the air gets crisp and the landscape becomes more dramatic. The journey continues along the barren yet mesmerizing Spiti region, filled with surreal mountain views, deep gorges, and picturesque villages that seem frozen in time.",
        image: "https://i0.wp.com/travelshoebum.com/wp-content/uploads/2021/04/IMG_9934.jpg?ssl=1 ",
        Topic:"SPITI VALLEY EXPEDITION TO CHANDRATAL LAKE & KUNZUM PASS"
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
    Payment:"QR",
    imagetag2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm8FEDKxFH-Hw417ZAvDKUzv2fMjJxs6h_AQ&s",
    imagetag3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5o1_GSqJYfHESRl_C7e4Yb9Rma5oi3IiTFQ&s",
    Weekends:"PACKAGES",
    overview: [
      "Region: Uttarakhand, a sacred state in northern India, renowned for its spiritual heritage, majestic Himalayan peaks, and pristine natural beauty.",
      "Altitude: Varies, with Kedarnath at 11,755 ft and Badrinath at 10,827 ft, offering breathtaking views and a serene pilgrimage experience.",
      "Distance: Covers the revered Kedarnath and Badrinath temples, passing through scenic valleys, dense forests, and sacred river confluences.",
      "Difficulty Level: Moderate, suitable for both pilgrims and adventure seekers, with trekking and high-altitude travel involved.",
      "Trek Start Point: Gaurikund for Kedarnath and Govindghat for Badrinath, serving as the gateways to these sacred shrines.",
      "End Point: Badrinath, concluding the journey at the revered temple dedicated to Lord Vishnu.",
      "Pickup Point: Haridwar/Rishikesh, the main access point for travelers, providing seamless connectivity from major cities across India."
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
  }, manali: {
    Longest:"ITINERARY",
    title: "manali",
    description: "A beautiful hill station surrounded by snowy mountains..",
    image: "https://images.pexels.com/photos/939715/pexels-photo-939715.jpeg",
    imageTag:"https://moxtain.s3.ap-south-1.amazonaws.com/blogs/HamptaPassTrekBlog/Hamptapass-map.png",
    imagetag2:"https://journeyofhimalaya.com/wp-content/uploads/2025/01/13.webp",
    imagetag3:"https://www.yourprint.in/new-admin-ajax/?action=generate_outer_image_via_design_templates&sku=1976369&dynDesID=Visiting_Card_Rect&cfcache=all",
    packagePrice: "₹30,000",
    duration: "6 Days & 5 Nights",
    bestTime: "May - October",
    trekDistance: "Approx. 50 Km",
    maxAltitude: "17,600 ft",
    Weekends:"PACKAGES",
    Payment:"QR",
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
        description: "Upon arriving in Manali, immerse yourself in its vibrant atmosphere by exploring the bustling local markets and cozy cafés. -Take a leisurely stroll along Mall Road, where you can shop for traditional Himachali woolens, handcrafted souvenirs, and aromatic spices. Visit the Hadimba Devi Temple, an ancient wooden shrine surrounded by towering cedar forests, offering a serene escape. -Wander into Old Manali, known for its bohemian vibe, charming cafés, and scenic river views. Enjoy a cup of warm Himalayan tea at a riverside café while soaking in the breathtaking mountain backdrop. -Savor local delicacies like Siddu and Thukpa, adding a flavorful touch to your journey. As evening sets in, feel the crisp mountain breeze and unwind amidst the peaceful surroundings. -This marks the perfect beginning to your adventure in the heart of the Himalayas.",
        image: "/company 4.jpg",
        Topic: "MANALI TO SOLANG VALLEY TREK TO BHRIGU LAKE CAMPSITE" 
      },
      {
        day: 2,
        description: "Embark on a thrilling journey from Manali to Chandratal, passing through some of the most breathtaking landscapes in the Himalayas. -As you drive, witness the scenery transform from lush green valleys to rugged mountain terrains. Cross the iconic Rohtang Pass, where snow capped peaks and misty landscapes create a surreal experience. -The route takes you through winding roads, deep gorges, and pristine rivers, offering picture perfect views at every turn. Enter the Spiti Valley, where barren yet mesmerizing landscapes stretch endlessly, dotted with remote villages and fluttering prayer flags. -Along the way, take in the crisp mountain air and soak in the raw beauty of the untouched wilderness. As you approach Chandratal Lake, the anticipation builds for the magical experience that awaits.",
        image: "/company 5.jpg",
        Topic: "MANALI TO HAMPTA PASS TREK VIA CHANDRATAL LAKE CAMPSITE"
      }
    ],
  }, "jibhi": {
    Longest:"ITINERARY",
    title: "JIBHI, Uttarakhand",
    description: "A mesmerizing meadow trek with panoramic Himalayan views...",
    image: "https://images.unsplash.com/photo-1692368159780-fd0950fdfb1e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amliaGl8ZW58MHx8MHx8fDA%3D",
    imageTag:"https://wildsummit.in/wp-content/uploads/2024/11/IMG_1605.jpeg",
    imagetag2:"https://cdn.slidesharecdn.com/ss_thumbnails/jibhi-241206122449-807dda82-thumbnail.jpg?width=640&height=640&fit=bounds",
    imagetag3:"https://www.yourprint.in/new-admin-ajax/?action=generate_outer_image_via_design_templates&sku=1976369&dynDesID=Visiting_Card_Rect&cfcache=all",
    packagePrice: "₹30,000",
    duration: "6 Days & 5 Nights",
    bestTime: "May - October",
    Payment:"QR",
    trekDistance: "Approx. 50 Km",
    maxAltitude: "17,600 ft",
    Weekends:"PACKAGES",
    
    overview: [
      "Region: Dayara Burgyal, a mesmerizing state in northern India, known for its breathtaking Himalayan landscapes, lush green meadows, and trekking routes.",
      "Altitude: 11,000 ft above sea level, offering stunning panoramic views of the Gangotri range, Bandarpoonch, and Black Peak.",
      "Distance: 20 kilometers round trip, covering scenic oak forests, high-altitude grasslands, and breathtaking mountain views.",
      "Difficulty Level: Easy to Moderate, suitable for beginners and experienced trekkers looking for a refreshing and rewarding adventure.",
      "Trek Start Point: Raithal Village, a picturesque village serving as the gateway to this enchanting trek.",
      "End Point: Raithal Village, concluding the journey in the same charming village after a scenic trek.",
      "Pickup Point: Dehradun Railway Station, a convenient starting location with easy access for trekkers traveling from various cities."
    ],
    
    itinerary: [
      {
        day: 1,
        description: "Upon arriving in Manali, immerse yourself in the town’s lively atmosphere by exploring its vibrant local markets and charming cafés. -Stroll along the famous Mall Road, where you’ll find a variety of traditional Himachali woolens, handcrafted souvenirs, and aromatic. -The streets are lined with cozy cafés offering delicious local delicacies and warm Himalayan tea. -Visit the Hadimba Devi Temple, a serene wooden shrine surrounded by towering deodar trees, or take a leisurely walk to Old Manali, known for its bohemian vibe and scenic river views.",
        image: "/company 7.jpg",
        Topic: "Dehradun to Jibhi: A Serene Himalayan Escape"
      },
      {
        day: 2,
        description: "Embark on a breathtaking journey from Manali to Chandratal, traversing some of the most stunning landscapes in the Himalayas. -The drive takes you through lush green valleys, dense pine forests, and alongside the gushing Beas River, offering views at turn. -As you ascend, the scenery transforms—verdant meadows give way to rugged terrains, towering cliffs, and snow capped peaks. -You’ll cross the iconic Rohtang Pass, a high altitude gateway connecting Manali to the mystical Spiti Valley. The winding roads. -dramatic mountain vistas, and serene surroundings make this drive an unforgettable experience, setting the stage for the adventures ahead at the mesmerizing Chandratal Lake.",
        image: "/company -40.jpg",
        Topic: "Experience the Enchanting Jibhi Journey from Delhi"
      }
    ],
  },"nagtibba": {
    Longest:"ITINERARY",
    title: "NagTibba",
    description: "A mesmerizing meadow trek with panoramic Himalayan views..",
    image: "https://static2.tripoto.com/media/filter/tst/img/1023333/TripDocument/1642947182_dsc_8538_2_1.jpg",
    imageTag:"https://www.travanya.com/tourism/wp-content/themes/trv/images/tourism/uttarakhand/nag-tibba-trek-route-map.webp",
    packagePrice: "₹30,000",
    duration: "6 Days & 5 Nights",
    bestTime: "May - October",
    trekDistance: "Approx. 50 Km",
    maxAltitude: "17,600 ft",
    Payment:"QR",
    imagetag2:"https://i.pinimg.com/736x/d5/af/40/d5af400da4584d157a28d6a1a474ac25.jpg",
    imagetag3:"https://www.yourprint.in/new-admin-ajax/?action=generate_outer_image_via_design_templates&sku=1976369&dynDesID=Visiting_Card_Rect&cfcache=all",
    Weekends:"PACKAGES",
    overview:[
  "Region: Uttarakhand, a picturesque state in northern India, known for its breathtaking Himalayan landscapes, serene hill stations, and spiritual significance.",
  "Altitude: 9915 ft above sea level, offering stunning panoramic views of the surrounding Himalayan peaks and a refreshing mountain climate.",
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
        image: "/company 6.jpg",
        Topic:"DEHRADUN TO PANTWARI VILLAGE TREK TO NAG TIBBA TEMPLE CAMPSITE"
      },
      {
        day: 2,
        description:   `On day 1, as you reach Dehradun, a pick up will be arranged at the Dehradun Railway Station early in the morning, which is generally a jeep on a sharing basis.
      - The drive would take you to Pantwari village, which is the starting point of the Nag Tibba Trek. On the way, you will cross the beautiful hill station of Mussoorie.
      - As you reach the campsite, you will be prepared for your short first day trek to Nag Tibba Temple. Fix your camp and enjoy the bonfire with your fellow trekkers before starting your adventurous journey the next day.`,
        image: "/company 7.jpg",
        Topic:"TREK TO NAGTIBBA TOP &RETURN TO PANTWARI VILLAGE"
      },
    ],
  },"kasol": {
    Longest:"ITINERARY",
    title: "KASOL, Himachal",
    description: "A mesmerizing meadow trek with panoramic Himalayan views...",
    image: "https://images.unsplash.com/photo-1612638039814-1a67ea727114?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2Fzb2x8ZW58MHx8MHx8fDA%3D",
    imageTag:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWUW2h6i5QTr6l8XJXgcBQi6x__NvlQiVucQ&s",
    packagePrice: "₹30,000",
    duration: "6 Days & 5 Nights",
    imagetag2:"https://i.pinimg.com/736x/22/57/34/22573463ef8bcee368baa46940aa52ee.jpg",
    imagetag3:"https://www.yourprint.in/new-admin-ajax/?action=generate_outer_image_via_design_templates&sku=1976369&dynDesID=Visiting_Card_Rect&cfcache=all",
    bestTime: "May - October",
    trekDistance: "Approx. 50 Km",
    Weekends:"PACKAGES",
    Payment:"QR",
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
