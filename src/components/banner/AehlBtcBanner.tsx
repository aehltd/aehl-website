import React from 'react';
import { Button, Typography, Image } from 'antd';
import {
  DownloadOutlined
} from '@ant-design/icons';

export default function AehlBtcBanner() {
  return (
    <div>
      <img
        className="w-full object-cover max-h-[75vh] sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-[70vh] xl:max-h-[75vh] object-top"
        src="https://res.cloudinary.com/aehl/image/upload/v1731511129/BTC-Banner_nxd0gp.png"
        alt="Picture of App"
      />
    </div>
  );
}
