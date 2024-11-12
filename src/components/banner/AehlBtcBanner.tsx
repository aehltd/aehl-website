import React from 'react';
import { Button, Typography, Image } from 'antd';
import {
  DownloadOutlined
} from '@ant-design/icons';

export default function AehlBtcBanner() {
  return (
    <div>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-3 items-center'>
        <div>
          <img
            className="object-cover rounded-3xl"
            src="https://res.cloudinary.com/aehl/image/upload/v1731423719/Banner0-2_kf5u5f.png"
            alt="Picture of App"
          />
        </div>
        <div className='flex justify-center'>
          <img
            className="object-cover rounded-3xl"
            src="https://res.cloudinary.com/aehl/image/upload/v1731418622/Banner1-2_wkr212.png"
            alt="Picture of App"
          />
        </div>
      </div>
    </div>
  );
}
