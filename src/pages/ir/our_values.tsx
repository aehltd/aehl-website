import AehlInvestorBanner from "../../components/banner/AehlInvestorBanner";

export default function IROverview() {
  return (
    <div id="container" className="container">
      <div className="xl:w-[120vh] w-full pb-10">
        <AehlInvestorBanner />
      </div>

      <div className="w-full">
        <p className="text-xxs text-end px-3">
          Designed by{" "}
          <a
            className="text-xxs"
            href="https://www.freepik.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Freepik
          </a>
        </p>
      </div>

      <div className="row space-y-4">
        <h4 className="text-gray-950 underline decoration-2 decoration-sky underline-offset-4 text-xl">
          Antelope Enterprise Holding Limited (“Antelope Enterprise”) primarily
          consists of two business segments, an energy supply business based in
          the United States and a livestreaming ecommerce business based in
          China.
        </h4>

        <div>
          <h2 className="font-bold tracking-wide py-3">
            Energy Supply Business - AEHL US
          </h2>
          <p className="py-1">
            We aim to launch an energy supply business through AEHL US, formerly
            known as Million Star US Inc. AEHL US has taken preliminary steps in
            developing this business including engaging a broker to source
            natural gas from natural gas provider in Texas and the procurement
            of electricity generators.
          </p>
          <p className="py-1">
            AEHL US plans to supply power to a data center in Midland, Texas.
            This energy supply business began operation in the third quarter of
            2024. Further, AEHL US also plans to generate revenue by securing
            hosting sites for cryptocurrency mining operators as it leverages
            anticipated cost-effective electricity costs.
          </p>
        </div>

        <div>
          <h2 className="font-bold tracking-wide py-3">
            Livestreaming Ecommerce Business - AEHL Kylin Cloud
          </h2>
          <p className="py-1">
            Our livestreaming ecommerce business is operated in China through
            our 51% subsidiary, Hainan Kylin and provides a one-stop solution
            for our customers to adopt the emerging sales channel of
            livestreaming ecommerce. We believe that livestreaming ecommerce is
            an important growth engine for consumer good brands as it leverages
            the content of livestreaming to boost sales.
          </p>
          <p className="py-1">
            Our customers usually include consumer goods brands, merchants, and
            small-scale ecommerce platforms. We grow and train our hosts and
            influencers to provide engaging content to livestream who then
            promote our customers’ products on various livestreaming platforms.
          </p>
        </div>
      </div>
    </div>
  );
}
