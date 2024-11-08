import BtcBanner from "../../components/banner/AehlBtcBanner"
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
            <div className="row">
                <BtcBanner />
            </div>
            {/* <div className="bg-midnight2"> */}
            <div className="row">
                <div className="grid grid-cols-4">
                    <div>
                        <h3>Statistic Info:</h3>
                    </div>
                    <div className='col-span-3 grid grid-cols-3 gap-4'>
                        <Statistic title="Active Users" value={112893} />
                        <Statistic title="Monthly Active Users" value={112893} />
                        <Statistic title="Video Play Time (Mins)" value={2000} />
                        <Statistic title="Ads Revenue (USD)" value={999999} />
                    </div>
                </div>
            </div>
            {/* </div> */}

            <div className="row">
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="App Features | Detailed Overview" description="Explore the unique features and functionalities of our app that enhance user experience and productivity." />
                        </Card>
                    </div>
                    <div>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="App Features | Detailed Overview" description="Explore the unique features and functionalities of our app that enhance user experience and productivity." />
                        </Card>
                    </div>
                    <div>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="App Features | Detailed Overview" description="Explore the unique features and functionalities of our app that enhance user experience and productivity." />
                        </Card>
                    </div>
                </div>
            </div>

        </div>
    );
}
