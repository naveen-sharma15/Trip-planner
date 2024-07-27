// const {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
//   } = require("@google/generative-ai");
import { GoogleGenerativeAI } from "@google/generative-ai";
  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMNI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  


     export const chatSession = model.startChat({
      generationConfig,
   
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with Hotel Name, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"hotelOptions\": [\n    {\n      \"hotelName\": \"The D Las Vegas\",\n      \"hotelAddress\": \"301 Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$60-$100 per night\",\n      \"hotelImageUrl\": \"https://www.thelinq.com/media/images/hotel-gallery/the-linq-hotel-exterior.jpg\",\n      \"geoCoordinates\": \"36.1699° N, 115.1423° W\",\n      \"rating\": 4.0,\n      \"description\": \"A budget-friendly hotel located in downtown Las Vegas, close to Fremont Street Experience.\"\n    },\n    {\n      \"hotelName\": \"Golden Nugget Las Vegas\",\n      \"hotelAddress\": \"129 E Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$70-$120 per night\",\n      \"hotelImageUrl\": \"https://www.goldennugget.com/media/images/hotel-gallery/the-linq-hotel-exterior.jpg\",\n      \"geoCoordinates\": \"36.1695° N, 115.1408° W\",\n      \"rating\": 4.5,\n      \"description\": \"A historic hotel known for its luxurious amenities and vibrant atmosphere.\"\n    },\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n      \"hotelAddress\": \"2880 Las Vegas Blvd S, Las Vegas, NV 89109\",\n      \"price\": \"$50-$80 per night\",\n      \"hotelImageUrl\": \"https://www.circuscircus.com/media/images/hotel-gallery/the-linq-hotel-exterior.jpg\",\n      \"geoCoordinates\": \"36.1218° N, 115.1665° W\",\n      \"rating\": 3.5,\n      \"description\": \"A family-friendly hotel offering affordable rates and a variety of entertainment options.\"\n    }\n  ],\n  \"itinerary\": [\n    {\n      \"day\": \"Day 1\",\n      \"plan\": [\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"A pedestrian-friendly street filled with live music, street performers, and vibrant lights.\",\n          \"placeImageUrl\": \"https://www.fremontstreetexperience.com/media/images/gallery/fremont-street-experience-night.jpg\",\n          \"geoCoordinates\": \"36.1699° N, 115.1423° W\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"time\": \"Evening (6:00 PM - 10:00 PM)\"\n        },\n        {\n          \"placeName\": \"The Neon Museum\",\n          \"placeDetails\": \"A museum showcasing iconic neon signs from Las Vegas's history.\",\n          \"placeImageUrl\": \"https://www.neonmuseum.org/media/images/gallery/neon-museum-night.jpg\",\n          \"geoCoordinates\": \"36.1701° N, 115.1271° W\",\n          \"ticketPricing\": \"$20-$30 per person\",\n          \"rating\": 4.0,\n          \"time\": \"Late Afternoon (4:00 PM - 6:00 PM)\"\n        },\n        {\n          \"placeName\": \"Binions Gambling Hall\",\n          \"placeDetails\": \"A classic casino with a historic atmosphere and affordable gaming options.\",\n          \"placeImageUrl\": \"https://www.binions.com/media/images/gallery/binions-casino-night.jpg\",\n          \"geoCoordinates\": \"36.1703° N, 115.1398° W\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.0,\n          \"time\": \"Late Night (10:00 PM - 12:00 AM)\"\n        }\n      ]\n    },\n    {\n      \"day\": \"Day 2\",\n      \"plan\": [\n        {\n          \"placeName\": \"The Strip\",\n          \"placeDetails\": \"The heart of Las Vegas, lined with world-class casinos, hotels, and entertainment venues.\",\n          \"placeImageUrl\": \"https://www.lasvegas.com/media/images/gallery/the-strip-night.jpg\",\n          \"geoCoordinates\": \"36.1146° N, 115.1729° W\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 5.0,\n          \"time\": \"Afternoon (2:00 PM - 6:00 PM)\"\n        },\n        {\n          \"placeName\": \"Bellagio Fountains\",\n          \"placeDetails\": \"A spectacular water and light show synchronized to music.\",\n          \"placeImageUrl\": \"https://www.bellagio.com/media/images/gallery/bellagio-fountains-night.jpg\",\n          \"geoCoordinates\": \"36.1178° N, 115.1737° W\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"time\": \"Evening (7:00 PM - 9:00 PM)\"\n        },\n        {\n          \"placeName\": \"The LINQ Promenade\",\n          \"placeDetails\": \"An outdoor shopping, dining, and entertainment complex with a unique High Roller observation wheel.\",\n          \"placeImageUrl\": \"https://www.thelinq.com/media/images/gallery/the-linq-promenade-night.jpg\",\n          \"geoCoordinates\": \"36.1213° N, 115.1704° W\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.0,\n          \"time\": \"Late Night (10:00 PM - 12:00 AM)\"\n        }\n      ]\n    },\n    {\n      \"day\": \"Day 3\",\n      \"plan\": [\n        {\n          \"placeName\": \"Hoover Dam\",\n          \"placeDetails\": \"A historical engineering marvel and a popular tourist destination.\",\n          \"placeImageUrl\": \"https://www.hooverdam.com/media/images/gallery/hoover-dam-day.jpg\",\n          \"geoCoordinates\": \"36.0118° N, 114.9988° W\",\n          \"ticketPricing\": \"$30 per person\",\n          \"rating\": 5.0,\n          \"time\": \"Morning (9:00 AM - 12:00 PM)\"\n        },\n        {\n          \"placeName\": \"Red Rock Canyon National Conservation Area\",\n          \"placeDetails\": \"A scenic area with stunning red rock formations and hiking trails.\",\n          \"placeImageUrl\": \"https://www.redrockcanyonlv.org/media/images/gallery/red-rock-canyon-day.jpg\",\n          \"geoCoordinates\": \"36.1745° N, 115.2670° W\",\n          \"ticketPricing\": \"$15 per vehicle\",\n          \"rating\": 4.5,\n          \"time\": \"Afternoon (2:00 PM - 5:00 PM)\"\n        },\n        {\n          \"placeName\": \"The Venetian and The Palazzo\",\n          \"placeDetails\": \"Luxury hotels with impressive architecture, shopping, and dining options.\",\n          \"placeImageUrl\": \"https://www.venetian.com/media/images/gallery/the-venetian-and-the-palazzo-day.jpg\",\n          \"geoCoordinates\": \"36.1195° N, 115.1723° W\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.0,\n          \"time\": \"Evening (6:00 PM - 9:00 PM)\"\n        }\n      ]\n    }\n  ]\n}\n```\n\n**Notes:**\n\n* This itinerary is just a suggestion, and you can customize it based on your interests and preferences.\n* The prices for hotels and attractions are estimates and may vary depending on the season and availability.\n* Be sure to check the opening hours and ticket prices before your trip.\n* Consider using public transportation or ride-sharing services to save on transportation costs.\n* Pack light to avoid baggage fees.\n* Take advantage of free activities like walking around the Strip, enjoying the Bellagio Fountains show, and visiting the Neon Museum.\n* Remember to stay hydrated, wear comfortable shoes, and apply sunscreen.\n* Have fun and enjoy your trip to Las Vegas!"},
          ],
        },
      ],
    });
  
  
  
  
