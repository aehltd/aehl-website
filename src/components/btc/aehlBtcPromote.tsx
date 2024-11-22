import React from 'react';
import { Carousel, Card } from 'antd';

import AehlBtcBanner from "@/components/banner/aehlBtcBanner";

// 
const videoInfo = [
    {
        title: "btcShort video image 1",
        imageSrc: "https://res.cloudinary.com/aehl/image/upload/v1732293501/2_efdt2j.png"
    },
    {
        title: "btcShort video image 2",
        imageSrc: "https://res.cloudinary.com/aehl/image/upload/v1732293501/3_ojin7l.png"
    },
    {
        title: "btcShort video image 3",
        imageSrc: "https://res.cloudinary.com/aehl/image/upload/v1732293501/4_wv2cq9.png"
    },
    {
        title: "btcShort video image 4",
        imageSrc: "https://res.cloudinary.com/aehl/image/upload/v1732293501/5_uetxi9.png"
    },
    {
        title: "btcShort video image 5",
        imageSrc: "https://res.cloudinary.com/aehl/image/upload/v1732293501/6_cccyas.png"
    },
    {
        title: "btcShort video image 6",
        imageSrc: "https://res.cloudinary.com/aehl/image/upload/v1732293501/7_pfyr2z.png"
    },
    {
        title: "btcShort video image 7",
        imageSrc: "https://res.cloudinary.com/aehl/image/upload/v1732293502/8_vhvr7j.png"
    },
    {
        title: "btcShort video image 8",
        imageSrc: "https://res.cloudinary.com/aehl/image/upload/v1732293502/9_rgpyry.png"
    },
    {
        title: "btcShort video image 9",
        imageSrc: "https://res.cloudinary.com/aehl/image/upload/v1732293502/10_jedimm.png"
    },
    {
        title: "btcShort video image 10",
        imageSrc: "https://res.cloudinary.com/aehl/image/upload/v1732293502/11_ktqgpt.png"
    },
    {
        title: "btcShort video image 11",
        imageSrc: "https://res.cloudinary.com/aehl/image/upload/v1732293961/12_xxdgwd.png"
    },
    {
        title: "btcShort video image 12",
        imageSrc: "https://res.cloudinary.com/aehl/image/upload/v1732293961/13_y0n85v.png"
    }
];

export default function AehlBtcPromote() {
    return (
        <div className="">
        <Carousel autoplay infinite={true} autoplaySpeed={1350} effect='scrollx'>

            {/* templete */}
            {/* <div className='flex p-5'>
                <div className='grid grid-cols-2'>
                    {videoInfo.slice(0, 2).map((videoInfo, index) => (
                        <div key={index} className="flex justify-center pb-8">
                            <img className='w-4/5' alt={videoInfo.title} src={videoInfo.imageSrc} />
                        </div>
                    ))}
                </div>
            </div> */}

            {/* Wiht the background and carousel on the right */}
            {/* {[...Array(6)].map((_, i) => (
                <div key={i} className='flex justify-center'>
                    <div className='grid grid-cols-2'>
                        {videoInfo.slice(i * 2, i * 2 + 2).map((video, index) => (
                            <div key={index} className="flex justify-center pb-8">
                                <img className='w-4/5' alt={video.title} src={video.imageSrc} />
                            </div>
                        ))}
                    </div>
                </div>
            ))} */}

            <div>
                <AehlBtcBanner />
            </div>

            {[...Array(6)].map((_, i) => (
                <div key={i} className='flex flex-col justify-between items-center h-full'>
                    <div className='grid grid-cols-2'>
                        {videoInfo.slice(i * 2, i * 2 + 2).map((video, index) => (
                            <div key={index} className="flex justify-center md:pt-5 pt-2">
                                <img className='w-4/5' alt={video.title} src={video.imageSrc} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {/* {[...Array(6)].map((_, i) => (
                <div key={i} className='flex justify-center'>
                    <div className='grid grid-cols-1'>
                        {videoInfo.slice(i, i+1).map((video, index) => (
                            <div key={index} className="flex justify-center pb-8">
                                <img className='w-3/4' alt={video.title} src={video.imageSrc} />
                            </div>
                        ))}
                    </div>
                </div>
            ))} */}

        </Carousel>
        </div>
    );
}