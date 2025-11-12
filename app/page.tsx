"use client";

import React, { useState } from "react";

// Daily prayers (Nov 13 → Nov 30, 5 per day)
const dailyPrayers = {
  "2025-11-13": [
    "Thank God for bringing Felix and Norah together and sustaining their love.",
    "Lord, help them grow in patience, purity, and understanding.",
    "Remove pride, ego, and miscommunication from their relationship.",
    "Teach them to forgive quickly and love deeply.",
    "Let their union reflect Christ’s love for the Church.",
  ],
  "2025-11-14": [
    "Father, open a job opportunity for Norah in Nairobi according to Your will.",
    "Bless every interview, application, and opportunity for her relocation.",
    "Grant her favor with employers and colleagues.",
    "Provide peace and clarity as they plan their life together.",
    "Strengthen their trust in You during this waiting season.",
  ],
  "2025-11-15": [
    "Bless their relationship with joy, friendship, and godly guidance.",
    "Surround them with mentors and wise counsel to prepare for marriage.",
    "Remove any distractions that may hinder their focus on each other.",
    "Protect their hearts and minds from fear and doubt.",
    "Let their love grow stronger as they wait for Your timing.",
  ],
  "2025-11-16": [
    "Lord, provide for Introduction preparations: transport, shopping, and company.",
    "Grant peace and unity as families meet and discuss plans.",
    "Bless their communication and remove misunderstandings.",
    "Let all who attend experience joy and favor.",
    "Give wisdom and guidance in budgeting and spending for the event (50k).",
  ],
  "2025-11-17": [
    "Bless the food, clothing, and logistics for the Introduction.",
    "Remove pride and ego from both families during discussions.",
    "Let the introduction ceremony glorify Your name.",
    "Grant laughter, harmony, and smooth planning.",
    "Prepare their hearts for the next step: Ruracio planning.",
  ],
  "2025-11-18": [
    "Lord, guide every step of Ruracio planning (Dec 2026, 445k).",
    "Provide abundantly for the bride price, food, cake, decor, and clothes.",
    "Bless helpers and family members assisting in the event.",
    "Remove delays, confusion, and conflicts in planning.",
    "Let the event honor both families and glorify You.",
  ],
  "2025-11-19": [
    "Provide creativity, patience, and wisdom in Ruracio preparations.",
    "Bless all purchases, negotiations, and arrangements.",
    "Keep their hearts humble and grateful for Your provision.",
    "Grant favor with elders, guests, and family members.",
    "Let Ruracio planning strengthen the bond between Felix and Norah.",
  ],
  "2025-11-20": [
    "Lord, bless Wedding preparations (Mar 2027, 446k) with wisdom and clarity.",
    "Provide for venue, attire, food, music, photography, and decor.",
    "Protect them from financial strain and unnecessary expenses.",
    "Connect them with trustworthy and God-fearing service providers.",
    "Keep their hearts joyful and calm throughout the planning process.",
  ],
  "2025-11-21": [
    "Grant creativity and excellence in every wedding decision.",
    "Bless the wedding committee and all helping hands.",
    "Remove obstacles, delays, and conflicts before the wedding day.",
    "Grant good weather and smooth program flow.",
    "Let the wedding day glorify You and bring joy to all attendees.",
  ],
  "2025-11-22": [
    "Lord, establish their future home on the foundation of Your Word.",
    "Bless them with financial provision and wisdom for purchasing a home.",
    "Prepare their hearts to create a loving, peaceful household.",
    "Guide them in saving and stewarding resources well.",
    "Let their home be a place of hospitality, joy, and faithfulness.",
  ],
  "2025-11-23": [
    "Bless their marriage with laughter, unity, and understanding.",
    "Help them serve each other with humility and love.",
    "Protect them from envy, strife, and external pressures.",
    "Grant them spiritual, emotional, and physical health.",
    "Let their life together be a testimony of God’s grace.",
  ],
  "2025-11-24": [
    "Lord, bless their finances at every stage — introduction, Ruracio, wedding, and home.",
    "Provide opportunities for growth, savings, and wise spending.",
    "Help them prioritize according to Your will.",
    "Grant favor with all providers, vendors, and financial partners.",
    "Keep their hearts content and trusting in Your provision.",
  ],
  "2025-11-25": [
    "Strengthen their faith individually and as a couple.",
    "Let prayer and worship be central in their relationship.",
    "Grant discernment in every life and career decision.",
    "Help them trust Your timing above all human plans.",
    "Fill their hearts with hope, gratitude, and joy.",
  ],
  "2025-11-26": [
    "Bless Norah’s relocation and career transition fully.",
    "Provide a smooth move, work environment, and new connections in Nairobi.",
    "Grant peace and encouragement during this transition.",
    "Remove every obstacle and challenge that may hinder her progress.",
    "Align her career with Your divine purpose for their marriage.",
  ],
  "2025-11-27": [
    "Lord, prepare their hearts for future family life.",
    "Bless them with readiness for children and parenting in Your timing.",
    "Help them cultivate love, patience, and wisdom in marriage.",
    "Guide them to pray together daily and build spiritual intimacy.",
    "Let their relationship inspire others to trust and honor You.",
  ],
  "2025-11-28": [
    "Bless all milestones — introduction, Ruracio, wedding — and the planning process.",
    "Grant peace, joy, and unity with family and friends.",
    "Remove fear, stress, and delays in any event preparation.",
    "Bless helpers, vendors, and attendees in every stage.",
    "Keep their eyes fixed on You as the ultimate planner of their future.",
  ],
  "2025-11-29": [
    "Help them remember God’s faithfulness in every stage of their journey.",
    "Bless their communication, teamwork, and decision-making.",
    "Prepare their hearts to face challenges together with grace.",
    "Fill their marriage with laughter, gratitude, and love.",
    "Let their relationship be a strong testimony of trust and devotion to God.",
  ],
  "2025-11-30": [
    "Thank You, Lord, for guiding them to this season of planning and preparation.",
    "Bless them with clarity, faith, and joy as they move toward their events and home.",
    "Help them celebrate milestones with humility, gratitude, and love.",
    "Strengthen their union and future home according to Your perfect will.",
    "Let every plan and budget be fulfilled according to Your provision and guidance.",
  ],
};

export default function Home() {
  const dates = Object.keys(dailyPrayers).sort();
  const [currentIndex, setCurrentIndex] = useState(0);

  const prayersToday = dailyPrayers[dates[currentIndex] as keyof typeof dailyPrayers];

  const handleNext = () => {
    if (currentIndex < dates.length - 1) setCurrentIndex(currentIndex + 1);
  };
  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-50 to-pink-50 py-10 px-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        ❤️ Norah and Felix Prayer Points ❤️

      </h1>

     <p className="mb-4 text-gray-600 text-center">
  <strong>Date:</strong> {formatDate(dates[currentIndex])}
</p>

      <div className="bg-white shadow-xl rounded-2xl p-6 max-w-lg w-full mb-6">
        <ul className="list-decimal list-inside space-y-3 text-gray-700">
          {prayersToday.map((prayer, i) => (
            <li key={i}>{prayer}</li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4 mb-8">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="px-5 py-2 rounded-lg bg-blue-600 disabled:bg-gray-200"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === dates.length - 1}
          className="px-5 py-2 rounded-lg bg-green-600 text-white disabled:bg-gray-300"
        >
          Next
        </button>
      </div>

      <p className="mt-4 text-gray-500 text-sm text-center max-w-md">
        “Commit to the Lord whatever you do, and He will establish your plans.” — Proverbs 16:3
      </p>
    </main>
  );
}


// Helper function to format date nicely
function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
}
