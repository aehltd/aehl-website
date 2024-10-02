import Checkout from "@/components/bond/Checkout";

import React, { useState } from "react";
import Link from "next/link";
import { Image, Card, Button } from "antd";
import { ContactsOutlined } from "@ant-design/icons";

const { Meta } = Card;

type BondType = {
  name: string;
  investAmount: string;
  paid: string;
  interest: number;
  investReturn: number;
  state: boolean;
  image: string;
};

const bondType: BondType[] = [
  {
    name: "ATM No. 1",
    investAmount: "50000",
    interest: 12,
    paid: "Monthly Paydown Plan",
    investReturn: 6.5,
    state: false,
    image:
      "https://res.cloudinary.com/aehl/image/upload/v1727193215/ATM1_mtiouh.jpg",
  },
  {
    name: "ATM No. 2",
    investAmount: "50000",
    interest: 12,
    paid: "Flexible Pay Plan",
    investReturn: 9.5,
    state: true,
    image:
      "https://res.cloudinary.com/aehl/image/upload/v1727193215/ATM2_uu5yzc.jpg",
  },
  {
    name: "ATM No. 3",
    investAmount: "50000",
    interest: 12,
    paid: "Interest-Only Plan",
    investReturn: 12,
    state: false,
    image:
      "https://res.cloudinary.com/aehl/image/upload/v1727193215/ATM3_k33hw7.jpg",
  },
];

export default function USOverview() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [fadeIn, setFadeIn] = useState<boolean>(true);

  const handleCardClick = (index: number) => {
    setFadeIn(false); // Trigger fade-out before switching images
    setTimeout(() => {
      setSelectedIndex(index); // Update the selected index after a short delay
      setFadeIn(true); // Trigger fade-in for the new image
    }, 300); // 300ms delay to sync with the fade-out animation
  };

  return (
    <div id="container" className="container p-5">
      <h1 className="py-3 font-bold text-start md:text-4xl text-2xl">
        ATM: Antelope Texas Machine Bond
      </h1>
      <p>
        Explore the benefits of investing in ATM, a fund designed to provide
        stable returns while supporting the growth and stability of Texas&rsquo;s
        electricity infrastructure.
      </p>
      <div className="grid md:grid-cols-5 grid-cols-1 gap-6 py-5">
        <div className="md:col-span-4">
          <div
            className={`transition-opacity duration-300 ${
              fadeIn ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              className={"h-1/3 rounded-lg"}
              src={bondType[selectedIndex].image} // Display the image corresponding to the selected card
              alt="Revenue Forecast"
            />
          </div>
        </div>
        <div className="grid md:grid-rows-3 grid-cols-1 py-5">
          {bondType.map((entry, index) => {
            return (
              <div key={index} className="py-4 ">
                <Card
                  hoverable
                  bordered={true}
                  className={`shadow-none hover:shadow-ahel-red border-2 ${
                    selectedIndex === index
                      ? "border-darkBlue"
                      : "border-gray-300"
                  }`}
                  onClick={() => handleCardClick(index)}
                  size="small"
                >
                  <Meta
                    className="items-center"
                    title={
                      <div className="flex">
                        <h1 className="text-start text-2xl tracking-widest font-serif">
                          {entry.name}
                        </h1>
                      </div>
                    }
                    description={
                      <div className="flex-col">
                        {/* <p className="text-start text-base tracking-normal">
                          Investment Return:{" "}
                          <span className="underline tracking-widest font-bold text-xl text-green">
                            {entry.investReturn}%
                          </span>
                        </p> */}
                        <p className="text-start text-base tracking-normal underline capitalize underline-offset-2">
                          {entry.paid}
                        </p>
                        <p className="text-start text-base tracking-normal">
                          Annual Interest Rate:{" "}
                          <span className="tracking-widest font-bold text-xl text-green">
                            {entry.interest}%
                          </span>
                        </p>
                        <p className="text-start text-xs tracking-normal pt-2 capitalize">
                          Investment Period: up to 36 Month
                        </p>
                      </div>
                    }
                  />
                </Card>
              </div>
            );
          })}
        </div>
        <div className="md:col-span-5">
          <Checkout index={selectedIndex} />
        </div>
        <div className="md:col-span-2 md:col-start-4 md:text-end text-center">
          <p>If you are interested in this product, please contact us.</p>
        </div>
        <div className="md:col-start-5 pb-10">
          <Link href="/contact-us" passHref>
            <Button type="primary" className="w-full" size="large">
              <ContactsOutlined /> Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
