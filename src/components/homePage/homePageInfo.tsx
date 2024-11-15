import React from 'react';
import Link from "next/link";

import {
    AlertTwoTone
  } from '@ant-design/icons';

import { Button } from "antd";

export default function homePageInfo() {
    return (
        <div className='grid grid-cols-4 gap-5'>
            <div className='col-span-4 text-center'>
                <h2 className='font-bold font-sans md:text-6xl text-4xl'>Mission Statement</h2>
                <p className='font-sans text-lg'>“To provide exceptional value to our customers in growing and evolving business segments driven by our commitment, passion and world-class talent.”</p>
            </div>
            <div className='grid grid-cols-1 gap-0 md:col-span-2 col-span-4'>
                <h2 className='font-bold md:text-4xl text-2xl'>A New Energy Model <AlertTwoTone twoToneColor="#52c41a"/></h2>
                <p className='px-4'>
                    With data centers based in Texas, we are an emerging
                    energy supply business that aims to provide an innovative,
                    low-cost solution to the rapidly growing needs of the AI
                    and cryptocurrency sectors.
                </p>
                <div className='flex justify-end'>
                    <Link href="/aehl-us/corporate-overview" passHref>
                        <Button className='bg-gradient-to-r from-dodger-blue-700 to-dodger-blue-400 text-white px-4 py-2 rounded' variant="link">
                            Learn More
                        </Button>
                    </Link>
                </div>
            </div>
            <div className='md:col-span-2 col-span-4'>
                <img
                    className='w-full rounded-lg'
                    src="https://res.cloudinary.com/aehl/image/upload/v1724684787/Untitled_design_xpg7sk.jpg"
                    alt="Picture of AEHL US"
                />
            </div>
            <div className='md:col-span-2 col-span-4'>
                <img
                    className='w-full rounded-lg'
                    src="https://res.cloudinary.com/aehl/image/upload/v1724428459/image1_c9ca55.jpg"
                    alt="Picture of Kylin"
                />
            </div>
        </div>
    );
}