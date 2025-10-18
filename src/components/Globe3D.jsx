'use client';

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function Globe3D() {
  const canvasRef = useRef(null);
  const frameRef = useRef(null);
  const projectionRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Set initial canvas size
    const size = Math.min(700, window.innerWidth * 0.9, window.innerHeight * 0.9);
    canvas.width = size;
    canvas.height = size;

    const w = canvas.width;
    const h = canvas.height;

    const projection = d3.geoOrthographic()
      .translate([w / 2, h / 2])
      .scale((w / 2) * 1.0)
      .clipAngle(90);

    // Store projection in ref for resize handler
    projectionRef.current = projection;

    const path = d3.geoPath(projection, ctx);

    const COLORS = {
      'Europe': '#8f5bd8',
      'Asia': '#8f5bd8',
      'North America': '#f2a93b',
      'South America': '#1f5fbf',
      'Africa': '#f06d6d',
      'Oceania': '#44c197',
      'Antarctica': '#d9d9d9'
    };

    const OCEAN = '#B7D5EC';
    const GLOW = 'rgba(255,255,255,0.18)';
    let theta = 0;

    function glow() {
      // Glow effect removed
    }

    function ocean() {
      ctx.beginPath();
      path({ type: 'Sphere' });
      ctx.fillStyle = OCEAN;
      ctx.fill();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = 'rgba(0,0,0,0.15)';
      ctx.stroke();
    }

    // Country to continent mapping
    const countryToContinent = {
      // Africa
      'DZA': 'Africa', 'AGO': 'Africa', 'BEN': 'Africa', 'BWA': 'Africa', 'BFA': 'Africa',
      'BDI': 'Africa', 'CMR': 'Africa', 'CAF': 'Africa', 'TCD': 'Africa', 'COG': 'Africa',
      'COD': 'Africa', 'CIV': 'Africa', 'DJI': 'Africa', 'EGY': 'Africa', 'GNQ': 'Africa',
      'ERI': 'Africa', 'ETH': 'Africa', 'GAB': 'Africa', 'GMB': 'Africa', 'GHA': 'Africa',
      'GIN': 'Africa', 'GNB': 'Africa', 'KEN': 'Africa', 'LSO': 'Africa', 'LBR': 'Africa',
      'LBY': 'Africa', 'MDG': 'Africa', 'MWI': 'Africa', 'MLI': 'Africa', 'MRT': 'Africa',
      'MUS': 'Africa', 'MAR': 'Africa', 'MOZ': 'Africa', 'NAM': 'Africa', 'NER': 'Africa',
      'NGA': 'Africa', 'RWA': 'Africa', 'SEN': 'Africa', 'SLE': 'Africa', 'SOM': 'Africa',
      'ZAF': 'Africa', 'SSD': 'Africa', 'SDN': 'Africa', 'SWZ': 'Africa', 'TZA': 'Africa',
      'TGO': 'Africa', 'TUN': 'Africa', 'UGA': 'Africa', 'ZMB': 'Africa', 'ZWE': 'Africa',
      
      // Asia
      'AFG': 'Asia', 'ARM': 'Asia', 'AZE': 'Asia', 'BHR': 'Asia', 'BGD': 'Asia',
      'BTN': 'Asia', 'BRN': 'Asia', 'KHM': 'Asia', 'CHN': 'Asia', 'GEO': 'Asia',
      'IND': 'Asia', 'IDN': 'Asia', 'IRN': 'Asia', 'IRQ': 'Asia', 'ISR': 'Asia',
      'JPN': 'Asia', 'JOR': 'Asia', 'KAZ': 'Asia', 'KWT': 'Asia', 'KGZ': 'Asia',
      'LAO': 'Asia', 'LBN': 'Asia', 'MYS': 'Asia', 'MDV': 'Asia', 'MNG': 'Asia',
      'MMR': 'Asia', 'NPL': 'Asia', 'PRK': 'Asia', 'OMN': 'Asia', 'PAK': 'Asia',
      'PSE': 'Asia', 'PHL': 'Asia', 'QAT': 'Asia', 'SAU': 'Asia', 'SGP': 'Asia',
      'KOR': 'Asia', 'LKA': 'Asia', 'SYR': 'Asia', 'TWN': 'Asia', 'TJK': 'Asia',
      'THA': 'Asia', 'TLS': 'Asia', 'TUR': 'Asia', 'TKM': 'Asia', 'ARE': 'Asia',
      'UZB': 'Asia', 'VNM': 'Asia', 'YEM': 'Asia',
      
      // Europe
      'ALB': 'Europe', 'AND': 'Europe', 'AUT': 'Europe', 'BLR': 'Europe', 'BEL': 'Europe',
      'BIH': 'Europe', 'BGR': 'Europe', 'HRV': 'Europe', 'CYP': 'Europe', 'CZE': 'Europe',
      'DNK': 'Europe', 'EST': 'Europe', 'FIN': 'Europe', 'FRA': 'Europe', 'DEU': 'Europe',
      'GRC': 'Europe', 'HUN': 'Europe', 'ISL': 'Europe', 'IRL': 'Europe', 'ITA': 'Europe',
      'XKX': 'Europe', 'LVA': 'Europe', 'LIE': 'Europe', 'LTU': 'Europe', 'LUX': 'Europe',
      'MKD': 'Europe', 'MLT': 'Europe', 'MDA': 'Europe', 'MCO': 'Europe', 'MNE': 'Europe',
      'NLD': 'Europe', 'NOR': 'Europe', 'POL': 'Europe', 'PRT': 'Europe', 'ROU': 'Europe',
      'RUS': 'Europe', 'SMR': 'Europe', 'SRB': 'Europe', 'SVK': 'Europe', 'SVN': 'Europe',
      'ESP': 'Europe', 'SWE': 'Europe', 'CHE': 'Europe', 'UKR': 'Europe', 'GBR': 'Europe',
      'VAT': 'Europe',
      
      // North America
      'ATG': 'North America', 'BHS': 'North America', 'BRB': 'North America', 'BLZ': 'North America',
      'CAN': 'North America', 'CRI': 'North America', 'CUB': 'North America', 'DMA': 'North America',
      'DOM': 'North America', 'SLV': 'North America', 'GRD': 'North America', 'GTM': 'North America',
      'HTI': 'North America', 'HND': 'North America', 'JAM': 'North America', 'MEX': 'North America',
      'NIC': 'North America', 'PAN': 'North America', 'KNA': 'North America', 'LCA': 'North America',
      'VCT': 'North America', 'TTO': 'North America', 'USA': 'North America',
      
      // South America
      'ARG': 'South America', 'BOL': 'South America', 'BRA': 'South America', 'CHL': 'South America',
      'COL': 'South America', 'ECU': 'South America', 'GUY': 'South America', 'PRY': 'South America',
      'PER': 'South America', 'SUR': 'South America', 'URY': 'South America', 'VEN': 'South America',
      
      // Oceania
      'AUS': 'Oceania', 'FJI': 'Oceania', 'KIR': 'Oceania', 'MHL': 'Oceania',
      'FSM': 'Oceania', 'NRU': 'Oceania', 'NZL': 'Oceania', 'PLW': 'Oceania',
      'PNG': 'Oceania', 'WSM': 'Oceania', 'SLB': 'Oceania', 'TON': 'Oceania',
      'TUV': 'Oceania', 'VUT': 'Oceania',
      
      // Antarctica
      'ATA': 'Antarctica'
    };

    fetch('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson')
      .then(r => r.json())
      .then(geo => {
        const features = geo.features;
        let t0 = performance.now();

        function loop(t) {
          const dt = t - t0;
          t0 = t;
          theta = (theta + 4 * dt / 1000) % 360; 
          projection.rotate([theta, -10, 0]);

          ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          // Transparent background
          ctx.fillStyle = 'transparent';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          
          glow();
          ocean();

          for (const f of features) {
            const countryCode = f.properties?.iso_a3 || f.id;
            const cont = countryToContinent[countryCode] || 'Other';
            ctx.beginPath();
            path(f);
            ctx.fillStyle = COLORS[cont] || '#b77ad6';
            ctx.fill();
            ctx.lineWidth = 0.5;
            ctx.strokeStyle = 'rgba(0,0,0,.2)';
            ctx.stroke();
          }

          frameRef.current = requestAnimationFrame(loop);
        }

        frameRef.current = requestAnimationFrame(loop);
      })
      .catch(err => {
        console.error('Failed to load world geojson:', err);
      });

    // Handle window resize
    const handleResize = () => {
      const newSize = Math.min(700, window.innerWidth * 0.9, window.innerHeight * 0.9);
      canvas.width = newSize;
      canvas.height = newSize;
      
      if (projectionRef.current) {
        projectionRef.current
          .translate([newSize / 2, newSize / 2])
          .scale((newSize / 2) * 1.0);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
    </div>
  );
}