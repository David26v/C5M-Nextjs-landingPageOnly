'use client'
import React from 'react'

const Footer = () => {
  return (
    <div>
        {/* Footer */}
        <footer className="bg-[#1d1d1d] text-white pt-10 pb-0 px-5">
        <div className="text-center mb-[30px]">
          <img 
            src="/images/logo-no-bg.png" 
            alt="C5M Logo" 
            className="h-[60px] mb-5 mx-auto"
          />
          <div className="flex justify-center flex-wrap gap-[30px] font-bold">
            <span>MUSIC</span>
            <span>PUBLISHING</span>
            <span>MOVIE/VIDEO</span>
            <span>MARKETING</span>
            <span>COMMERCE</span>
            <span>MOBILE GAMING</span>
            <span>DIGITAL ART</span>
            <span>STREAMING SERVICE</span>
          </div>
        </div>

        <div className="text-center mb-[30px]">
          <a href="/privacy-policy/">
            <button className="bg-[#444] text-white px-5 py-[10px] my-[5px] mx-[5px] border-0 rounded cursor-pointer">
              PRIVACY POLICY
            </button>
          </a>
          <a href="/terms-of-use/">
            <button className="bg-[#444] text-white px-5 py-[10px] my-[5px] mx-[5px] border-0 rounded cursor-pointer">
              TERMS OF USE
            </button>
          </a>
        </div>

        <div className="m-0 p-0">
          <div className="bg-[#333] text-[#ccc] p-5 text-center w-full">
            <p className="m-0">© C5M — CONTINENT 5 MEDIA GROUP</p>
            <p className="m-0 text-sm">Your one-stop site for entertainment, rewards and online shopping.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
