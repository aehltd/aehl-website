import { Card } from 'antd';

const { Meta } = Card;

export default function AehlBtcFeature() {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-10">
            <div>
                <Card
                    hoverable
                    cover={<img alt="example" src="https://res.cloudinary.com/aehl/image/upload/v1731381355/Banner7_elxdqw.png" />}
                >
                    <Meta title="Creative and Profit" description="But it’s not just about watching — it’s about creating, too. As a short film creator, this platform offers you the chance to turn your passion into a source of income. 
                    By showcasing your unique perspective and storytelling skills, you can connect with a global audience eager to discover fresh and original content. 
                    Whether you're an emerging filmmaker or an established creator, the platform provides tools and resources to support your artistic journey.
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
                    <Meta title="Real-time Hot Dramas updates" description="Stay ahead of the trends with our real-time Hot Dramas updates! Our platform keeps you in the loop, delivering the latest and most popular dramas as soon as they’re released. No more waiting or searching—every time you log in, you'll find fresh, trending episodes tailored to keep you entertained and engaged." />
                </Card>
            </div>
        </div>
    );
}