export default function USOverview() {
  return (
    <div id="container" className="container">
      <div className="relative flex w-full justify-center overflow-hidden text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/aehl/image/upload/v1724430440/img1.c6bbf8d2_jabqxm.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute inset-0 bg-slate-500 opacity-25"></div>
        <div className="relative z-10 flex flex-col w-full h-full items-center p-16 justify-center">
          <img
            src = "https://res.cloudinary.com/aehl/image/upload/v1724428464/%E5%A4%A7%E7%99%BD%E8%89%B2.jpg_voicgv.png"
            alt="Logo"
            className="w-full md:w-3/4 drop-shadow-2xl"
          />
          <h1 className="mt-16 text-white font-bold drop-shadow-2xl">
            Next Generation Infrastructure to Power{" "}
            <span className="text-green">AI</span>
          </h1>
        </div>
      </div>

      <div className="flex row flex-col">
        <h1 className="mb-4">Vision & Mission</h1>
        <div className="flex w-full flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/2 flex flex-col space-y-2">
            <div>
              <h3>Quick Reaction</h3>
              <p>
                Constructing a comprehensive industry-wide model covering the
                energy sector.
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

      <div className="bg-local flex w-full justify-center">
        <div className="row">
          <h1 className="mb-4">Our Strengths</h1>
          <div className="flex w-full flex-col md:flex-row space-y-4 md:space-y-0">
            <div className="flex md:mr-2 w-full md:w-1/2 space-x-4">
              <div className="relative">
                <img
                  className="object-cover w-full h-full"
                  src="https://res.cloudinary.com/aehl/image/upload/v1724430443/Strengths_1_hwjy8h.png"
                  alt="bg"
                />
                <div className="absolute inset-0 bg-custom-gradient"></div>
                <div className="absolute inset-5 flex flex-col items-center justify-end text-center">
                  <h3 className="text-white drop-shadow-lg font-semibold">
                    Consistent Service
                  </h3>
                  <p className="minitext sm:text-xs text-white drop-shadow-lg">
                    Energy operators companies generally do not switch tech
                    service providers easily
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  className="object-cover w-full h-full"
                  src="https://res.cloudinary.com/aehl/image/upload/v1724430438/Strengths-2.b90e5967_tczbv2.png"
                  alt="bg"
                />
                <div className="absolute inset-0 bg-custom-gradient"></div>
                <div className="absolute inset-5 flex flex-col items-center justify-end text-center">
                  <h3 className="text-white drop-shadow-lg font-semibold">
                    Stability
                  </h3>
                  <p className="minitext sm:text-xs text-white drop-shadow-lg">
                    We are aiming to provide consistent and stable power supply,
                    which is the core of technological infrastructure
                  </p>
                </div>
              </div>
            </div>
            <div className="flex md:ml-2 w-full md:w-1/2 space-x-4">
              <div className="relative">
                <img
                  className="object-cover w-full h-full"
                  src="https://res.cloudinary.com/aehl/image/upload/v1724430445/Strengths-3.9e5a1c57_o0u5yc.png"
                  alt="bg"
                />
                <div className="absolute inset-0 bg-custom-gradient"></div>
                <div className="absolute inset-5 flex flex-col items-center justify-end text-center">
                  <h3 className="text-white drop-shadow-lg font-semibold">
                    Dissemination of Value
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
                  src="https://res.cloudinary.com/aehl/image/upload/v1724430442/Strengths-4.d4502d8c_vi00ya.png"
                  alt="bg"
                />
                <div className="absolute inset-0 bg-custom-gradient"></div>
                <div className="absolute inset-5 flex flex-col items-center justify-end text-center">
                  <h3 className="text-white drop-shadow-lg font-semibold">
                    Maximizing Efficiency
                  </h3>
                  <p className="minitext sm:text-xs text-white drop-shadow-lg">
                    Maximizing efficiency in the digital infrastructure industry
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
          src="https://res.cloudinary.com/aehl/image/upload/v1724430439/img6.c41aed10_sjc3zh.png"
          alt="bg"
        />
        <div className="flex flex-col md:w-1/2 justify-center">
          <h1 className="mb-4">Team</h1>
          <p>
            Our team is rapidly building comprehensive experience in technology
            infrastructure.
          </p>
          <p>
            Our expertise includes data center construction, high-performance
            computing operations, and natural resource hedging.
          </p>
        </div>
      </div>
    </div>
  );
}
