import React from 'react';
import { Button, Typography, Image } from 'antd';
import {
  DownloadOutlined,
  DoubleRightOutlined,
  AppleOutlined,
  AndroidOutlined
} from '@ant-design/icons';

export default function AehlBtcInfo() {
  return (
    <div>
      {/* Bigger Grid */}
      <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
        <div>
          <div className='flex justify-center px-5 pb-5'>
            <img
              className="object-cover rounded-3xl w-3/4"
              src="https://res.cloudinary.com/aehl/image/upload/v1731381615/BTC_Logo_t2fjw6.jpg"
              alt="App Logo"
            />
          </div>
          <div className='grid grid-cols-2 gap-2'>
            <div className='flex justify-center'>
              <img
                className='h-auto max-w-full object-contain aspect-[4/1]'
                src="https://res.cloudinary.com/aehl/image/upload/v1732030422/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917_e8bmns.svg"
                alt="Download on the App Store"
              />
            </div>
            <div className='flex justify-center'>
              <img
                className='h-auto max-w-full object-contain aspect-[4/1]'
                src="https://res.cloudinary.com/aehl/image/upload/v1732031089/GetItOnGooglePlay_Badge_Web_color_English_antwwp.png"
                alt="Download on the App Store"
              />
            </div>
          </div>
        </div>

        <div className='p-3 md:col-span-2 col-span-1'>
          <p className='font-bold text-lg'>
            Welcome to <span className='text-pink-500'>BtcShort</span>, the ultimate short drama video platform designed to bring you closer to the world of captivating stories. Whether you’re a drama lover or an aspiring creator, we’re on a mission to become the world’s leading video platform for thrilling, immersive short dramas.
          </p>
          <div className='flex justify-end'>
            <div className='p-2'>
              <Button type="primary" shape="round" icon={<DoubleRightOutlined />} size="middle" iconPosition='end' className='capitalize'>
                learn more
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
