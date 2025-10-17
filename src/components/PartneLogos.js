import React from 'react';

const PartneLogos = () => {
  // Top row: 6 logos as specified
  const topRow = [
    "/brandings/irnew.png",               // C5M (kept as is)
    "/brandings/d2p_logo.jpeg",       // Gold d2p
    "/brandings/galaxie.jpg",         // Moved up (was 4th)
    "/brandings/newtitan.png",        // Titan Mobile Gaming
    "/brandings/gallerylgo.png",      // Gallery Aurora (⚠️ ensure this file exists)
  ];

  // Bottom row: 4 long logos
  const bottomRow = [
    "/brandings/greengenie.png",
    "/brandings/eksplode.png",
    "/brandings/eMoneyGold.png",
    "/brandings/counter-strike-logo.jpeg",
  ];

  return (
    <div className="flex flex-col items-center mt-12 space-y-6">
      {/* Top Row */}
      <div className="flex flex-wrap justify-center gap-6">
        {topRow.map((src, idx) => (
          <img
            key={`top-${idx}`}
            src={src}
            alt=""
            className="h-16 w-auto max-h-16 object-contain"
          />
        ))}
      </div>

      {/* Bottom Row */}
      <div className="flex flex-wrap justify-center gap-6">
        {bottomRow.map((src, idx) => (
          <img
            key={`bottom-${idx}`}
            src={src}
            alt=""
            className="h-12 w-auto max-h-12 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default PartneLogos;