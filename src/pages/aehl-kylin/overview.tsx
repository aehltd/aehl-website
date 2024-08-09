import { Button } from "antd";
import Link from "next/link";

export default function KylinOverview() {
  return (
    <div id="container" className="container">
      <div className="relative flex w-full justify-center overflow-hidden text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.squarespace-cdn.com/content/65f5178b7e5b446365b2d70a/585c5fdd-4198-4d3c-b0b4-d7a9d6aac4e9/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230601145549.jpg')",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="absolute inset-0 bg-slate-500 opacity-25"></div>
        <div className="relative z-10 flex flex-col w-full h-full items-center justify-center p-16 space-y-16">
          <img
            src="https://images.squarespace-cdn.com/content/v1/65f5178b7e5b446365b2d70a/e55ba965-5b03-4ee7-80f7-da4419ea35ee/%E5%A4%A7%E7%99%BD%E8%89%B2.jpg"
            alt="Logo"
            className="w-full md:w-3/4 drop-shadow-2xl"
          />
          <h1 className="text-white font-semibold drop-shadow-2xl">
            The Future of Livestreaming Ecommerce
          </h1>
        </div>
      </div>

      <div className="flex row flex-col md:flex-row text-center justify-evenly items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex flex-col items-center p-8 border-2 rounded-md shadow-md">
          <span className="material-icons-outlined text-8xl text-gray-500">
            apartment
          </span>
          <h1>600 Cities</h1>
          <p>Services in 600+ cities</p>
        </div>
        <div className="flex flex-col items-center p-8 border-2 rounded-md shadow-md">
          <span className="material-icons-outlined text-8xl text-gray-500">
            currency_yuan
          </span>
          <h1>3 Million RMB</h1>
          <p>Annual transaction volume</p>
        </div>
        <div className="flex flex-col items-center p-8 border-2 rounded-md shadow-md">
          <span className="material-icons-outlined text-8xl text-gray-500">
            trending_up
          </span>
          <h1>120+ Brands</h1>
          <p>Served 120+ major brands</p>
        </div>
      </div>
      <div
        className="bg-local flex w-full justify-center"
        style={{
          backgroundImage:
            "url('https://www.aehlus.com/png/img12.f4ed389f.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="row">
          <div className="flex items-center justify-center ml-0 mb-4">
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "0px",
                paddingBottom: "42.656%",
              }}
            >
              <iframe
                title="Kylin Tour Video"
                allow="fullscreen"
                allowFullScreen
                height="100%"
                src="https://streamable.com/e/19gy9c?"
                width="100%"
                style={{
                  border: "none",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  left: "0px",
                  top: "0px",
                  overflow: "hidden",
                }}
              ></iframe>
            </div>
          </div>
          <div>
            <h1>Our Vision</h1>
            <p className="text-gray-700">
              Livestreaming ecommerce is becoming mainstream, revolutionizing
              how businesses reach and engage customers. We seamlessly connect
              businesses with live streaming talent, and consumers benefit as a
              wide range of products become available at the fingertips and at
              highly competitive prices. By leveraging our extensive network, we
              aim to empower businesses and individuals to achieve their full
              potential in the digital economy.
            </p>
          </div>
        </div>
      </div>

      <div className="flex row flex-col md:flex-row">
        <div className="flex my-4 md:mr-8 md:mb-0 md:w-1/2">
          <img
            src="https://images.squarespace-cdn.com/content/65f5178b7e5b446365b2d70a/0e1e7924-1981-49cc-89fa-73f5628f7890/6049046d97a5fe05f83d64ebfe1b7a4.jpg"
            alt="business"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 md:text-end">
          <h1>Our Business</h1>
          <p>
            Our integrated platform seamlessly connects businesses with a vast
            network of broadcasters and influencers, unlocking new avenues for
            product promotion, customer acquisition, and sustained growth. With
            industry-leading solutions and a relentless pursuit of innovation,
            we enable our partners to navigate the livestreaming ecommerce world
            with confidence and succeed in captivating today's digital-savvy
            consumers.
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
      <div className="bg-slate-400 flex w-full justify-center">
        <div className="row text-center">
          <h1 className="text-white font-semibold mb-8">
            Collaborating Livestreaming Platforms
          </h1>
          <div className="flex w-full flex-col 4xl:flex-row justify-center 4xl:justify-evenly items-center">
            <div className="flex w-full flex-col md:flex-row 4xl:w-1/2 justify-evenly items-center">
              <div className="flex w-full justify-evenly items-center">
                <img
                  src="https://images.squarespace-cdn.com/content/65f5178b7e5b446365b2d70a/fab2712b-12d3-4c03-9675-989518ecc72a/%E5%B0%8F%E7%BA%A2%E4%B9%A6.png"
                  alt="小红书"
                />
                <img
                  src="https://images.squarespace-cdn.com/content/65f5178b7e5b446365b2d70a/6539c476-f692-4534-b1e4-054df8be1a7f/%E5%BF%AB%E6%89%8B.png"
                  alt="快手"
                />
              </div>
              <div className="flex w-full justify-evenly items-center">
                <img
                  src="https://images.squarespace-cdn.com/content/65f5178b7e5b446365b2d70a/a23b9ad8-d18a-46a9-8ae8-90e8e92dc2f8/%E4%BA%AC%E4%B8%9C.png"
                  alt="京东"
                />
                <img
                  src="https://images.squarespace-cdn.com/content/65f5178b7e5b446365b2d70a/a2a95e4e-12f2-46bc-aab1-7d6e7fdd2028/%E4%BB%8A%E6%97%A5%E5%A4%B4%E6%9D%A1.png"
                  alt="头条"
                />
              </div>
            </div>
            <div className="flex w-full flex-col md:flex-row 4xl:w-1/2 justify-evenly items-center">
              <div className="flex w-full justify-evenly items-center">
                <img
                  src="https://images.squarespace-cdn.com/content/65f5178b7e5b446365b2d70a/798d4e5a-3400-4c41-b636-ab94eeb749e3/TikTok.png"
                  alt="TikTok"
                />
                <img
                  src="https://images.squarespace-cdn.com/content/65f5178b7e5b446365b2d70a/fbe24af6-4372-4279-8518-fa2f9f9543a3/%E6%8A%96%E9%9F%B3.png"
                  alt="抖音"
                />
              </div>
              <div className="flex w-full justify-evenly items-center">
                <img
                  src="https://images.squarespace-cdn.com/content/65f5178b7e5b446365b2d70a/114f7b2e-77fa-4fe3-9717-bd0f83c56570/%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9.png"
                  alt="哔哩哔哩"
                />
                <img
                  src="https://images.squarespace-cdn.com/content/65f5178b7e5b446365b2d70a/d1438c86-ca12-4dc0-a6b0-dd54bf116fa7/%E8%A5%BF%E7%93%9C%E8%A7%86%E9%A2%91.png"
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
