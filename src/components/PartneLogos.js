import React from 'react';

const PartneLogos = () => {
  // Define each logo with a custom height (in Tailwind h- units) based on visual balance
  const logos = {
    top: [
      { src: "/brandings/irnew.png", h: "h-20" },
      { src: "/brandings/d2p_logo.jpeg", h: "h-20" },
      { src: "/brandings/galaxie.jpg", h: "h-20" },
      { src: "/brandings/newtitan.png", h: "h-20" },
      { src: "/brandings/gallerylgo.png", h: "h-16" }, // "G" is bold → reduce
    ],
    bottom: [
      { src: "/brandings/greengenie.png", h: "h-14" },     // was bloated → shrink
      { src: "/brandings/eksplode.png", h: "h-20" },
      { src: "/brandings/eMoneyGoldNew.png", h: "h-24" },  // was tiny → boost
      { src: "/brandings/counter-strike-logo.jpeg", h: "h-20" },
    ],
  };

  return (
    <div className="flex flex-col items-center mt-12 space-y-8">
      {/* Top Row */}
      <div className="flex flex-wrap justify-center gap-8">
        {logos.top.map((logo, i) => (
          <img
            key={`top-${i}`}
            src={logo.src}
            alt=""
            className={`${logo.h} w-auto object-contain`}
          />
        ))}
      </div>

      {/* Bottom Row */}
      <div className="flex flex-wrap justify-center gap-8">
        {logos.bottom.map((logo, i) => (
          <img
            key={`bottom-${i}`}
            src={logo.src}
            alt=""
            className={`${logo.h} w-auto object-contain`}
          />
        ))}
      </div>
    </div>
  );
};

export default PartneLogos;