'use client'
import React from 'react';
import Image from 'next/image';
import PartneLogos from '@/components/PartneLogos';


const InvestPitchLong = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto max-w-3xl px-4 py-10">
        {/* Logo */}
        <div className="text-center mb-6">
          <Image
                  src="/brandings/c5m-logo-center-bg-remove.png"
                  alt="C5M"
            width={200}
            height={80}
            className="mx-auto"
          />
        </div>

        {/* Title & Subtitle */}
        <h2 className="text-xl font-bold text-center mb-1 text-black">
          Continent 5 Media Group, Inc. (C5M) Investor Pitch
        </h2>
        <p className="text-red-600 text-center mb-8">Last revised January 16, 2025</p>

        {/* Content */}
        <div className="text-gray-800 space-y-5">
          <h3 className="text-lg font-semibold">Executive Summary</h3>
          <p>
            C5M is a pre-revenue startup created to lead the Digital Renaissance, a
            transformative era redefining how people create, share, and interact with
            digital content. Through innovative platforms and interconnected systems,
            C5M empowers creators, bridges accessibility gaps, and drives engagement
            in ways that align with this cultural and technological rebirth.<br />
            With divisions spanning music, publishing, gaming, advertising, and
            streaming, C5M is uniquely positioned to capture a share of the $650
            billion global digital advertising market and capitalize on the growing
            online marketplace sector, which reached $8.8 trillion in 2024 and
            continues to grow.<br />
            C5M functions more than just as a digital media company—it integrates the
            dynamic features of an online marketplace by connecting consumers,
            creators, and brands. From facilitating online purchases to earning
            retailer commissions, C5M empowers transactions and value exchange across
            its platforms. C5M’s eMoney Network further enhances this by enabling
            seamless user purchases, creating a self-sustaining ecosystem.<br />
            GreenGenie, a proprietary program, amplifies this mission by centralizing
            financial activity within C5M’s ecosystem. GreenGenie empowers
            participants to reinvest earnings, purchase ads, and fund additional
            platform activities, reducing transaction fees and increasing retained
            capital. This closed-loop approach enhances profitability and strengthens
            user engagement and loyalty, positioning GreenGenie as a pivotal asset
            within C5M’s ecosystem.<br />
            With 70% of our platforms and software developed, we seek to increase our
            operating capital by offering 5% ownership of C5M by selling 500,000
            common shares at $1.00 per share. This funding will provide a two-year
            sustainable runway, enabling robust product development, marketing
            expansion, and operational scaling to achieve rapid user acquisition and
            revenue growth.
          </p>

          <h3 className="text-lg font-semibold">The Problems</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Traditional Advertising Challenges:</strong> Consumers are overwhelmed by ads and
              increasingly use ad blockers, making it difficult for brands to connect
              with their audiences.
            </li>
            <li>
              <strong>Limited Access to Payment Systems:</strong> Many younger users, including those
              under 18, lack access to traditional banking and payment systems,
              restricting their ability to engage in digital commerce independently.
            </li>
            <li>
              <strong>Challenges in Digital Publishing:</strong> The digital publishing era faces
              critical challenges. Traditional eBook advertising models often
              interrupt the natural flow of content, leading to user dissatisfaction
              and low engagement. Existing systems fail to balance free access to
              content with sustainable revenue models for publishers and authors.
              Additionally, inefficient cataloging systems diminish user experience,
              limiting interaction with digital books.
            </li>
          </ul>

          <h3 className="text-lg font-semibold">The Solutions</h3>
          <p>C5M creates value-driven, engaging advertising experiences through platforms like:</p>

          {/* Platform: d2p */}
          <div className="flex flex-col items-center my-4">
            <Image
              src="https://kurtzy.s3.ap-southeast-2.amazonaws.com/static/images/d2p_3.png"
              alt="decade 2 publishing"
              width={150}
              height={60}
            />
          </div>
          <p className="font-medium">decade 2 publishing (d2p) and its KleverBook™ App:</p>
          <p>
            The KleverBook™ App addresses critical challenges in the digital publishing era by
            integrating non-intrusive and interactive advertising within eBooks.
            Traditional models struggle with balancing free content access and
            sustainable revenue for publishers and authors. The KleverBook
            revolutionizes this space by ensuring profitability through seamlessly
            integrated ads that enhance rather than disrupt the reading experience.
            By improving content cataloging for more straightforward navigation and
            creating a more engaging and interactive user experience, KleverBook
            resolves issues of limited user engagement and inefficient monetization
            while promoting free access to a diverse library of digital books.
          </p>

          {/* Platform: eksplode! */}
          <div className="flex flex-col items-center my-4">
            <Image
              src="https://kurtzy.s3.ap-southeast-2.amazonaws.com/static/images/eksplode.png"
              alt="eksplode"
              width={150}
              height={40}
            />
          </div>
          <p className="font-medium">eksplode! Interactive:</p>
          <p>Innovative ad formats like eksplode!’s DAC and VAC programs use p2p technology and entertainment to bring customers and retailers together in fun and rewarding ways.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>DAC Program:</strong> The Digital Ad Card (DAC) program empowers eksplode!
              Members to earn commissions by promoting products to their contacts
              through personalized digital cards. Members select products from a
              Retailers Catalog, send customizable DACs to their contacts, and
              earn commissions on purchases made through their unique eksplode!
              Code (QR code). This system not only drives sales but also
              incentivizes user engagement with brands. Commission fees vary by
              product and retailer, offering members competitive payouts based on
              the value of items sold.
            </li>
            <li>
              <strong>Video Ad Contest (VAC):</strong> Participants in the eksplode! VAC receive
              $1.00 for each video accepted into the contest. By securing
              intellectual property and concept rights for every video, C5M builds
              a library of valuable content. Winning videos, proven brilliant in
              concept, can then be sold to the advertising world for $10,000 or
              more, with the potential for significantly higher sales depending on
              concept brilliance and advertiser demand. This approach transforms a
              nominal initial investment into premium advertising content,
              significantly enhancing the value of C5M’s ecosystem by monetizing
              creativity and innovation.
            </li>
          </ul>

          {/* Platform: eMoney */}
          <div className="flex flex-col items-center my-4">
            <Image
              src="https://kurtzy.s3.ap-southeast-2.amazonaws.com/static/images/eMoneyGold.png"
              alt="eMoney Network"
              width={150}
              height={60}
            />
          </div>
          <p className="font-medium">eMoney Network:</p>
          <p>
            A proprietary payment system facilitating transactions and rewards across the C5M ecosystem. Designed for younger users without bank accounts, participants are issued a QR code linked to C5M’s main account. When users earn money on our platform, they can use their QR code to purchase online and in participating retail stores. This innovative system reduces transaction costs, fosters loyalty, and retains users while solving accessibility challenges for underbanked audiences.
          </p>

          {/* Platform: GreenGenie */}
          <div className="flex flex-col items-center my-4">
            <Image
              src="https://kurtzy.s3.ap-southeast-2.amazonaws.com/static/images/greengenie.png"
              alt="GreenGenie"
              width={180}
              height={40}
            />
          </div>
          <p className="font-medium">GreenGenie:</p>
          <p>
            A proprietary program enabling participants to reinvest earnings within C5M’s ecosystem. Users can fund advertising campaigns, access premium features, and purchase digital goods, all while reducing reliance on external payment processors. GreenGenie retains funds in the ecosystem, minimizing transaction costs and providing C5M with additional financial liquidity.
          </p>

          {/* Platform: Titan */}
          <div className="flex flex-col items-center my-4">
            <Image
              src="https://kurtzy.s3.ap-southeast-2.amazonaws.com/static/images/newtitan.png"
              alt="Titan Mobile Gaming"
              width={150}
              height={60}
            />
          </div>
          <p className="font-medium">Titan Mobile Gaming:</p>
          <p>
            Titan Mobile Gaming will be a significant revenue driver for C5M, tapping into the $200 billion global gaming industry. The platform integrates ads into gameplay and offers cash rewards to top players, gamifying advertising to foster user engagement and long-term retention. Titan also monetizes through affiliate marketing, in-app purchases, and premium tournaments, providing multiple revenue streams while delivering value to users and advertisers.
          </p>

          {/* Platform: Impact Records */}
          <div className="flex flex-col items-center my-4">
            <Image
              src="https://kurtzy.s3.ap-southeast-2.amazonaws.com/static/images/ir.png"
              alt="Impact Records"
              width={150}
              height={60}
            />
          </div>
          <p className="font-medium">Impact Records (IR):</p>
          <p>
            Impact Records is our music division, dedicated to providing artists a platform to showcase and sell their digital music. IR also curates a catalog of royalty-free music for eksplode!'s Video Ad Contest (VAC) program and C5M's streaming music service, Galaxie Music, enabling seamless integration of music across our platforms. This model offers artists global exposure and revenue opportunities, while C5M earns a commission on sales made through these platforms, contributing to the company’s broader ecosystem.
          </p>

          {/* Platform: Galaxie Music */}
          <div className="flex flex-col items-center my-4">
            <Image
              src="https://kurtzy.s3.ap-southeast-2.amazonaws.com/static/images/galaxie.png"
              alt="Galaxie Music"
              width={150}
              height={60}
            />
          </div>
          <p className="font-medium">Galaxie Music (GM):</p>
          <p>
            A streaming platform that integrates music into C5M’s ecosystem, providing free exposure for artists while powering creative advertising solutions. Its Galaxie Music Library (GML) offers royalty-free tracks for use in eksplode!'s Video Ad Contests (VAC) and other campaigns, reducing advertising costs and enhancing engagement.
          </p>

          {/* Platform: Gallery Aurora */}
          <div className="flex flex-col items-center my-4">
            <Image
              src="https://kurtzy.s3.ap-southeast-2.amazonaws.com/static/images/gallerylgo.png"
              alt="Gallery Aurora"
              width={150}
              height={60}
            />
          </div>
          <p className="font-medium">Gallery Aurora (GA):</p>
          <p>
            This platform hosts digital art, including NFTs, and integrates with unique use cases like the book <em>Paper Jumpsuit</em>. QR codes or hyperlinks in the book direct readers to C5M’s homepage, where they can discover Gallery Aurora. Readers can view digital images associated with the book, learn about GA’s offerings, and explore other C5M platforms. This approach saves on printing costs for authors while driving traffic to C5M’s ecosystem, enhancing user experience and platform exposure.
          </p>

          <h3 className="text-lg font-semibold">Market Opportunity</h3>
          <p>C5M stands out from competitors by combining innovative platforms, diverse revenue streams, and accessibility-focused solutions.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Integrated Ecosystem of Platforms</strong></li>
            <li><strong>eMoney Network</strong> – no bank link required</li>
            <li><strong>Innovative Advertising Models (eksplode!)</strong></li>
            <li><strong>KleverBook™ for Non-Intrusive Advertising in eBooks</strong></li>
            <li><strong>Monetizing User Creativity (VAC)</strong></li>
            <li><strong>Targeting Emerging Markets</strong></li>
            <li><strong>Accessible NFTs and Digital Art (Gallery Aurora)</strong></li>
          </ul>

          <p>Market Sizes:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Digital Advertising: $650 billion (9% annual growth)</li>
            <li>eBooks: $23 billion by 2026</li>
            <li>Mobile Gaming: $200 billion</li>
            <li>Digital Art/NFTs: $11.8 billion in 2023</li>
            <li>Music Streaming: $28.6 billion in 2023</li>
            <li>Online Marketplaces: $8.8 trillion in 2024</li>
          </ul>

          <h3 className="text-lg font-semibold">Business Model</h3>
          <p>C5M will generate revenue through:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Advertising</li>
            <li>Commission on platform transactions</li>
            <li>Music streaming subscriptions</li>
            <li>eMoney Network (10% margin on gift card redemptions)</li>
            <li>VAC (reselling IP content)</li>
            <li>GreenGenie (reinvestment ecosystem with 15% projected annual ROI)</li>
          </ul>

          <h3 className="text-lg font-semibold">Growth Strategies</h3>
          <p>Key strategies include cross-platform exposure, KleverBook™ adoption, Titan engagement, Galaxie Music growth, Gallery Aurora integration, eMoney accessibility, DAC/VAC virality, and retailer partnerships.</p>

          <h3 className="text-lg font-semibold">Competitive Edge</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>KleverBook™ vs. Kindle:</strong> Ad-supported free access vs. paywall</li>
            <li><strong>eMoney vs. PayPal/Cash App:</strong> No bank needed, QR-based, under-18 friendly</li>
            <li><strong>Titan vs. Competitors:</strong> 20% higher projected engagement</li>
            <li><strong>VAC vs. TikTok/YouTube:</strong> C5M owns IP, resells content</li>
            <li><strong>DAC:</strong> Peer-to-peer commission with tracked QR codes</li>
            <li><strong>Gallery Aurora:</strong> Free NFT gallery with ad monetization</li>
            <li><strong>GreenGenie:</strong> Closed-loop economy boosting retention and liquidity</li>
          </ul>

          <h3 className="text-lg font-semibold">Market Share Goals (Year 3)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Digital Advertising: 0.01% → $65M</li>
            <li>Mobile Gaming: 0.05% → $100M</li>
            <li>eBooks: 0.1% → $23M</li>
            <li>eCommerce Commissions: 0.001% → $100M</li>
            <li>...and more (see full breakdown in original)</li>
          </ul>

          <h3 className="text-lg font-semibold">Projected Returns for Investors</h3>
          <p><strong>Total Adjusted Year 3 Revenue:</strong> $224,520,000</p>
          <p><strong>Total Adjusted Year 6 Revenue:</strong> $465,375,000</p>

          <h3 className="text-lg font-semibold">Proposed Dividend Policy</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Years 1–3:</strong> 10% of net revenue</li>
            <li><strong>Years 4–6:</strong> 20%</li>
            <li><strong>Year 7+:</strong> 30–40%</li>
          </ul>

          <h3 className="text-lg font-semibold">Investment Opportunity</h3>
          <ul className="list-disc pl-5">
            <li><strong>Total Shares:</strong> 10,000,000</li>
            <li><strong>Offering:</strong> 500,000 shares at $1.00 = $500,000 for 5% equity</li>
          </ul>

          <h3 className="text-lg font-semibold">Funding Allocation</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Platform Development: $125,000 (25%)</li>
            <li>Marketing & Growth: $175,000 (35%)</li>
            <li>Operations & Staffing: $125,000 (25%)</li>
            <li>Miscellaneous/Buffer: $75,000 (15%)</li>
          </ul>

          <h3 className="text-lg font-semibold">Exit Strategy</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Strategic Acquisition (Meta, Google, Amazon) – $1–2B valuation in 5–7 years</li>
            <li>IPO in 5–6 years</li>
            <li>Revenue Buybacks</li>
            <li>Licensing & Partnerships</li>
          </ul>

          <h3 className="text-lg font-semibold">Leadership Profile</h3>
          <p>
            C5M’s leadership is a testament to resilience and transformation. In 2002, our CEO faced a federal drug trafficking conviction. During his incarceration, he utilized the time to study law, business, and marketing, which became the catalyst for profound personal and professional growth. Over the years, he has rebuilt his life and career, focusing on ethical leadership, creativity, and innovation.<br />
            This transformative journey has directly shaped C5M’s core values: integrity, accountability, and opportunity creation. The CEO’s unwavering commitment to these values is reflected in his personal investment of nearly $400,000, funded through an inheritance, to build C5M and its platforms over the past four years.<br />
            By sharing this history openly, we demonstrate our dedication to transparency and ethical business practices, ensuring investors and partners understand the foundation of our mission and vision.
          </p>

          <h3 className="text-lg font-semibold">Contact Information</h3>
          <p>Admin@C5M.world</p>

          {/* Download Link */}
          <p>
            <a
              href="/pdfs/C5M_long_pitch.pdf"
              download="C5M_InvestmentPitch_Long.pdf"
              className="text-blue-600 hover:underline font-medium"
            >
              Download [InvestmentPitch] (Extended Version) PDF
            </a>
          </p>

          {/* Logos */}
          <div className="flex flex-wrap justify-center gap-5 mt-10">
            <PartneLogos/>
          </div>
        </div>
      </div>
    </div>

  );
};

export default InvestPitchLong;