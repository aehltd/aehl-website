import { Button } from "antd";
import Link from "next/link";

import AehlKylinBanner from "@/components/banner/AehlKylinBanner";

export default function KylinOverview() {
  return (
    <div id="container" className="container">
      <div className="xl:w-[120vh] w-full pb-10">
        <AehlKylinBanner />
      </div>

      <div className="row grid grid-cols-3 gap-4 justify-center items-center text-center p-4">
        <div className="border-solid hover:border-double border-4 border-midnight2 rounded-4xl p-2 flex flex-col items-center">
          <span className="material-symbols-outlined md:!text-8xl !text-4xl text-midnight2">
            apartment
          </span>
          <h2 className="md:text-xl text-base">600 Cities</h2>
          <p className="text-sm">Services in 600+ cities</p>
        </div>
        <div className="border-solid hover:border-double border-4 border-midnight2 rounded-4xl p-2 flex flex-col items-center">
          <span className="material-symbols-outlined md:!text-8xl !text-4xl text-gray-500">
            currency_yuan
          </span>
          <h2 className="md:text-xl text-base">3 Million RMB</h2>
          <p className="text-sm">Annual transaction volume</p>
        </div>
        <div className="border-solid hover:border-double border-4 border-midnight2 rounded-4xl p-2 flex flex-col items-center">
          <span className="material-symbols-outlined md:!text-8xl !text-4xl text-gray-500">
            trending_up
          </span>
          <h2 className="md:text-xl text-base">120+ Brands</h2>
          <p className="text-sm">Served 120+ major brands</p>
        </div>
      </div>

      <div className="row grid md:grid-cols-2 grid-cols-1 gap-4 justify-items-center items-center text-start">
        <div>
          <h1 className="tracking-wider font-semibold">Our Vision</h1>
          <p>
            Livestreaming ecommerce is becoming mainstream, revolutionizing how
            businesses reach and engage customers. We seamlessly connect
            businesses with live streaming talent, and consumers benefit as a
            wide range of products become available at the fingertips and at
            highly competitive prices. By leveraging our extensive network, we
            aim to empower businesses and individuals to achieve their full
            potential in the digital economy.
          </p>
        </div>
        <div className="w-full">
          <iframe
            title="Kylin Tour Video"
            allow="fullscreen"
            allowFullScreen
            src="https://streamable.com/e/19gy9c?"
            style={{ width: "100%", height: "100%" }}
          ></iframe>
        </div>
      </div>

      <div className="flex row flex-col md:flex-row">
        <div className="flex my-4 md:order-first order-last md:mr-8 md:mb-0 md:w-1/2">
          <img
            src="https://res.cloudinary.com/aehl/image/upload/v1724428454/image2-2_fjgknc.jpg"
            alt="business"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 md:text-end">
          <h1 className="mb-4 tracking-wider font-semibold">Our Business</h1>
          <p>
            Our integrated platform seamlessly connects businesses with a vast
            network of broadcasters and influencers, unlocking new avenues for
            product promotion, customer acquisition, and sustained growth. With
            industry-leading solutions and a relentless pursuit of innovation,
            we enable our partners to navigate the livestreaming ecommerce world
            with confidence and succeed in captivating today&apos;s
            digital-savvy consumers.
          </p>
          <div className="ml-auto mt-4">
            <Link href="/aehl-kylin/model" passHref>
              <Button type="primary" size="middle">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-400 flex w-full justify-center">
        <div className="row text-center">
          <h1 className="text-white font-semibold mb-8">
            Collaborating Livestreaming Platforms
          </h1>
          <div className="flex w-full flex-col 4xl:flex-row justify-center 4xl:justify-evenly items-center">
            <div className="flex w-full flex-col md:flex-row 4xl:w-1/2 justify-evenly items-center">
              <div className="flex w-full justify-evenly items-center">
                <img
                  src="https://res.cloudinary.com/aehl/image/upload/v1724428447/%E5%B0%8F%E7%BA%A2%E4%B9%A6_d5u9yo.png"
                  alt="小红书"
                />
                <img
                  src="https://res.cloudinary.com/aehl/image/upload/v1724428451/%E5%BF%AB%E6%89%8B_fvsuyq.png"
                  alt="快手"
                />
              </div>
              <div className="flex w-full justify-evenly items-center">
                <img
                  src="https://res.cloudinary.com/aehl/image/upload/v1724428451/%E4%BA%AC%E4%B8%9C_b5u9vi.png"
                  alt="京东"
                />
                <img
                  src="https://res.cloudinary.com/aehl/image/upload/v1724428453/%E4%BB%8A%E6%97%A5%E5%A4%B4%E6%9D%A1_vfu7wc.png"
                  alt="今日头条"
                />
              </div>
            </div>
            <div className="flex w-full flex-col md:flex-row 4xl:w-1/2 justify-evenly items-center">
              <div className="flex w-full justify-evenly items-center">
                <img
                  src="https://res.cloudinary.com/aehl/image/upload/v1724428449/TikTok_aepoag.png"
                  alt="TikTok"
                />
                <img
                  src="https://res.cloudinary.com/aehl/image/upload/v1724428448/%E6%8A%96%E9%9F%B3_sctelm.png"
                  alt="抖音"
                />
              </div>
              <div className="flex w-full justify-evenly items-center">
                <img
                  src="https://res.cloudinary.com/aehl/image/upload/v1724428449/%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9_idd9e3.png"
                  alt="哔哩哔哩"
                />
                <img
                  src="https://res.cloudinary.com/aehl/image/upload/v1724428452/%E8%A5%BF%E7%93%9C%E8%A7%86%E9%A2%91_jzim14.png"
                  alt="西瓜视频"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
