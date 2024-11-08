import React from 'react';
import { Button, Typography, Image } from 'antd';
import {
  DownloadOutlined
} from '@ant-design/icons';

export default function AehlBtcBanner() {
  return (
    <div>
      <div className="text-center">
        <h1 className='font-bold py-5'>BTC Universal Media USA Inc.</h1>
      </div>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
        <div>
          <div className='flex justify-center'>
            <Image
              width={300}
              src="https://aroundsketch.github.io/Apple-App-Icons/App-Icon/Apple/Safari/@SVG.svg"
            />
          </div>
          <div className='p-2'>
            <Button type="primary" shape="round" icon={<DownloadOutlined />} size="large" className='capitalize w-full'>
              learn more
            </Button>
          </div>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-4 p-2'>
            <div className='flex md:justify-normal justify-center'>
              <Button color="default" shape="round" icon={<DownloadOutlined />} size="large" className='capitalize w-full'>
                Download for ios
              </Button>
            </div>
            <div className='flex md:justify-normal justify-center'>
              <Button color="default" shape="round" icon={<DownloadOutlined />} size="large" className='capitalize w-full'>
                Download for Android
              </Button>
            </div>

          </div>
        </div>
        <div>
          <Typography.Title level={5} className='text-balance'>
            Certainly! Here’s an introduction for the EcoTrack app, tailored to resonate with eco-conscious consumers:
          </Typography.Title>
          <Typography.Paragraph>
            EcoTrack - Your Personal Guide to Sustainable Shopping

            Welcome to EcoTrack, the smart shopping habit tracker and eco-friendly advisor designed to help you make sustainable choices effortlessly. Whether you’re shopping for everyday essentials or exploring new products, EcoTrack empowers you to build eco-friendly habits while aligning with your values.

            Through user-friendly insights and tailored suggestions, EcoTrack evaluates the sustainability of your purchases and offers alternatives to reduce your environmental impact. Track your shopping patterns, set personalized goals, and receive actionable recommendations that make conscious consumerism simple and achievable.

            EcoTrack isn’t just about keeping tabs on spending; it’s a commitment to smarter choices for a healthier planet. Join a community dedicated to mindful consumption and make every purchase count with EcoTrack.

          </Typography.Paragraph>
        </div>

      </div>
    </div>
  );
}
