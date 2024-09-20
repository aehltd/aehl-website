import AEHL_table from "../../components/ATM-table";
import { Divider } from "antd";

export default function USOverview() {
  return (
    <div id="container" className="container p-3">
      <h1 className="py-3 font-bold">AETB: AEHL US Electricity Texas Bond</h1>
      <p>
        Explore the benefits of investing in ATEB, a fund designed to provide
        stable returns while supporting the growth and stability of Texas's
        electricity infrastructure.
      </p>
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
      <Divider />
      <div className="flex py-3 justify-between">
        <h2 className="font-bold text-3xl pr-5">Available ATEB Bonds</h2>
        <h2 className="font-bold text-3xl"><span className="font-bold text-green">13</span>/20</h2>
      </div>
      <AEHL_table />
    </div>
  );
}
