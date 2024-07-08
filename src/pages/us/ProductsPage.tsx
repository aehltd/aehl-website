import React from "react";
import {InfrastructureChain, endToEndChain, traditionalChain} from "../../components/InfrastructureChain";

const USProductsPage = () => {
  return (
    <div className="flex flex-col items-center">
        <img className="block" src="https://www.aehlus.com/png/img4.50ec3eb4.png" alt="bg" />
      <div className="inline-flex space-x-8 w-3/4 m-8">
        <div className="w-1/2 ml-0">
        <img className="object-scale-down" src="https://www.aehlus.com/png/img7.6170bfe8.png" alt="bg" />
        </div>
        <div className="w-1/2">
        <h1 className="mb-2">Our Products</h1>
        <h2>AI Infrastructure Industry Chain</h2>
        <p className="text-sm">
          We employ an end-to-end model to convert procured natural gas into
          electrical energy through gas generators. This energy is then
          transmitted directly to data centers for high-performance computing.
          Compared to conventional methods, this model eliminates intermediary
          steps like transmission to the power grid and processing by public
          utilities, resulting in lower losses and higher efficiency.
        </p>
        </div>
      </div>

      <div className="flex w-3/4 m-8 space-x-4">
        <InfrastructureChain chain={endToEndChain}/>
        <InfrastructureChain chain={traditionalChain}/>
      </div>
    </div>
  );
};

export default USProductsPage;
