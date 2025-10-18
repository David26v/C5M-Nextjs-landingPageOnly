'use client'
import Footer from '@/components/Footer';
import Globe3D from '@/components/Globe3D';
import StarsCanvas from '@/components/NebulaBackground';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Initialize AOS
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init();
    }

    // Preloader
    const preloader = document.getElementById('ch-preloader');
    if (preloader) {
      setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.transition = 'opacity 2s ease';
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 1000);
      }, 500);
    }

    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.querySelector('.custom-navbar');
      if (navbar) {
        if (window.scrollY > 10) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    // Scroll buttons
    const scrollDown = document.getElementById('scroll-down');
    const scrollUp = document.getElementById('scroll-up');

    const handleScrollDown = () => {
      const cards = document.querySelectorAll('.cards-container .card');
      if (cards.length > 0) {
        const cardHeight = cards[0].offsetHeight + 40;
        const scrollAmount = cardHeight * 2;
        window.scrollBy({ top: scrollAmount, behavior: 'smooth' });
      }
    };

    const handleScrollUp = () => {
      const cards = document.querySelectorAll('.cards-container .card');
      if (cards.length > 0) {
        const cardHeight = cards[0].offsetHeight + 40;
        const scrollAmount = cardHeight * 2;
        window.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
      }
    };

    const toggleScrollButtons = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const footer = document.querySelector('footer');
      const footerTop = footer ? footer.offsetTop : 0;

      if (scrollDown) {
        if (scrollPosition < footerTop - 50) {
          scrollDown.classList.add('show');
        } else {
          scrollDown.classList.remove('show');
        }
      }

      if (scrollUp) {
        if (window.scrollY > 50) {
          scrollUp.classList.add('show');
        } else {
          scrollUp.classList.remove('show');
        }
      }
    };

    if (scrollDown) scrollDown.addEventListener('click', handleScrollDown);
    if (scrollUp) scrollUp.addEventListener('click', handleScrollUp);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', toggleScrollButtons);
    toggleScrollButtons();

    return () => {
      if (scrollDown) scrollDown.removeEventListener('click', handleScrollDown);
      if (scrollUp) scrollUp.removeEventListener('click', handleScrollUp);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', toggleScrollButtons);
    };
  }, []);

  return (
    <>
     
      {/* Main Content */}
      <main>
        <div className="container-fluid px-0">
          {/* Welcome Section */}
          <div 
            className="bg-info min-h-screen w-full flex items-center justify-center text-center relative overflow-hidden" 
            id="home"
          >
            <StarsCanvas/>
            <div 
              className="center-content w-[700px] h-[700px] max-w-[90vw] max-h-[90vw] rounded-full flex flex-col items-center justify-center text-white text-center p-[35px] box-border transition-transform duration-300 relative"
              style={{
                boxShadow: 'inset -20px -20px 50px rgba(13, 0, 129, 0.4), inset 20px 20px 50px rgba(7, 0, 109, 0.43), 0 10px 30px rgb(255, 255, 255)'
              }}
            >
              {/* 3D GLOBE */}
              <div className="absolute inset-0 rounded-full overflow-hidden z-0">
                <Globe3D />
              </div>

              {/* CONTENT OVERLAY */}
              <div className="relative z-10">
                <h3 className="welcome-text mb-5 text-white font-bold text-[clamp(1.8rem,4vw,3rem)]">
                  WELCOME TO
                </h3>
                <img 
                  src="/brandings/c5m-logo-center-bg-remove.png" 
                  alt="C5M" 
                  className="responsive-img max-w-full h-auto block mx-auto"
                />
                <p 
                  className="text-white mt-7 text-[clamp(1rem,2.5vw,1.25rem)]"
                  style={{
                    maxWidth: '75%',
                    margin: '0 auto',
                    textAlign: 'center',
                  }}
                >
                  Your digital world of entertainment, rewards, retail<br />
                  innovation, and marketplace opportunities
                </p>
              </div>
            </div>

            {/* Scroll Controls */}
            <div id="scroll-controls" className="fixed bottom-5 right-5 flex flex-col gap-[10px] z-[1000]">
              <div 
                id="scroll-up" 
                className="scroll-btn cursor-pointer text-white rounded-full p-[10px] bg-black/40 shadow-[0_2px_6px_rgba(255,255,255,0.3)] pointer-events-none opacity-0 transition-opacity duration-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <div 
                id="scroll-down" 
                className="scroll-btn cursor-pointer text-white rounded-full p-[10px] bg-black/40 shadow-[0_2px_6px_rgba(255,255,255,0.3)] pointer-events-none opacity-0 transition-opacity duration-500 animate-bounce pt-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Preloader */}
          <div 
            id="ch-preloader" 
            className="fixed inset-0 bg-[#f8f9fa] z-[9999] flex flex-col items-center justify-center"
          >
            <div className="preloader-content text-center max-w-[300px]">
              <div className="loader-animation relative w-20 h-20 mx-auto mb-5">
                <div className="loader-circle absolute w-full h-full border-[3px] border-transparent border-t-[rgb(238,81,67)] rounded-full animate-spin"></div>
                <div className="loader-circle absolute w-[70%] h-[70%] top-[15%] left-[15%] border-[3px] border-transparent border-t-[rgb(163,12,12)] rounded-full animate-spin" style={{animationDelay: '0.15s'}}></div>
                <div className="loader-circle absolute w-[50%] h-[50%] top-[25%] left-[25%] border-[3px] border-transparent border-t-[rgb(20,10,50)] rounded-full animate-spin" style={{animationDelay: '0.3s'}}></div>
              </div>
              <div className="loader-progress w-[200px] h-1 bg-[#e9ecef] rounded-sm mx-auto mt-5 overflow-hidden">
                <div className="loader-progress-bar h-full w-0 bg-gradient-to-r from-[rgb(238,67,67)] to-[rgb(163,12,12)] animate-progress"></div>
              </div>
              <div className="loader-text text-sm font-medium text-[#495057] tracking-wider uppercase mt-5">
                C5M.WORLD
              </div>
              <div className="loader-subtext text-xs text-[#adb5bd] mt-2 font-normal">
                Please wait while we prepare your experience
              </div>
            </div>
          </div>

          {/* Cards Section */}
          <section 
            className="cards-section py-20 px-10" 
            id="services"
            style={{
              backgroundImage: "url('https://kurtzy.s3.ap-southeast-2.amazonaws.com/static/images/bg.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="cards-container grid grid-cols-1 md:grid-cols-2 gap-6 px-0 md:px-10 w-full max-w-full mx-auto">
              {/* Card 1 - Publishing */}
              <a href="https://c5m-final.onrender.com/d2p/" target='_blank' className="link no-underline" data-aos="fade-up">
                <div className="card bg-white rounded-3xl shadow-[12px_12px_12px_rgb(58,2,94)] transition-transform duration-300 hover:-translate-y-[5px] flex flex-col items-center text-center p-0" id="publishing">
                  <h4 className="title text-[1.8219rem] font-bold my-[10px_0_5px] text-[rgb(251,156,17)]">PUBLISHING</h4>
                  <p className="description text-[1.8219rem] italic font-normal text-black">Decade 2 Publishing</p>
                  <img src="https://kurtzy.s3.ap-southeast-2.amazonaws.com/static/images/d2plogonewest.png" alt="d2p" className="w-full max-w-[450px] h-auto block mx-auto object-contain" />
                </div>
              </a>

              {/* Card 2 - Streaming */}
              <a href="/" className="link no-underline" data-aos="fade-up">
                <div className="card bg-white rounded-3xl shadow-[12px_12px_12px_rgb(58,2,94)] transition-transform duration-300 hover:-translate-y-[5px] flex flex-col items-center text-center p-0" id="streaming">
                  <h4 className="title text-[1.8219rem] font-bold my-[10px_0_5px] text-[rgb(148,51,227)]">STREAMING SERVICE</h4>
                  <p className="description text-[1.8219rem] italic font-normal text-black">Galaxie Music</p>
                  <img src="https://kurtzy.s3.ap-southeast-2.amazonaws.com/static/images/galaxie.jpg" alt="galaxie" className="w-full max-w-[450px] h-auto block mx-auto object-contain p-10 pt-0" />
                </div>
              </a>

              {/* Card 3 - Gaming */}
              <a href="/" className="link no-underline" data-aos="fade-up">
                <div className="card bg-white rounded-3xl shadow-[12px_12px_12px_rgb(58,2,94)] transition-transform duration-300 hover:-translate-y-[5px] flex flex-col items-center text-center p-0" id="games">
                  <h4 className="title text-[1.8219rem] font-bold my-[10px_0_5px] text-[rgb(240,0,50)]">MOBILE GAMING</h4>
                  <p className="description text-[1.8219rem] italic font-normal text-black">Titan Mobile Gaming</p>
                  <img className="titan w-full max-w-[450px] h-auto block mx-auto object-contain pt-0 bg-white" src="https://kurtzy.s3.ap-southeast-2.amazonaws.com/static/images/newtitan.png" alt="titangaming" />
                </div>
              </a>

              {/* Card 4 - Music */}
              <a href="/" className="link no-underline" data-aos="fade-up">
                <div className="card bg-white rounded-3xl shadow-[12px_12px_12px_rgb(58,2,94)] transition-transform duration-300 hover:-translate-y-[5px] flex flex-col items-center text-center p-0" id="music">
                  <h4 className="title text-[1.8219rem] font-bold my-[10px_0_5px] text-[rgb(244,76,185)]">MUSIC</h4>
                  <p className="description text-[1.8219rem] italic font-normal text-black">Impact Records</p>
                  <img src="https://kurtzy.s3.ap-southeast-2.amazonaws.com/static/images/irnew.png" alt="records" className="w-full max-w-[450px] h-[280px] block mx-auto object-contain" />
                </div>
              </a>

              {/* Card 5 - Digital Art */}
              <a href="https://c5m-final.onrender.com/aurora/"  target ='_blank' className="link no-underline" data-aos="fade-up">
                <div className="card bg-white rounded-3xl shadow-[12px_12px_12px_rgb(58,2,94)] transition-transform duration-300 hover:-translate-y-[5px] flex flex-col items-center text-center p-0" id="art">
                  <h4 className="title text-[1.8219rem] font-bold my-[10px_0_5px] text-[rgb(177,51,190)]">DIGITAL ART</h4>
                  <p className="description text-[1.8219rem] italic font-normal text-black">Gallery Aurora</p>
                  <img src="https://kurtzy.s3.ap-southeast-2.amazonaws.com/static/images/gallery2.png" alt="gallery_aurora" className="w-full max-w-[450px] h-auto block mx-auto object-contain" />
                </div>
              </a>

              {/* Card 6 - Interactivity */}
              <a href="/" className="link no-underline" data-aos="fade-up">
                <div className="card bg-white rounded-3xl shadow-[12px_12px_12px_rgb(58,2,94)] transition-transform duration-300 hover:-translate-y-[5px] flex flex-col items-center text-center p-0" id="interactivity">
                  <h4 className="title text-[1.8219rem] font-bold my-[10px_0_5px] text-[rgb(239,110,120)]">INTERACTIVITY</h4>
                  <p className="description text-[1.8219rem] italic font-normal text-black">eksplode!</p>
                  <img src="https://kurtzy.s3.ap-southeast-2.amazonaws.com/static/images/eksplode.png" alt="eksplode" className="w-full max-w-[450px] h-auto block mx-auto object-contain" />
                </div>
              </a>

              {/* Card 7 - Video Production */}
              <a href="/" className="link no-underline" data-aos="fade-up">
                <div className="card bg-white rounded-3xl shadow-[12px_12px_12px_rgb(58,2,94)] transition-transform duration-300 hover:-translate-y-[5px] flex flex-col items-center text-center p-0" id="video_production">
                  <h4 className="title text-[1.8219rem] font-bold my-[10px_0_5px] text-[rgb(21,98,189)]">VIDEO PRODUCTION</h4>
                  <p className="description text-[1.8219rem] italic font-normal text-black">Counterstrike Entertainment</p>
                  <img src="https://kurtzy.s3.ap-southeast-2.amazonaws.com/static/images/strikenew.png" alt="strike" className="w-full max-w-[450px] h-auto block mx-auto object-contain" />
                </div>
              </a>

              {/* Card 8 - Credit Exchange */}
              <a href="/" className="link no-underline" data-aos="fade-up">
                <div className="card bg-white rounded-3xl shadow-[12px_12px_12px_rgb(58,2,94)] transition-transform duration-300 hover:-translate-y-[5px] flex flex-col items-center text-center p-0" id="green_initiatives">
                  <h4 className="title text-[1.8219rem] font-bold my-[10px_0_5px] text-[rgb(0,168,89)]">CREDIT EXCHANGE</h4>
                  <p className="description text-[1.8219rem] italic font-normal text-black">Green Genie</p>
                  <img src="https://kurtzy.s3.ap-southeast-2.amazonaws.com/static/images/greengenie.png" alt="greengenie" className="w-full max-w-[450px] h-auto block mx-auto object-contain" />
                </div>
              </a>

              {/* Card 9 - Payment App */}
              <a href="/" className="link no-underline" data-aos="fade-up">
                <div className="card bg-white rounded-3xl shadow-[12px_12px_12px_rgb(58,2,94)] transition-transform duration-300 hover:-translate-y-[5px] flex flex-col items-center text-center p-0" id="payment_app">
                  <h4 className="title text-[1.8219rem] font-bold my-[10px_0_5px] text-[rgb(252,215,57)]">PAYMENT APP</h4>
                  <p className="description text-[1.8219rem] italic font-normal text-black">eMoney</p>
                  <img src="https://kurtzy.s3.ap-southeast-2.amazonaws.com/static/images/eMoneyGold.png" alt="eMoney" className="w-full max-w-[450px] h-auto block mx-auto object-contain" />
                </div>
              </a>
            </div>

          {/* Contact Card */}
            <div className="pt-10 col-span-full">
              <a 
                href="mailto:admin@continent5media.com" 
                className="no-underline block w-full"
                data-aos="fade-up"
              >
                <div className="card bg-white rounded-3xl shadow-[12px_12px_12px_rgb(58,2,94)] transition-transform duration-300 hover:-translate-y-[5px] p-8 w-full h-full flex flex-col items-center justify-center text-center">
                  {/* Envelope Icon */}
                  <div className="w-[80px] h-[80px] rounded-full border-2 border-[#c41811] flex items-center justify-center mx-auto mb-4">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="32" 
                      height="32" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="#c41811" 
                      strokeWidth="2"
                    >
                      <path d="M4 4h16v16H4z"></path>
                      <path d="M4 8l8 4 8-4"></path>
                    </svg>
                  </div>
                  <h4 className="text-[#c41811] font-bold text-2xl mb-2">Write To Us</h4>
                  <p className="text-[#c41811] text-lg">admin@continent5media.com</p>
                </div>
              </a>
            </div>
          </section>
        </div>
      </main>

      <style jsx>{`
        .scroll-btn.show {
          opacity: 1 !important;
          pointer-events: auto !important;
        }

        .custom-navbar.scrolled {
          background: rgb(255, 255, 255) !important;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1) !important;
        }

        @keyframes progress {
          0% {
            width: 0%;
            transform: translateX(-50%);
          }
          50% {
            width: 100%;
            transform: translateX(0%);
          }
          100% {
            width: 0%;
            transform: translateX(100%);
          }
        }

        .animate-progress {
          animation: progress 2s ease-in-out infinite;
        }

        @media (max-width: 600px) {
          .cards-container {
            grid-template-columns: 1fr !important;
            padding: 0 10px !important;
            gap: 16px !important;
          }

          .card {
            padding: 15px !important;
          }

          .card img {
            height: 150px !important;
            max-height: 180px !important;
          }

          .cards-section {
            padding: 20px 10px !important;
          }
        }

        @media (min-width: 768px) {
          .cards-container > a:nth-child(odd):last-child {
            grid-column: span 2;
          }

          .card img {
            height: 280px;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}