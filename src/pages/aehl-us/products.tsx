import InfrastructureChain, {
  endToEndChain,
  traditionalChain,
} from "@/components/InfrastructureChain";

export default function USProducts() {
  return (
    <div id="container" className="container">
      <div
        className="bg-local flex w-full h-[40vh] justify-center"
        style={{
          backgroundImage:
            "url('https://www.aehlus.com/png/img4.50ec3eb4.png')",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="flex row flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
        <div className="md:w-1/2 ml-0">
          <img
            className="object-cover h-full w-full"
            src="https://www.aehlus.com/png/img7.6170bfe8.png"
            alt="bg"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="mb-2">Our Products</h1>
          <h2>AI Infrastructure Industry Chain</h2>
          <p>
            Our plan is to employ an end-to-end model to convert procured
            natural gas into electrical energy through gas generators. This
            energy is then transmitted directly to data centers for
            high-performance computing. Compared to conventional methods, this
            model eliminates intermediary steps like transmission to the power
            grid and processing by public utilities, resulting in lower losses
            and higher efficiency.
          </p>
        </div>
      </div>

      <div className="flex row flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        <InfrastructureChain chain={endToEndChain} />
        <InfrastructureChain chain={traditionalChain} />
      </div>
    </div>
  );
}
