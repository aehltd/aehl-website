import BtcInfo from "../../components/btc/AehlBtcInfo"
// import AehlBtcBanner from "../../components/banner/AehlBtcBanner";
import AehlBtcPromote from "../../components/btc/AehlBtcPromote";
import AehlBtcFeature from "../../components/btc/AehlBtcFeature";
// import AehlBtcStatistic from "../../components/btc/AehlBtcStatistic";


export default function btcOverview() {
    return (
        <div id="container" className="container">
            <div className="relative xl:w-[120vh] w-full">
                <div className="bg-black w-full">
                    <AehlBtcPromote />
                </div>
            </div>

            <div className="row">
                <BtcInfo />
            </div>
            {/* <div className="row">
                <AehlBtcStatistic />
            </div> */}
            <div className="row">
                <AehlBtcFeature />
            </div>
        </div>
    );
}
