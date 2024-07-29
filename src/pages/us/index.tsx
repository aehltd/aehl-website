import React from "react";

const USOverview = () => {
  return (
    <div id="container" className="container">
      <div className="relative flex w-full md:h-[80vh] justify-center overflow-hidden text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://www.aehlus.com/png/img1.c6bbf8d2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute inset-0 bg-slate-500 opacity-25"></div>
        <div className="relative z-10 flex flex-col w-full h-full items-center p-16 justify-center">
          <img
            src="https://images.squarespace-cdn.com/content/v1/65f5178b7e5b446365b2d70a/e55ba965-5b03-4ee7-80f7-da4419ea35ee/%E5%A4%A7%E7%99%BD%E8%89%B2.jpg"
            alt="Logo"
            className="w-full md:w-3/4 drop-shadow-2xl"
          />
          <h1 className="mt-16 text-white font-bold drop-shadow-2xl">
            Next Generation Infrastructure to Power{" "}
            <span className="text-green-500">AI</span>
          </h1>
        </div>
      </div>

      <div className="flex row flex-col">
        <h1 className="">Vision & Mission</h1>
        <div className="flex w-full flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/2 flex flex-col space-y-2">
            <div>
              <h3>Quick Reaction</h3>
              <p>
                Constructing a comprehensive industry-wide model for the energy
                sector.
              </p>
            </div>
            <div>
              <h3>Adapt to Changes</h3>
              <p>
                Resolving conflicts among various stakeholders in the supply
                chain.
              </p>
            </div>
            <div>
              <h3>Act Immediately</h3>
              <p>
                Rapidly building infrastructure to address the issue of power
                shortages
              </p>
            </div>
            <div>
              <h3>Results Driven</h3>
              <p>
                Secure barriers utilizing technology infrastructure with
                significant cost competitive advantages
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center my-8 md:ml-8 border w-full md:w-1/2 h-auto">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/_hrj5RUicgU?autoplay=1&mute=1&loop=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
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
          <h1 className="mb-4">Our Strengths</h1>
          <div className="flex w-full flex-col md:flex-row space-y-4 md:space-y-0">
            <div className="flex md:mr-2 w-full md:w-1/2 space-x-4">
              <div className="relative">
                <img
                  className="object-cover w-full h-full"
                  src="https://www.aehlus.com/png/Strengths-1.a36a67d4.png"
                  alt="bg"
                />
                <div className="absolute inset-0 bg-custom-gradient"></div>
                <div className="absolute inset-5 flex flex-col items-center justify-end text-center">
                  <h3 className="text-white drop-shadow-lg font-semibold">
                    Consistent Service
                  </h3>
                  <p className="minitext sm:text-xs text-white drop-shadow-lg">
                    Tech operators companies generally do not switch service
                    providers easily
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  className="object-cover w-full h-full"
                  src="https://www.aehlus.com/png/Strengths-2.b90e5967.png"
                  alt="bg"
                />
                <div className="absolute inset-0 bg-custom-gradient"></div>
                <div className="absolute inset-5 flex flex-col items-center justify-end text-center">
                  <h3 className="text-white drop-shadow-lg font-semibold">
                    Stability
                  </h3>
                  <p className="minitext sm:text-xs text-white drop-shadow-lg">
                    Consistent and stable power supply is the core of
                    technological infrastructure
                  </p>
                </div>
              </div>
            </div>
            <div className="flex md:ml-2 w-full md:w-1/2 space-x-4">
              <div className="relative">
                <img
                  className="object-cover w-full h-full"
                  src="https://www.aehlus.com/png/Strengths-3.9e5a1c57.png"
                  alt="bg"
                />
                <div className="absolute inset-0 bg-custom-gradient"></div>
                <div className="absolute inset-5 flex flex-col items-center justify-end text-center">
                  <h3 className="text-white drop-shadow-lg font-semibold">
                    Profit Share
                  </h3>
                  <p className="minitext sm:text-xs text-white drop-shadow-lg">
                    Balancing interests in energy, power generation,
                    transmission, infrastructure & server operations
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  className="object-cover w-full h-full"
                  src="https://www.aehlus.com/png/Strengths-4.d4502d8c.png"
                  alt="bg"
                />
                <div className="absolute inset-0 bg-custom-gradient"></div>
                <div className="absolute inset-5 flex flex-col items-center justify-end text-center">
                  <h3 className="text-white drop-shadow-lg font-semibold">
                    Maximizing Profit
                  </h3>
                  <p className="minitext sm:text-xs text-white drop-shadow-lg">
                    Maximizing value in the digital infrastructure industry
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex row flex-col space-y-8 md:flex-row md:justify-between md:space-x-16 md:space-y-0">
        <img
          className="md:w-1/2 object-cover h-full"
          src="https://www.aehlus.com/png/img6.c41aed10.png"
          alt="bg"
        />
        <div className="flex flex-col md:w-1/2 justify-center">
          <h2>Team</h2>
          <p>
            Our team has extensive experience in technology infrastructure, with
            members coming.
          </p>
          <p>
            Our expertise includes data center construction,high-performance
            computing operations, and natural resource hedging.
          </p>
        </div>
      </div>
    </div>
  );
};

export default USOverview;
