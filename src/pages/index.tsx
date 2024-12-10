import { Button } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";

// Homepage elements
import HomePageCarousel from "@/components/HomePageCarousel";
import HomePageInfo from "@/components/homePage/homepage-info";
import HomePageCeo from "@/components/homePage/homepage-ceo";

import EnergyGauge from "@/components/EnergyGauge";
import RevenueGauge from "@/components/RevenueGauge";

export default function Home() {
  const router = useRouter();

  return (
    <div id="container" className="container">
      <HomePageCarousel />

      <div className="row">
        <HomePageInfo />
      </div>

      <div className="row">
        <HomePageCeo />
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
    </div>
  );
}
