import React from "react";
import { Carousel } from "antd";

import HomePageBanner from "./banner/HomePageBanner";
import AehlUsBanner from "./banner/AehlUsBanner";
import AehlKylinBanner from "./banner/AehlKylinBanner";
import AehlInvestorBanner from "./banner/AehlInvestorBanner";
import AehlBtcBanner from "./banner/AehlBtcBanner";

import Link from "next/link";

export default function HomePageCarousel() {
  return (
    <div className="xl:w-[120vh] w-full">
      <Carousel autoplay arrows adaptiveHeight={true}>

        {/* HomePage Banner */}
        <div className="relative">
          <Link href="/">
            <div className="blur-[2px]">
              <HomePageBanner />
            </div>
            <img
              className="absolute inset-0 m-auto w-1/2"
              src="https://res.cloudinary.com/aehl/image/upload/v1724428464/%E5%A4%A7%E7%99%BD%E8%89%B2.jpg_voicgv.png"
              alt="AEHL US"
            />
            <p className="absolute inset-x-0 top-[70%] font-goldman text-center text-sm md:text-3xl font-semibold text-white">
              A Beacon of Innovation in an <br /> Evolving Energy and Technology Landscape
            </p>
          </Link>
        </div>

        {/* AEHL US PAGE */}
        <div className="relative">
          <Link href="/aehl-us/corporate-overview">
            <div className="blur-[2px]">
              <AehlUsBanner />
            </div>
            <img
              className="absolute inset-0 m-auto w-1/2"
              src="https://res.cloudinary.com/aehl/image/upload/v1724428464/%E5%A4%A7%E7%99%BD%E8%89%B2.jpg_voicgv.png"
              alt="AEHL US"
            />
            <p className="absolute inset-x-0 top-[70%] text-center text-sm md:text-3xl font-semibold font-goldman text-white">
              Next Generation Infrastructure to Power{" "}
              <span className="text-dodger-blue-400">AI</span>
            </p>
          </Link>
        </div>

        {/* AEHL kylin PAGE */}
        <div className="relative">
          <Link href="/aehl-kylin/business-overview">
            <div className="blur-[4px]">
              <AehlKylinBanner />
            </div>
            <img
              className="absolute inset-0 m-auto w-1/2"
              src="https://res.cloudinary.com/aehl/image/upload/v1724428464/%E5%A4%A7%E7%99%BD%E8%89%B2.jpg_voicgv.png"
              alt="AEHL US"
            />
            <p className="absolute inset-x-0 top-[70%] text-center text-sm md:text-3xl font-semibold font-goldman text-white">
              The <span className="text-sky">Future</span> of Livestreaming Ecommerce
            </p>
          </Link>
        </div>

        {/* BTC Page */}
        <div className="relative">
          <Link href="/btc/btc-overview">
            <div className="blur-[4px]">
              <AehlBtcBanner />
            </div>
            <img
              className="absolute inset-0 m-auto w-1/2"
              src="https://res.cloudinary.com/aehl/image/upload/v1724428464/%E5%A4%A7%E7%99%BD%E8%89%B2.jpg_voicgv.png"
              alt="AEHL US"
            />
            <p className="absolute inset-x-0 top-[70%] text-center text-sm md:text-3xl font-semibold font-goldman text-white">
              The World&apos;s Premier Platform for <span className="text-pink-500"> Short Drama</span>
            </p>
          </Link>
        </div>

        {/* Our Value PAGE */}
        <div className="relative">
          <Link href="/ir/our_values">
            <div className="blur-[4px]">
              <AehlInvestorBanner />
            </div>
            <img
              className="absolute inset-0 m-auto w-1/2"
              src="https://res.cloudinary.com/aehl/image/upload/v1724428464/%E5%A4%A7%E7%99%BD%E8%89%B2.jpg_voicgv.png"
              alt="AEHL US"
            />
            <p className="absolute inset-x-0 top-[70%] text-center text-sm md:text-3xl font-semibold font-goldman text-white">
              Discover Our <span className="text-green">Investor Relations</span>
            </p>
          </Link>
        </div>
      </Carousel>
    </div>
  );
}
