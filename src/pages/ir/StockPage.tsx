import React from "react";
import {
  AdvancedRealTimeChart,
  FundamentalData,
  MiniChart,
} from "react-ts-tradingview-widgets";

const IRStockPage = () => {
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
            <div className="md:ml-auto">
              <MiniChart dateRange="3M" symbol="AEHL" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <AdvancedRealTimeChart
          symbol="AEHL"
          details
          range="3M"
          width="100%"
          allow_symbol_change={false}
          hide_side_toolbar
          hide_top_toolbar
        />
      </div>
      <div
        className="bg-local flex w-full justify-center"
        style={{
          backgroundImage:
            "url('https://www.aehlus.com/png/img12.f4ed389f.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col row h-96">
          <FundamentalData symbol="AEHL" width="100%" height="100%" />
        </div>
      </div>
    </div>
  );
};

export default IRStockPage;
