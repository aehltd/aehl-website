import React from 'react';
import { Statistic } from "antd";

export default function aehlKylinStatistic() {
  return (
    <div className='grid md:grid-cols-3 grid-cols-1 gap-3 text-center'>
      <Statistic className='capitalize' title={
        <span className='flex items-center justify-center'>
          <span className="material-symbols-outlined p-1">
            location_city
          </span>Available in Cities
        </span>
      } value={600} suffix="+" />
      <Statistic className='capitalize' title={
        <span className='flex items-center justify-center'>
          <span className="material-symbols-outlined p-1">
            money_bag
          </span>Annual transaction volume (CNY)
        </span>
      } value={3000000} />
      <Statistic className='capitalize' title={
        <span className='flex items-center justify-center'>
          <span className="material-symbols-outlined p-1">
            add_business
          </span>Trusted by Major Brands
        </span>
      } value={120} />
    </div>
  );
}
