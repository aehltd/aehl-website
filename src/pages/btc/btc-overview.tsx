import BtcInfo from "../../components/btc/aehlBtcInfo"
import AehlBtcBanner from "@/components/banner/aehlBtcBanner";
import AehlBtcPromote from "@/components/btc/aehlBtcPromote";
import AehlBtcFeature from "@/components/btc/aehlBtcFeature";
import AehlBtcStatistic from "@/components/btc/aehlBtcStatistic";


export default function btcOverview() {
    return (
        <div id="container" className="container">
            <div className="xl:w-[120vh] w-full relative">
                <AehlBtcBanner />
            </div>
            <div className="bg-black xl:w-[120vh] w-full flex justify-center">
                <div className="row">
                    <AehlBtcPromote />
                </div>
            </div>
            <div className="row">
                <BtcInfo />
            </div>
            <div className="row">
                <AehlBtcStatistic />
            </div>
            <div className="row">
                <AehlBtcFeature />
            </div>
        </div>
    );
}
