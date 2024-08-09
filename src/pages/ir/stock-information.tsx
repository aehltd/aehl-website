//import { AdvancedRealTimeChart, FundamentalData, MiniChart, } from "react-ts-tradingview-widgets";
import QMod from "@/components/QMod";
import QModFooter from "@/components/QModFooter";

export default function IRStockInfo() {
  // const params = {
  //   symbol: "AEHL",
  // };

  const detailedQuoteTabChartParams = {
    symbol: "AEHL",
    lang: "en",
    chcon: "off",
    chfrmon: "off",
    chton: "off",
    chdon: "off",
    chbgch: "ffffff",
    chbg: "ffffff",
    chgrd: "0a6283",
    chbdr: "0a6283",
    chxyc: "0a6283",
    chln: "0a6283",
    chfill: "0a6283",
    chfill2: "0a6283",
    chscale: "3m",
    chtype: "Mountain",
    chlowwh: 10,
    chfnts: 14,
    svg: true,
    showLogo: false,
    lowHigh: false,
  };

  return (
    <div id="container" className="container">
      <div className="flex w-full justify-center bg-slate-400">
        <div className="row">
          <div className="flex w-full flex-col md:flex-row items-center space-y-4 md:space-y-0">
            <div className="flex flex-col">
              <h1 className="text-white">Stock Information</h1>
              <p className="xsmalltext text-white">
                AEHL New Energy, Inc. Ordinary Shares (AEHL)
              </p>
            </div>
            {/* <div className="md:ml-auto">
              <MiniChart dateRange="3M" symbol="AEHL" />
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className="row">
        <QModComponent
          tool={"miniquotecharts"}
          params={JSON.stringify(params)}
          datatracked
        />
      </div> */}
      <div className="row">
        <QMod
          tool={"detailedquotetabchart"}
          params={JSON.stringify(detailedQuoteTabChartParams)}
          datatracked
        />
      </div>
      {/* <div className="row">
        <AdvancedRealTimeChart
          symbol="AEHL"
          details
          range="3M"
          width="100%"
          allow_symbol_change={false}
          hide_side_toolbar
          hide_top_toolbar
        />
      </div> */}
      <div
        className="bg-local flex flex-col w-full items-center"
        style={{
          backgroundImage:
            "url('https://www.aehlus.com/png/img12.f4ed389f.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="row">
          <QModFooter />
        </div>
      </div>
    </div>
  );
}
