import React from "react";
import { Divider } from "antd";
import Link from "next/link";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";

import IrLinks from "./footer/irLinks";
import AehlKylinLinks from "./footer/aehlKylinLinks";
import AehlUsLinks from "./footer/aehlUsLinks";

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: (
      <p className="text-midnight font-semibold tracking-wider">AEHL US</p>
    ),
    children: (
      <div className="px-8">
        <AehlUsLinks />
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <p className="text-midnight font-semibold tracking-wider">AEHL Kylin</p>
    ),
    children: (
      <div className="px-8">
        <AehlKylinLinks />
      </div>
    ),
  },
  {
    key: "3",
    label: (
      <p className="text-midnight font-semibold tracking-wider">Investor</p>
    ),
    children: (
      <div className="px-8">
        <IrLinks />
      </div>
    ),
  },
];

export default function Footer() {
  return (
    <div className="bg-gray-100 w-full flex items-center justify-center">
      <div className="flex flex-col row items-center">
        <div className="flex w-full justify-between items-center">
          <h2 className="font-bold tracking-widest">
            Antelope Enterprise Holdings Limited
          </h2>
          <Link href="/">
            <img
              src="https://res.cloudinary.com/aehl/image/upload/v1724428463/%E5%B0%8F%E9%BB%91%E8%89%B2.jpg_dsu0fh.png"
              alt="logo"
            />
          </Link>
        </div>
        <Divider className="my-2" />

        <div className="md:grid hidden grid-cols-3 gap-5 w-full">
          <div className="text-start px-5">
            <ul className="list-none">
              <li className="py-2">
                <h3 className="flex items-center font-semibold tracking-wide">AEHL US <span className="material-symbols-outlined p-1">
                  energy_savings_leaf
                </span></h3>
              </li>
              <li>
                <AehlUsLinks />
              </li>
              <li className="py-2">
                <h3 className="flex items-center font-semibold tracking-wide">AEHL Kylin<span className="material-symbols-outlined p-1">
                  cases
                </span></h3>
              </li>
              <li>
                <AehlKylinLinks />
              </li>
            </ul>
          </div>

          <div className="text-start px-5">
            <ul className="list-none">
              <li className="py-2">
                <h3 className="flex items-center font-semibold tracking-wide">Investor <span className="material-symbols-outlined p-1">
                  handshake
                </span></h3>
              </li>
              <li>
                <IrLinks />
              </li>
            </ul>
          </div>

          <div className="text-start py-2">
            <h3 className="flex items-center font-semibold tracking-wide">Contact Info <span className="material-symbols-outlined p-1">
              contact_page
            </span></h3>
            <div className="text-start">
              <div className="py-2">
                <p className="inline-block pr-2 text-midnight">Phone: </p>
                <p className="inline-block">+1 (838) 500 - 8888</p>
              </div>
              <div className="py-2 flex">
                <p className="pr-2 text-midnight">Office: </p>
                <p>
                  Suite 7540, The Empire State Building, 350 Fifth Ave, New
                  York, NY, 10118
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden w-full">
          <Collapse items={items} ghost />
          <div className="text-start py-2">
            <h3 className="font-semibold tracking-wide">Contact Info</h3>
            <div className="text-start">
              <div className="py-2">
                <p className="inline-block pr-2 text-midnight">Phone: </p>
                <p className="inline-block">+1 (838) 500 - 8888</p>
              </div>
              <div className="py-2 flex">
                <p className="pr-2 text-midnight">Office: </p>
                <p>
                  Suite 7540, The Empire State Building, 350 Fifth Ave, New
                  York, NY, 10118
                </p>
              </div>
            </div>
          </div>
        </div>

        <Divider className="my-2" />

        <div className="flex w-full justify-between space-x-16">
          <div className="text-start">
            <p className="text-xs">
              Copyright © 2024 AEHL. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
