import React, { useState } from "react";
import { Avatar, Card } from "antd";
import Link from "next/link";
import { Typography } from "antd";
import { Button } from 'antd';


const { Paragraph, Text } = Typography;
const { Meta } = Card;
const AtmInfoLink = "/aehl-us/ATM-info"

type BondEntry = {
  name: string;
  price: number;
  interest: number;
  RoR: number;
  GE: number;
  state: boolean;
};

const bonds: BondEntry[] = [
  {
    name: "ATM Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: true,
  },
  {
    name: "ATM Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: false,
  },
  {
    name: "ATM Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: true,
  },
  {
    name: "ATM Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: false,
  },
  {
    name: "ATM Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: false,
  },
  {
    name: "ATM Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: true,
  },
  {
    name: "ATM Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: true,
  },
  {
    name: "ATM Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: true,
  },
  {
    name: "ATM Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: false,
  },
  {
    name: "ATM Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: true,
  },
  {
    name: "ATM Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: true,
  },
  {
    name: "ATM Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: true,
  },
  {
    name: "ATM Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: false,
  },
  {
    name: "ATM Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: true,
  },
  {
    name: "ATM Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: true,
  },
  {
    name: "ATM Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: true,
  },
  {
    name: "ATM Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: true,
  },
  {
    name: "ATM Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: false,
  },
  {
    name: "ATM Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: true,
  },
  {
    name: "ATM Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: false,
  },
];



export default function ATM() {
  return (
    <div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
        {bonds.map((entry, index) => {
          return (
            <div key={index}>
              <Card
                hoverable = {entry.state}
                bordered={true}
                className={`shadow-xl ${
                  entry.state ? "opacity-100 hover:drop-shadow-2xl" : "opacity-30"
                }`}
                actions={[
                  entry.state ? (
                    <Link href={AtmInfoLink} passHref>
                      <p className="uppercase hover:text-darkBlue">Buy Now</p>
                    </Link>
                  ) : (
                    <p className="uppercase line-through">Sold Out</p>
                  ), // Conditional action
                ]}
              >
                <Meta
                  className="items-center"
                  title={
                    <div className="flex">
                      <h1 className="text-start text-2xl tracking-wide flex items-end">
                        {entry.name} <span className="p-1 text-base"> # {index + 1}</span>
                      </h1>
                    </div>
                  }
                  description={
                    <div className="flex-col">
                      <p className="text-start text-base tracking-widest font-bold py-2">
                        ${entry.price}
                      </p>
                      <p className="text-start text-base tracking-normal">
                        Annual Interest Rate:{" "}
                        <span className="underline tracking-widest font-bold">
                          {entry.interest}%
                        </span>
                      </p>
                      <p className="text-start text-base tracking-normal">
                        Generated Electricity:{" "}
                        <span className="underline tracking-widest font-bold">
                          {entry.GE} kwh (1.6%)
                        </span>
                      </p>
                      {entry.state ? (
                        <p className="text-start text-base tracking-normal text-green font-bold uppercase py-2">
                          Available
                        </p>
                      ) : (
                        <p className="text-start text-base tracking-normal text-ahel-red font-bold uppercase py-2">
                          sold
                        </p>
                      )}
                    </div>
                  }
                />
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
