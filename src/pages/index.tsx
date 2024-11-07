import { Button } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";
import EnergyGauge from "@/components/EnergyGauge";
import RevenueGauge from "@/components/RevenueGauge";
import HomePageCarousel from "@/components/HomePageCarousel";

export default function Home() {
  const router = useRouter();

  return (
    <div id="container" className="container">
      <HomePageCarousel />

      <div className="flex w-full justify-center">
        <div id="mission-statement" className="row text-center">
          <h1 className="tracking-widest font-bold text-midnight">
            Mission Statement
          </h1>
          <h2 className="text-midnight2">
            “To provide exceptional value to our customers in growing and
            evolving business segments driven by our commitment, passion and
            world-class talent.”
          </h2>
        </div>
      </div>

      {/* <div className="flex w-full bg-slate-200 justify-center">
        <div id="aehl-us-info" className="flex row flex-col items-center space-y-4 md:flex-row md:justify-evenly md:items-start md:space-y-0">
          <EnergyGauge value={395}>
            <div className="flex w-56 justify-center mb-2 space-x-2">
              <span className="material-icons align-middle text-yellow-400 drop-shadow-sm">
                bolt
              </span>
              <span>Energy Today</span>
            </div>
          </EnergyGauge>
          <EnergyGauge value={2735}>
            <div className="flex w-56 justify-center mb-2 space-x-2">
              <span className="material-icons align-middle text-yellow-400 drop-shadow-sm">
                bolt
              </span>
              <span>Total Generated</span>
            </div>
          </EnergyGauge>
          <RevenueGauge value={1254543}/>
        </div>
      </div> */}

      <div className="bg-local flex flex-col w-full items-center pt-0 px-10">
        <div id="aehl-us">
          <div className="hidden md:block">
            <div className="grid grid-cols-2 w-full py-8 3xl:py-16 4xl:py-20">
              <div className="col-span-1 flex justify-center">
                <div className="halfrow pt-32">
                  <div className="flex flex-col p-8 bg-white shadow-2xl rounded-xl">
                    <h1 className="mb-4 text-midnight">A New Energy Model</h1>
                    <p>
                      With data centers based in Texas, we are an emerging
                      energy supply business that aims to provide an innovative,
                      low-cost solution to the rapidly growing needs of the AI
                      and cryptocurrency sectors.
                    </p>
                    <div className="mr-auto mt-4">
                      <Link href="/aehl-us/corporate-overview" passHref>
                        <Button
                          type="primary"
                          size="middle"
                          className="bg-sky text-midnight"
                        >
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <img
                  src="https://res.cloudinary.com/aehl/image/upload/v1724684787/Untitled_design_xpg7sk.jpg"
                  alt="kylin img"
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          <div className="relative md:hidden h-[80vh]">
            <img
              src="https://res.cloudinary.com/aehl/image/upload/v1724684787/Untitled_design_xpg7sk.jpg"
              alt="kylin img"
              className="m-16 -mr-24 w-full h-2/3 object-cover rounded-s-xl shadow-lg"
            />
            <div className="absolute bottom-0 flex flex-col p-8 m-8 -ml-16 pl-24 bg-white shadow-lg rounded-xl">
              <h1 className="mb-4 text-midnight">A New Energy Solution</h1>
              <p>
                We plan to service data centers based in Texas, we are an
                emerging energy supply business that aims to provide a low-cost
                solution to the rapidly growing needs of both AI and
                cryptocurrency sectors.
              </p>
              <div className="mr-auto mt-4">
                <Link href="/aehl-us/corporate-overview" passHref>
                  <Button
                    type="primary"
                    size="middle"
                    className="bg-sky text-midnight"
                  >
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
                  src="https://res.cloudinary.com/aehl/image/upload/v1724428459/image1_c9ca55.jpg"
                  alt="kylin img"
                  className="w-full h-full object-cover rounded-xl shadow-2xl"
                />
              </div>
              <div className="col-span-1 flex justify-center">
                <div className="halfrow flex flex-col p-8 bg-white shadow-lg rounded-xl mt-32">
                  <h1 className="mb-4">The Livestreaming Ecommerce Frontier</h1>
                  <p>
                    Operating in China as Kylin Cloud, we aim to provide a
                    one-stop solution in the rapidly growing field of
                    livestreaming ecommerce. With over 300 million RMB in annual
                    transaction volume, we are at the very forefront of this
                    revolution.
                  </p>
                  <div className="ml-auto mt-4">
                    <Link href="/aehl-kylin/business-overview" passHref>
                      <Button
                        type="primary"
                        size="middle"
                        className="bg-sky text-midnight"
                      >
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
              src="https://res.cloudinary.com/aehl/image/upload/v1724428459/image1_c9ca55.jpg"
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
                <Link href="/aehl-kylin/business-overview" passHref>
                  <Button
                    type="primary"
                    size="middle"
                    className="bg-sky text-midnight"
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
          <div className="flex-1 md:order-first order-last">
            <h1 className="mb-4 tracking-widest font-bold text-midnight">
              CEO Message
            </h1>
            <p className="text-midnight2">
              We primarily operate in two exciting business segments,
              livestreaming e-commerce and energy solutions. I believe that
              there is a prosperous future ahead for the development of
              innovative energy solutions. The boom in the AI industry as well
              as cryptocurrency mining has led to a gap in the power supply and
              we believe that we can develop a cost-effective structure to
              bridge this gap. In terms of livestreaming ecommerce, Kylin Cloud
              serves as a beacon of innovation. We&apos;re not just providing a
              service, we&apos;re creating an environment where smaller
              influencers and brands thrive, bringing a much needed
              democratization to this sphere. I am confident that we will
              redefine the landscape of both of these evolving landscapes
              thereby deliver significant value to our shareholders.
            </p>
          </div>
          {/* <div className="flex flex-col items-end justify-end">
            <img
              src="https://res.cloudinary.com/aehl/image/upload/v1724428444/weilai-zhang_drtijr.png"
              alt="ceo"
              className="md:w-56 w-25 mb-2 object-cover rounded-2xl drop-shadow-md"
            />
            <h2 className="tracking-wide text-midnight">
              Weilai &quot;Will&quot; Zhang
            </h2>
            <p className="text-midnight2">AEHL Chairman and CEO</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
