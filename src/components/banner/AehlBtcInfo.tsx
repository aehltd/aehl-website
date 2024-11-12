import React from 'react';
import { Button, Typography, Image } from 'antd';
import {
  DownloadOutlined,
  DoubleRightOutlined
} from '@ant-design/icons';

export default function AehlBtcInfo() {
  return (
    <div>
      {/* Bigger Grid */}
      <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
        <div>
          <div className='flex justify-center px-5'>
            <img
              className="object-cover rounded-3xl"
              src="https://res.cloudinary.com/aehl/image/upload/v1731381615/BTC_Logo_t2fjw6.jpg"
              alt="Picture of App"
            />
          </div>
        </div>
        <div className='p-3 md:col-span-2 col-span-1'>
          <p className='font-bold text-lg'>
            Welcome to <span className='text-pink-500'>BtcShort</span>, the ultimate short drama video platform designed to bring you closer to the world of captivating stories. Whether you’re a drama lover or an aspiring creator, we’re on a mission to become the world’s leading video platform for thrilling, immersive short dramas.
          </p>
        </div>
        <div>
          <div className='p-2'>
            <Button color="default" shape="round" icon={<DownloadOutlined />} size="large" className='capitalize w-full'>
              Download for ios
            </Button>
          </div>
          <div className='p-2'>
            <Button color="default" shape="round" icon={<DownloadOutlined />} size="large" className='capitalize w-full'>
              Download for Android
            </Button>
          </div>
        </div>
        <div className='flex md:col-span-2 justify-end'>
          <div className='p-2'>
            <Button type="primary" shape="round" icon={<DoubleRightOutlined />} size="large" iconPosition='end' className='capitalize'>
              learn more
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
