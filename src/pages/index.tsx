import { Button } from "antd";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  return (
    <div id="container" className="container">
      <div className="relative flex w-full justify-center overflow-hidden text-center">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm"
          style={{
            backgroundImage: `url(https://images.squarespace-cdn.com/content/65f5178b7e5b446365b2d70a/340d967e-cf1f-4c4e-ab6d-b44c8737a53f/3D.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute inset-0 bg-slate-700 opacity-50"></div>
        <div className="relative z-10 flex flex-col w-full h-full items-center p-16 justify-center">
          <img
            src="https://images.squarespace-cdn.com/content/v1/65f5178b7e5b446365b2d70a/e55ba965-5b03-4ee7-80f7-da4419ea35ee/%E5%A4%A7%E7%99%BD%E8%89%B2.jpg"
            alt="logo"
            className="w-full md:w-3/4 drop-shadow-3xl"
          />
          <h2 className="mt-16 text-white font-semibold drop-shadow-lg">
            A Beacon of Innovation in an Evolving Energy and Technology
            Landscape
          </h2>
        </div>
      </div>

      <div className="flex w-full bg-slate-400 justify-center text-white">
        <div id="mission-statement" className="row text-center">
          <h1>Mission Statement</h1>
          <h2>
            “To provide exceptional value to our customers in growing and
            evolving business segments driven by our commitment, passion and
            world-class talent.”
          </h2>
        </div>
      </div>

      <div
        className="bg-local flex flex-col w-full items-center"
        style={{
          backgroundImage:
            "url('https://www.aehlus.com/png/img12.f4ed389f.png')",
          backgroundSize: "cover",
        }}
      >
        <div id="aehl-us">
          <div className="hidden md:block">
            <div className="grid grid-cols-2 w-full py-8 3xl:py-16 4xl:py-20">
              <div className="col-span-1 flex justify-end">
                <div className="halfrow pt-32">
                  <div className="flex flex-col p-8 bg-white shadow-lg rounded-xl">
                    <h1 className="mb-4">A New Energy Model</h1>
                    <p>
                      With data centers based in Texas, we are an emerging
                      energy supply business that aims to provide an innovative,
                      low-cost solution to the rapidly growing needs of the AI
                      and cryptocurrency sectors.
                    </p>
                    <div className="mr-auto mt-4">
                      <Link href="/aehl-us/overview" passHref>
                        <Button type="primary" size="middle">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661715583676-165c827b1cff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="kylin img"
                  className="w-full h-full object-cover rounded-s-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          <div className="relative md:hidden h-[80vh]">
            <img
              src="https://plus.unsplash.com/premium_photo-1661715583676-165c827b1cff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="kylin img"
              className="m-16 -mr-24 w-full h-2/3 object-cover rounded-s-xl shadow-lg"
            />
            <div className="absolute bottom-0 flex flex-col p-8 m-8 -ml-16 pl-24 bg-white shadow-lg rounded-xl">
              <h1 className="mb-4">A New Energy Solution</h1>
              <p>
                We plan to service data centers based in Texas, we are an
                emerging energy supply business that aims to provide a low-cost
                solution to the rapidly growing needs of both AI and
                cryptocurrency sectors.
              </p>
              <div className="mr-auto mt-4">
                <Link href="/aehl-us/overview" passHref>
                  <Button type="primary" size="middle">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div id="aehl-kylin">
          <div className="hidden md:block">
            <div className="grid grid-cols-2 w-full py-8 3xl:py-16 4xl:py-20">
              <div className="col-span-1">
                <img
                  src="https://images.squarespace-cdn.com/content/65f5178b7e5b446365b2d70a/449012af-b66b-4de0-b1a8-3d3e85b9196d/24990dd2bc453748013327e58d39340.jpg?content-type=image%2Fjpeg"
                  alt="kylin img"
                  className="w-full h-full object-cover rounded-e-xl shadow-lg"
                />
              </div>
              <div className="halfrow col-span-1 flex justify-end items-end mt-32">
                <div className="flex flex-col p-8 bg-white shadow-lg rounded-xl">
                  <h1 className="mb-4">The Livestreaming Ecommerce Frontier</h1>
                  <p>
                    Operating in China as Kylin Cloud, we aim to provide a
                    one-stop solution in the rapidly growing field of
                    livestreaming ecommerce. With over 300 million RMB in annual
                    transaction volume, we are at the very forefront of this
                    revolution.
                  </p>
                  <div className="ml-auto mt-4">
                    <Link href="/aehl-kylin/overview" passHref>
                      <Button type="primary" size="middle">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative md:hidden h-[80vh]">
            <img
              src="https://images.squarespace-cdn.com/content/65f5178b7e5b446365b2d70a/449012af-b66b-4de0-b1a8-3d3e85b9196d/24990dd2bc453748013327e58d39340.jpg?content-type=image%2Fjpeg"
              alt="kylin img"
              className="m-16 -ml-24 w-full h-2/3 object-cover rounded-e-xl shadow-lg"
            />
            <div className="absolute bottom-0 flex flex-col p-8 m-8 -mr-16 pr-24 bg-white shadow-lg rounded-xl">
              <h1 className="mb-4">The Livestreaming Ecommerce Frontier</h1>
              <p>
                Operating in China as Kylin Cloud, we aim to provide a one-stop
                solution in the rapidly growing field of livestreaming
                ecommerce. With over 300 million RMB in annual transaction
                volume, we are at the very forefront of this revolution.
              </p>
              <div className="ml-auto mt-4">
                <Link href="/aehl-kylin/overview" passHref>
                  <Button
                    type="primary"
                    size="middle"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="ceo-message" className="row">
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 ">
          <div className="flex-1">
            <h1 className="mb-4">CEO Message</h1>
            <p className="text-slate-600">
              We primarily operate in two exciting business segments,
              livestreaming e-commerce and energy solutions. I believe that
              there is a prosperous future ahead for the development of
              innovative energy solutions. The boom in the AI industry as well
              as cryptocurrency mining has led to a gap in the power supply and
              we believe that we can develop a cost-effective structure to
              bridge this gap. In terms of livestreaming ecommerce, Kylin Cloud
              serves as a beacon of innovation. We're not just providing a
              service, we're creating an environment where smaller influencers
              and brands thrive, bringing a much needed democratization to this
              sphere. I am confident that we will redefine the landscape of both
              of these evolving landscapes thereby deliver significant value to
              our shareholders.
            </p>
          </div>
          <div className="flex flex-col items-end justify-end">
            <img
              src="https://images.squarespace-cdn.com/content/v1/65f5178b7e5b446365b2d70a/078ea913-4f11-49ae-a1fa-980bc7ae2081/weilai-zhang.png"
              alt="ceo"
              className="w-56 mb-8 object-cover rounded-md drop-shadow-md"
            />
            <h2>Weilai "Will" Zhang</h2>
            <p>AEHL Chairman and CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
}
