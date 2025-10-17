'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="custom-navbar fixed top-0 w-full z-[1000] transition-all duration-400 bg-black/90 backdrop-blur-sm">
      <div className="container-fluid px-4">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <Link className="navbar-brand" href="/" aria-label="C5M Home">
            <Image 
              src="/images/logo-no-bg.png" 
              alt="C5M Logo" 
              width={80}
              height={80}
              priority
            />
          </Link>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler lg:hidden border-0 outline-none shadow-none bg-transparent"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="navbarNav"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              {/* Optional: render a simple icon if you don’t have Bootstrap JS */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {isMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </span>
          </button>

          {/* Desktop & Mobile Menu */}
          <div
            className={`${
              isMenuOpen ? 'block mt-4 lg:mt-0' : 'hidden'
            } lg:block lg:mx-5 lg:ms-5 w-full lg:w-auto`}
            id="navbarNav"
          >
            <ul className="navbar-nav flex flex-col lg:flex-row text-center lg:ms-5 gap-2 lg:gap-0">
              <li className="nav-item me-2">
                <Link
                  href="/about_us"
                  className="nav-link mb-2 lg:mb-0 px-4 py-2 rounded text-white transition-colors duration-300 block"
                  style={{ background: 'linear-gradient(180deg, #F54748 0%, #AC090A 100%)' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item me-2">
                <Link
                  href="/invest"
                  className="nav-link mb-2 lg:mb-0 px-4 py-2 rounded text-white transition-colors duration-300 block"
                  style={{ background: 'linear-gradient(180deg, #F54748 0%, #AC090A 100%)' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Invest
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}