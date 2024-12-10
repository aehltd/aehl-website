import React from 'react';

import BlackButton from "../BlackButton";

export default function HomePageInfo() {
    return (
        <div className='grid grid-cols-4 gap-8'>
            <div className='col-span-4 text-center py-5'>
                <h2 className='font-bold md:text-6xl text-4xl font-goldman'>Mission Statement</h2>
                <p className='font-sans text-lg'>“To provide exceptional value to our customers in growing and evolving business segments driven by our commitment, passion and world-class talent.”</p>
            </div>
            <div className='grid grid-cols-1 gap-0 md:col-span-2 col-span-4'>
                <h2 className='flex font-bold md:text-3xl text-2xl items-center pb-2'>A New Energy Model <span className="material-symbols-outlined md:text-2xl text-xl p-1 text-pumpkin-300">
                    electric_bolt
                </span></h2>
                <p className='px-4 md:p-0 p-4'>
                    With data centers based in Texas, we are an emerging
                    energy supply business that aims to provide an innovative,
                    low-cost solution to the rapidly growing needs of the AI
                    and cryptocurrency sectors.
                </p>
                <div className='flex justify-end'>
                    <BlackButton
                        text="Learn More"
                        icon="read_more"
                        url="/aehl-us/corporate-overview" />
                </div>
            </div>
            <div className='md:col-span-2 col-span-4'>
                <img
                    className='w-full rounded-lg'
                    src="https://res.cloudinary.com/aehl/image/upload/v1731948852/Homepage_Energy_lghdgb.png"
                    alt="Picture of Kylin"
                />
            </div>
            <div className='md:col-span-2 col-span-4 md:order-1 order-2'>
                <img
                    className='w-full rounded-lg'
                    src="https://res.cloudinary.com/aehl/image/upload/v1731942260/AEHL_Banner_tnuwei.png"
                    alt="Picture of Kylin"
                />
            </div>
            <div className='grid grid-cols-1 gap-0 md:col-span-2 col-span-4 md:order-2 order-1'>
                <h2 className='font-bold md:text-3xl text-2xl'>The Livestreaming </h2>
                <h2 className='flex items-center font-bold md:text-3xl text-2xl pb-2'>Ecommerce Frontier <span className="material-symbols-outlined md:text-2xl text-xl p-1 text-coral-red-500">
                    live_tv
                </span></h2>
                <p className='px-4 md:p-0 p-4'>
                    Operating in China as Kylin Cloud, we aim to provide a
                    one-stop solution in the rapidly growing field of
                    livestreaming ecommerce. With over 300 million RMB in annual
                    transaction volume, we are at the very forefront of this
                    revolution.
                </p>
                <div className='flex justify-end'>
                    <BlackButton
                        text="Learn More"
                        icon="read_more"
                        url="/aehl-kylin/business-overview" />
                </div>
            </div>
        </div>
    );
}