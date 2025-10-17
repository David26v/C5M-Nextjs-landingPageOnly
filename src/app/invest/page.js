'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import PartneLogos from '@/components/PartneLogos';

export default function InvestContent() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowPreloader(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-20 pb-16 bg-white min-h-screen">
      <div className="mx-auto max-w-3xl px-4 md:px-6">

        {/* Main Logo */}
        <div className="mb-8 flex justify-center">
          <Image
            src="https://kurtzy.s3.ap-southeast-2.amazonaws.com/static/images/c5mnewlogo.png"
            alt="C5M"
            width={200}
            height={200}
            className="h-auto w-52"
            priority
          />
        </div>

        {/* Preloader */}
        {showPreloader && (
          <div className="mb-8 flex flex-col items-center">
            <div className="flex space-x-2 mb-4">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="h-5 w-5 animate-spin rounded-full border-2 border-red-600 border-t-transparent"
                  style={{ animationDuration: `${0.8 + i * 0.2}s` }}
                />
              ))}
            </div>
            <div className="text-lg font-bold text-gray-800">C5M.WORLD</div>
            <div className="text-sm text-gray-600 mt-1">
              Please wait while we prepare your experience
            </div>
          </div>
        )}

        {/* Content */}
        <div className="mb-10 text-gray-800">
          {/* Centered title and date */}
          <h2 className="text-xl font-bold mb-3 text-center">Invest in the Digital Renaissance with C5M</h2>
          <p className="text-red-600 text-center mb-6">Last revised January 16, 2025</p>

          {/* Left-aligned paragraphs (like normal document text) */}
          <p className="mb-4">
            C5M is revolutionizing the digital world with an innovative ecosystem that connects creators, consumers, and retailers. 
            Our platforms in publishing, gaming, music, digital advertising, and online marketplaces redefine how people interact with media and entertainment.
          </p>

          <p className="mb-4">
            Building on this, our eMoney Network and GreenGenie platform empower users 13 and older with tools for financial freedom. 
            These cutting-edge solutions enable seamless transactions, unlock economic opportunities, and transform digital payments, gift card exchanges, 
            and eMoney credits—ushering in the next era of financial empowerment. Join us and be part of this extraordinary journey.
          </p>

          <p className="mb-4 ">Transform your future. Invest in C5M.</p>

          <p className="mb-4 ">Learn More by downloading our informational PDFs:</p>

          <ul className="list-disc list-inside space-y-2 mb- max-w-md mx-auto text-left">
            <li>
              <a href="/invest-pitch-short/" className="text-blue-600 hover:underline">
                [InvestmentPitch] (Short Version)
              </a>
            </li>
            <li>
              <a href="/invest-pitch-long/" className="text-blue-600 hover:underline">
                [InvestmentPitch] (Extended Version)
              </a>
            </li>
            <li>
              <a href="/invest-pitch-safe/" className="text-blue-600 hover:underline">
                [SAFE Contract]
              </a>
            </li>
          </ul>
        </div>

        {/* Logo Grid */}
        <div className="mb-8 flex flex-col items-center space-y-4">
          <PartneLogos/>
        </div>

      </div>
    </div>
  );
}