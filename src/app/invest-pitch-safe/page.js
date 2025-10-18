import PartneLogos from '@/components/PartneLogos';
import React from 'react';

const SafeContract = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-10 max-w-4xl text-black">
        {/* Logo */}
        <div className="text-center mb-8">
          <img
                  src="/brandings/c5m-logo-center-bg-remove.png"
                  alt="C5M"
            className="mx-auto h-16 w-auto"
          />
        </div>

        {/* Title & Subtitle */}
        <h1 className="text-center text-xl font-bold mb-1">C5M SAFE (Simple Agreement for Future Equity)</h1>
        <p className="text-center text-sm text-red-600 mb-8">Last revised January 16, 2025</p>

        {/* Intro Paragraph */}
        <p className="mb-6">
          This Simple Agreement for Future Equity ("SAFE") is entered into as of [Date], by and between Continent 5 Media Group, Inc. ("C5M" or the "Company"), a [State of Incorporation] corporation, and the ("Investor").
        </p>

        {/* SAFE Terms List */}
        <ol className="list-decimal pl-5 space-y-4">
          <li>
            <strong>Investment Amount</strong> The Investor agrees to invest $____________________ in the Company (the "Purchase Amount") in exchange for the rights described in this SAFE.
          </li>
          <li>
            <strong>Conversion Terms</strong>
            <ol className="list-[lower-alpha] pl-5 mt-2 space-y-2">
              <li>
                <strong>Valuation Cap:</strong> $10,000,000.00
                <ul className="list-disc pl-5 mt-1">
                  <li>The Investor’s SAFE will convert into equity at the next equity financing round, subject to the valuation cap of $10,000,000.</li>
                </ul>
              </li>
              <li>
                <strong>Discount Rate:</strong> 20%
                <ul className="list-disc pl-5 mt-1">
                  <li>The Investor will receive a 20% discount on the price per share determined in the next equity financing round.</li>
                </ul>
              </li>
              <li>
                <strong>Conversion Event:</strong>
                <ul className="list-disc pl-5 mt-1">
                  <li>
                    The SAFE will convert into equity upon the occurrence of either:
                    <ul className="list-disc pl-5 mt-1">
                      <li>a) A Qualified Equity Financing ("QEF"), defined as the Company’s issuance of common stock in a financing event.</li>
                      <li>b) A Liquidity Event, including a merger, acquisition, or sale of substantially all of the Company’s assets.</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ol>
          </li>
          <li>
            <strong>Proceeds on Liquidity Event</strong> If there is a Liquidity Event before this SAFE converts, the Investor will receive a payment equal to the greater of: a) The Purchase Amount, or b) The amount payable had the SAFE converted immediately prior to the Liquidity Event.
          </li>
          <li>
            <strong>Dividend Policy</strong> The Company’s dividend policy is as follows:
            <ul className="list-disc pl-5 mt-1">
              <li>No dividends will be issued in the first year of operation.</li>
              <li>Beginning in the second year, 10% of distributable profits will be distributed as dividends proportionally to shareholders based on their ownership percentages.</li>
            </ul>
          </li>
          <li>
            <strong>Company Representations</strong> The Company represents and warrants:
            <ul className="list-disc pl-5 mt-1">
              <li>It is duly incorporated and in good standing under the laws of Delaware.</li>
              <li>This SAFE has been duly authorized, executed, and delivered by the Company.</li>
              <li>The Company has only issued common shares and does not have preferred shares.</li>
            </ul>
          </li>
          <li>
            <strong>Investor Representations</strong> The Investor represents and warrants:
            <ul className="list-disc pl-5 mt-1">
              <li>They have full legal capacity and authority to execute and deliver this SAFE.</li>
              <li>They are investing solely for their own account and not with a view to distribute.</li>
            </ul>
          </li>
          <li>
            <strong>No Voting or Control Rights:</strong> The SAFE does not provide the Investor with any voting rights, board seats, or control over Company operations until it converts into equity.
          </li>
          <li>
            <strong>Amendments and Waivers:</strong> Any amendment or waiver of this SAFE must be in writing and signed by both the Company and the Investor.
          </li>
          <li>
            <strong>Governing Law:</strong> This SAFE will be governed by and construed in accordance with the laws of the State of [State].
          </li>
          <li>
            <strong>Miscellaneous</strong>
            <ul className="list-disc pl-5 mt-1">
              <li>The Investor acknowledges the speculative nature of this investment and that there is no guarantee of a return on the Purchase Amount.</li>
              <li>This SAFE constitutes the entire agreement between the parties concerning its subject matter.</li>
            </ul>
          </li>
        </ol>

        {/* Signature Block */}
        <p className="mt-8"><strong>IN WITNESS WHEREOF,</strong> the parties have executed this SAFE as of the date first written above.</p>
        <p className="mt-2">Date: __________________</p>
        <p>Continent 5 Media Group, Inc. By: ___________________________</p>
        <p>Name: Michael Schulze</p>
        <p>Title: CEO</p>
        <p>Date: __________________</p>

        {/* Download Link */}
        <p className="mt-6">
          <a  
            href="/pdfs/C5M_Safe_Agreement.pdf"
            download="C5M_Safe_Agreement.pdf" 
            className="font-bold text-black underline hover:text-gray-800"
           >
            Download Safe Contract PDF
          </a>
        </p>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center gap-5 mt-10">
           <PartneLogos/>
        </div>
      </main>

     
    </div>
  );
};

export default SafeContract;