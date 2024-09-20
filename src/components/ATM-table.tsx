import React, { useState } from "react";
import { Avatar, Card } from "antd";
import Link from "next/link";
import {Typography } from "antd";

const { Paragraph, Text } = Typography;
const { Meta } = Card;

type BoardEntry = {
  name: string;
  price: number;
  interest: number;
  RoR: number;
  GE: number;
  state: boolean;
};

const board: BoardEntry[] = [
  {
    name: "AETB Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: true,
  },
  {
    name: "AETB Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: false,
  },
  {
    name: "AETB Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: true,
  },
  {
    name: "AETB Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: false,
  },
  {
    name: "AETB Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: false,
  },
  {
    name: "AETB Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: true,
  },
  {
    name: "AETB Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: true,
  },
  {
    name: "AETB Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: true,
  },
  {
    name: "AETB Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: false,
  },
  {
    name: "AETB Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: true,
  },
  {
    name: "AETB Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: true,
  },
  {
    name: "AETB Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: true,
  },
  {
    name: "AETB Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: false,
  },
  {
    name: "AETB Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: true,
  },
  {
    name: "AETB Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: true,
  },
  {
    name: "AETB Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: true,
  },
  {
    name: "AETB Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: true,
  },
  {
    name: "AETB Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: false,
  },
  {
    name: "AETB Bond",
    price: 50000,
    interest: 12,
    RoR: 12,
    GE: 140.6,
    state: true,
  },
  {
    name: "AETB Bond",
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
      <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
        {board.map((entry, index) => {
          return (
            <div key={index}>
              <Card
                hoverable
                bordered={true}
                className={`shadow-xl ${
                  entry.state ? "opacity-100" : "opacity-30"
                }`}
                actions={[
                  entry.state ? (
                    <p className="uppercase">Buy Now</p>
                  ) : (
                    <p className="uppercase">Sold Out</p>
                  ), // Conditional action
                ]}
              >
                <Meta
                  className="items-center"
                  title={
                    <div className="flex">
                      <h1 className="text-start text-2xl tracking-wide">
                        {entry.name} #{index+1}
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
