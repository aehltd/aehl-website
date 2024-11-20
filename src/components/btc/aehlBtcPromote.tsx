import React from 'react';
import { Carousel, Card } from 'antd';

const { Meta } = Card;

// 
const videoInfo = [
    {
        title: "Europe Street beat",
        description: "www.instagram.com",
        imageSrc: "https://res.cloudinary.com/aehl/image/upload/v1732117862/btcPromote1_r6z4rx.png"
    },
    {
        title: "Europe Street beat",
        description: "www.instagram.com",
        imageSrc: "https://res.cloudinary.com/aehl/image/upload/v1732117862/btcPromote1_r6z4rx.png"
    },
    {
        title: "Europe Street beat",
        description: "www.instagram.com",
        imageSrc: "https://res.cloudinary.com/aehl/image/upload/v1732117862/btcPromote1_r6z4rx.png"
    },
    {
        title: "Europe Street beat1",
        description: "www.instagram.com",
        imageSrc: "https://res.cloudinary.com/aehl/image/upload/v1732117862/btcPromote1_r6z4rx.png"
    },
    {
        title: "Europe Street beat1",
        description: "www.instagram.com",
        imageSrc: "https://res.cloudinary.com/aehl/image/upload/v1732117862/btcPromote1_r6z4rx.png"
    },
    {
        title: "Europe Street beat1",
        description: "www.instagram.com",
        imageSrc: "https://res.cloudinary.com/aehl/image/upload/v1732117862/btcPromote1_r6z4rx.png"
    }
];

export default function AehlBtcPromote() {
    return (
        <Carousel arrows autoplay infinite={true} autoplaySpeed={1250} effect='scrollx'>
            <div className='flex justify-center'>
                <div className='grid grid-cols-3'>
                    {videoInfo.slice(0, 3).map((videoInfo, index) => (
                        <div key={index} className="flex justify-center pb-8">
                            <img className='w-4/5' alt={videoInfo.title} src={videoInfo.imageSrc}/>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='grid grid-cols-3'>
                    {videoInfo.slice(3, 6).map((videoInfo, index) => (
                        <div key={index} className="flex justify-center pb-8">
                            <img className='w-4/5' alt={videoInfo.title} src={videoInfo.imageSrc}/>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h3 >3</h3>
            </div>
            <div>
                <h3 >4</h3>
            </div>
        </Carousel>
    );
}