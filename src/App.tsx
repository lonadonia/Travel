/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

// Custom Hand-crafted SVGs to closely match the image's icons

const HeartHandwriting = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#149f84" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="inline-block relative -top-1 ml-2 -rotate-12">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const MealsIcon = () => (
  <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12h16M3 14a9 9 0 0 0 18 0" />
    <path d="M7 8c0 1.5-1 2.5-1 4" />
    <path d="M12 8c0 1.5-1 2.5-1 4" />
    <path d="M17 8c0 1.5-1 2.5-1 4" />
  </svg>
);

const ClassIcon = () => (
  <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Book base */}
    <path d="M4 19.5v-8c0-1 1-2 3.5-2 2.5 0 4.5 2 4.5 2s2-2 4.5-2c2.5 0 3.5 1 3.5 2v8c0 1.5-1 2-3.5 2-2.5 0-4.5-2-4.5-2s-2 2-4.5 2c-2.5 0-3.5-.5-3.5-2z" />
    {/* Graduation Cap overlapping */}
    <path d="M12 2L3 6l9 4 9-4-9-4z" />
    <path d="M6 7.5V11c0 1.5 2.5 2.5 6 2.5s6-1 6-2.5V7.5" />
  </svg>
);

const SafeSpaceIcon = () => (
  <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 10l9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <path d="M12 16.5c-2.5-2-4-3.5-4-5.5a2.5 2.5 0 0 1 5-1.5 2.5 2.5 0 0 1 5 1.5c0 2-1.5 3.5-4 5.5l-1 1-1-1z" />
  </svg>
);

const CommunityIcon = () => (
  <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export default function App() {
  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans p-6 md:px-12 lg:px-20 lg:py-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-gray-500 font-semibold tracking-[0.2em] text-sm mb-4 uppercase">
            Travel With Purpose. Change Lives.
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-800 leading-tight flex flex-wrap items-center justify-center gap-x-3">
            Every Tour Supports 
            <span className="font-handwriting text-[#149f84] text-5xl md:text-6xl lg:text-7xl font-bold ml-1 pt-2 inline-flex items-center">
              Real People
              <HeartHandwriting />
            </span>
          </h1>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Image Collage */}
          <div className="flex flex-col gap-4">
            <img 
              src="https://i.ibb.co/CsmrCJJW/Gemini-Generated-Image-6q63rx6q63rx6q63-1.png" 
              alt="Diverse group of kids in classroom" 
              className="w-full h-72 md:h-80 object-cover rounded-[1.5rem]" 
              referrerPolicy="no-referrer"
            />
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://i.ibb.co/35W6WNQQ/Gemini-Generated-Image-wqcqu4wqcqu4wqcq.png" 
                alt="Community neighbors eating together" 
                className="w-full h-48 md:h-56 object-cover rounded-[1.5rem]" 
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://i.ibb.co/VYtjJYzj/Gemini-Generated-Image-y7butqy7butqy7bu.png" 
                alt="Teacher helping student" 
                className="w-full h-48 md:h-56 object-cover rounded-[1.5rem]" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column: Text and Grid */}
          <div className="flex flex-col">
            <div className="space-y-6 text-xl tracking-tight leading-[1.6] text-gray-900">
              <p>
                When you book a tour with us, a portion of your payment stays right here in Comuna 13 to support our nonprofit foundation.
              </p>
              <p>
                When people book on Viator/Tripadvisor, money leaves. Our goal is direct impact: keep the money in the barrio.
              </p>
              <div className="space-y-1">
                <p>We provide daily meals, education, and a safe space for 80 kids and 30 elderly neighbors—completely free of charge.</p>
                <p>You explore Medellín. They get hope, food, and opportunity.</p>
              </div>
            </div>

            {/* Icons Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-x-2 mt-12 py-2">
              <div className="flex items-center gap-5 py-6 md:pr-6 md:border-b md:border-r border-gray-200">
                <div className="text-[#149f84]"><MealsIcon /></div>
                <span className="font-bold text-[22px] tracking-tight">Daily Meals</span>
              </div>
              
              <div className="flex items-center gap-5 py-6 md:pl-8 border-t md:border-t-0 md:border-b border-gray-200">
                <div className="text-[#d8a820]"><ClassIcon /></div>
                <span className="font-bold text-[22px] tracking-tight">Marlly's Class</span>
              </div>
              
              <div className="flex items-center gap-5 py-6 md:pr-6 border-t md:border-t-0 md:border-r border-gray-200">
                <div className="text-[#149f84]"><SafeSpaceIcon /></div>
                <span className="font-bold text-[22px] tracking-tight">Safe Space</span>
              </div>
              
              <div className="flex items-center gap-5 py-6 md:pl-8 border-t md:border-t-0 border-gray-200">
                <div className="text-[#d8a820]"><CommunityIcon /></div>
                <span className="font-bold text-[22px] tracking-tight">Community First</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="bg-[#FAF3E1] mt-16 rounded-[1.5rem] p-8 lg:px-10 lg:py-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          
          <div className="flex items-start md:items-center gap-6 w-full">
            <div className="text-[#149f84] flex-shrink-0 pt-1 md:pt-0">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            
            <div className="flex flex-col space-y-1">
              <h3 className="font-bold text-[22px] text-gray-900 leading-snug">
                Coming to Medellín? Let us guide you and help support our mission?
              </h3>
              <p className="text-gray-900 text-[19px]">
                Click yes to be part of something bigger.
              </p>
            </div>
          </div>

          <button className="bg-[#149f84] hover:bg-[#10856e] text-white font-bold text-lg px-8 py-4 rounded-full whitespace-nowrap transition-colors shadow flex-shrink-0 w-full md:w-auto">
            YES, I WANT TO HELP
          </button>
          
        </div>

      </div>
    </div>
  );
}
