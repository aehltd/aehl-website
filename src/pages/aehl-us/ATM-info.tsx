import Checkout from "@/components/bond/Checkout";

import React, { useState } from "react";
import Link from "next/link";
import { Image, Card, Button } from "antd";
import { ContactsOutlined } from "@ant-design/icons";

const { Meta } = Card;

type BondType = {
  name: string;
  investAmount: string;
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
    investReturn: 6.5,
    state: false,
    image:
      "https://res.cloudinary.com/aehl/image/upload/v1727119332/ATM1_vyyvie.jpg",
  },
  {
    name: "ATM No. 2",
    investAmount: "50000",
    interest: 12,
    investReturn: 9.5,
    state: true,
    image:
      "https://res.cloudinary.com/aehl/image/upload/v1727119333/ATM2_ldf3pa.jpg",
  },
  {
    name: "ATM No. 3",
    investAmount: "50000",
    interest: 12,
    investReturn: 12,
    state: false,
    image:
      "https://res.cloudinary.com/aehl/image/upload/v1727119333/ATM3_mnltg1.jpg",
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
      <h1 className="py-3 font-bold text-start">
        ATM: Antelope Texas Machine Bond
      </h1>
      <p>
        Explore the benefits of investing in ATM, a fund designed to provide
        stable returns while supporting the growth and stability of Texas's
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
              // width={200}
              className={"h-1/3 rounded-lg"}
              src={bondType[selectedIndex].image} // Display the image corresponding to the selected card
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
                        <p className="text-start text-base tracking-normal">
                          Investment Return:{" "}
                          <span className="underline tracking-widest font-bold text-xl text-green">
                            {entry.investReturn}%
                          </span>
                        </p>
                        <p className="text-start text-base tracking-normal">
                          Annual Interest Rate:{" "}
                          <span className="underline tracking-widest font-bold text-xl text-green">
                            {entry.interest}%
                          </span>
                        </p>
                        <p className="text-start text-xs tracking-normal pt-2">
                          Investment Period: 12 Month
                        </p>
                      </div>
                    }
                  />
                </Card>
              </div>
            );
          })}
        </div>
        <div className="md:col-span-4">
          <Checkout index={selectedIndex} />
        </div>
        <div className="md:col-span-4 col-start-4 text-end">
          <p>If you are interested in this product, please contact us.</p>
        </div>
        <div className="h-3">
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
