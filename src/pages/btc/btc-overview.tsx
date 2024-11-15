import BtcInfo from "../../components/btc/AehlBtcInfo"
import AehlBtcBanner from "@/components/banner/AehlBtcBanner";
import AehlBtcStatistic from "@/components/btc/AehlBtcStatistic";
import AehlBtcFeature from "@/components/btc/AehlBtcFeature";


export default function btcOverview() {
    return (
        <div id="container" className="container">
            <div className="xl:w-[120vh] w-full relative">
                <AehlBtcBanner />
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
