'use client';

import React from 'react';

const AboutUsContent = () => {
  return (
    <div className="w-full bg-white pt-7">
      <div className="container mx-auto px-4">
        {/* Main Logo */}
        <div className="mb-10 flex justify-center">
          <img
            src="https://kurtzy.s3.ap-southeast-2.amazonaws.com/static/images/c5mnewlogo.png"
            alt="C5M"
            className="h-auto w-48"
          />
        </div>

        {/* Description Paragraph */}
        <div className="mb-12 max-w-3xl text-justify text-gray-800 md:mx-auto md:text-center">
          <p>
            Continent 5 Media Group (C5M) is a technology-driven ecosystem transforming how consumers and retailers connect. By integrating media, commerce, rewards, and entertainment, we leverage innovative platforms, creative content, and cutting-edge fintech solutions. Our mission is to Wow the World by creating unparalleled opportunities for engagement, growth, and innovation, empowering users and businesses to thrive across a connected digital landscape that spans all continents.
          </p>
        </div>

        {/* Partner / Brand Logos Grid */}
        <div className="mb-8 flex flex-wrap justify-center gap-6">
          {[
            'ir.png',
            'd2p_3.png',
            'galaxy.png',
            'galaxie.png',
            'newtitan.png',
            'gallerylgo.png',
            'eMoneyGold.png',
          ].map((filename, index) => (
            <img
              key={index}
              src={`https://kurtzy.s3.ap-southeast-2.amazonaws.com/static/images/${filename}`}
              alt=""
              className="h-auto w-32"
            />
          ))}
        </div>

        {/* Additional Logos (eksplode + greengenie) */}
        <div className="flex flex-col items-center gap-4">
          <img
            src="https://kurtzy.s3.ap-southeast-2.amazonaws.com/static/images/eksplode.png"
            alt="eksplode"
            className="h-12"
          />
          <img
            src="https://kurtzy.s3.ap-southeast-2.amazonaws.com/static/images/greengenie.png"
            alt="greengenie"
            className="h-12"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsContent;