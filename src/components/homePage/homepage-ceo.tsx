import React, { useState } from 'react';
import { Button } from 'antd';

import {
    MessageTwoTone,
    CaretUpOutlined,
    CaretDownOutlined
} from '@ant-design/icons';

export default function HomePageCeo() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleClamp = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="grid grid-cols-4 gap-3">
            <h1 className="col-span-4 font-bold font-goldman text-4xl">
                <MessageTwoTone className="p-2" />CEO Message:
            </h1>
            <p className={`col-span-4 px-10 py-3 md:line-clamp-none ${isExpanded ? 'line-clamp-none' : 'line-clamp-5'}`}> We primarily operate in two exciting business segments,
                livestreaming e-commerce and energy solutions. I believe that
                there is a prosperous future ahead for the development of
                innovative energy solutions. The boom in the AI industry as well
                as cryptocurrency mining has led to a gap in the power supply and
                we believe that we can develop a cost-effective structure to
                bridge this gap. In terms of livestreaming ecommerce, Kylin Cloud
                serves as a beacon of innovation. We&apos;re not just providing a
                service, we&apos;re creating an environment where smaller
                influencers and brands thrive, bringing a much needed
                democratization to this sphere. I am confident that we will
                redefine the landscape of both of these evolving landscapes
                thereby deliver significant value to our shareholders.
            </p>
            <div className="col-span-4 flex justify-end md:hidden">
                <Button onClick={toggleClamp} type="text">
                    {isExpanded ? <>
                        Show Less <CaretUpOutlined />
                    </> : <>
                        Read More <CaretDownOutlined />
                    </>}
                </Button>
            </div>
            {/* <div>
                <img
                    src="https://res.cloudinary.com/aehl/image/upload/v1724428444/weilai-zhang_drtijr.png"
                    alt="ceo"
                    className="md:w-56 w-25 mb-2 object-cover rounded-2xl drop-shadow-md"
                />
                <h1>
                    Weilai &quot;Will&quot; Zhang
                </h1>
                <p>
                    AEHL Chairman and CEO
                </p>
            </div> */}
        </div>
    )
}