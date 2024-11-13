import BtcInfo from "../../components/btc/AehlBtcInfo"
import AehlBtcBanner from "@/components/banner/AehlBtcBanner";
import { Statistic, Card } from 'antd';

{/*
    1. Company Logo
    2. Slogan
    3. Full Company Name
    4. Statistics (Various data)
    5. Introduction
    6. App Screenshots
    */}


const { Meta } = Card;

export default function btcOverview() {
    return (
        <div id="container" className="container">
            <div className="flex w-full justify-center">
                <div className="row">
                    <AehlBtcBanner />
                </div>
            </div>
            <div className="row">
                <BtcInfo />
            </div>
            <div className="row">
                <div className="grid md:grid-cols-4 grid-cols-1">
                    <div className="flex justify-center">
                        <h3>Statistic Info:</h3>
                    </div>
                    <div className="flex justify-center">
                        <Statistic title="Active Users" value={112893} />
                    </div>
                    <div className="flex justify-center">
                        <Statistic title="Monthly Active Users" value={112893} />
                    </div>
                    <div className="flex justify-center">
                        <Statistic title="Video Play Time (Mins)" value={2000} />
                    </div>
                </div>
            </div>
            {/* </div> */}

            <div className="row">
                <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-10">
                    <div>
                        <Card
                            hoverable
                            // style={{ height: 240 }}
                            cover={<img alt="example" src="https://res.cloudinary.com/aehl/image/upload/v1731381355/Banner7_elxdqw.png" />}
                        >
                            <Meta title="Creative and Profit" description="But it’s not just about watching — it’s about creating, too. As a short film creator, you can make money while sharing your passion, with creative and profit opportunities designed to support your artistic journey.
" />
                        </Card>
                    </div>
                    <div>
                        <Card
                            hoverable
                            cover={<img alt="example" src="https://res.cloudinary.com/aehl/image/upload/v1731381355/Banner5_jkwlsb.png" />}
                        >
                            <Meta title="HD Streaming" description="Experience HD streaming that lets you dive into every moment in crystal-clear quality, with real-time updates on the hottest new dramas. With a constantly evolving library, there’s always something exciting to watch — a world of gripping plots, powerful performances, and unforgettable twists." />
                        </Card>
                    </div>
                    <div>
                        <Card
                            hoverable
                            cover={<img alt="example" src="https://res.cloudinary.com/aehl/image/upload/v1731381354/Banner4_ve4ejt.png" />}
                        >
                            <Meta title="App Features | Detailed Overview" description="Stay ahead of the trends with our real-time Hot Dramas updates! Our platform keeps you in the loop, delivering the latest and most popular dramas as soon as they’re released. No more waiting or searching—every time you log in, you'll find fresh, trending episodes tailored to keep you entertained and engaged." />
                        </Card>
                    </div>
                </div>
            </div>

        </div>
    );
}
