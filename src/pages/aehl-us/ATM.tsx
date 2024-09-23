import ATM_table from "../../components/bond/ATM-table";
import ExpectElectricity from "../../components/bond/Expect-Electricity";
import { Divider } from "antd";

export default function USOverview() {
  return (
    <div id="container" className="container p-3">
      <h1 className="py-3 font-bold">ATM: Antelope Texas Machine Bond Bond</h1>
      <p>
        Explore the benefits of investing in ATM, a fund designed to provide
        stable returns while supporting the growth and stability of Texas's
        electricity infrastructure.
      </p>
      <Divider />
      <h2 className="text-xl">
        Expected Electricity Generation & Investment Opportunitites
      </h2>
      <div className="w-1/2 py-4">
        <ExpectElectricity />
      </div>
      <Divider />
      <div className="flex py-2 justify-between">
        <h2 className="font-bold text-3xl pr-5">Currently Available ATM Bonds</h2>
        <h2 className="font-bold text-3xl">
          <span className="font-bold text-green">13</span>/20
        </h2>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 pt-5">
        <h3 className="text-2xl">
          Principal Value:{" "}
          <span className="font-bold underline tracking-wide">$50,000</span>
        </h3>
        <h3 className="text-2xl">
          Annual Inteerest Rate:{" "}
          <span className="font-bold underline tracking-wide">12%</span>
        </h3>
        <h3 className="text-2xl">
          Backed by Texas Electricity:{" "}
          <span className="font-bold underline tracking-wide">9 MW</span>
        </h3>
      </div>

      <p className="py-3">
        Invest in Effective Energy, Reap the Rewards. See our available $50,000
        investment blocks with 12% interest rate.
      </p>
      <div className="pb-10">
        <ATM_table />
      </div>
    </div>
  );
}