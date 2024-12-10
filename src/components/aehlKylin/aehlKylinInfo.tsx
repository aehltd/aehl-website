import React from "react"

import Link from 'next/link'

import { Button } from "antd";

export default function AehlKylinInfo() {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
            <div>
                <h1 className=" tracking-wider font-semibold text-4xl">
                    Our Vision
                    <span className="material-symbols-outlined p-1">
                        travel_explore
                    </span>
                </h1>
                <p>
                    Livestreaming ecommerce is becoming mainstream, revolutionizing how
                    businesses reach and engage customers. We seamlessly connect
                    businesses with live streaming talent, and consumers benefit as a
                    wide range of products become available at the fingertips and at
                    highly competitive prices. By leveraging our extensive network, we
                    aim to empower businesses and individuals to achieve their full
                    potential in the digital economy.
                </p>
            </div>
            <div>
                <iframe
                    title="Kylin Tour Video"
                    allow="fullscreen"
                    allowFullScreen
                    src="https://streamable.com/e/19gy9c?"
                    style={{ width: "100%", height: "100%" }}
                ></iframe>
            </div>
            <div>
                <img
                    src="https://res.cloudinary.com/aehl/image/upload/v1724428454/image2-2_fjgknc.jpg"
                    alt="business"
                    className="w-full h-full object-cover"
                />
            </div>
            <div>
                <h1 className="mb-4 tracking-wider font-semibold text-4xl">
                    Our Business
                    <span className="material-symbols-outlined p-1">
                        shop
                    </span>
                </h1>
                <p>
                    Our integrated platform seamlessly connects businesses with a vast
                    network of broadcasters and influencers, unlocking new avenues for
                    product promotion, customer acquisition, and sustained growth. With
                    industry-leading solutions and a relentless pursuit of innovation,
                    we enable our partners to navigate the livestreaming ecommerce world
                    with confidence and succeed in captivating today&apos;s
                    digital-savvy consumers.
                </p>
                <div className="flex justify-end p-5">
                    {/* Button for Learn More */}
                    <Link href="/aehl-kylin/model">
                        <Button color="primary" variant="solid">
                            Learn More
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}