import React, { useState } from "react";
import { Avatar, Card } from "antd";
import { UpOutlined, DownOutlined } from "@ant-design/icons";
import { Switch, Typography } from "antd";

const { Paragraph, Text } = Typography;
const { Meta } = Card;

// create a boardEntry to hold all the boardinfo
type BoardEntry = {
  name: string;
  position: string;
  description: string;
  image: string;
  linkedin: string;
};

const board: BoardEntry[] = [
  // info about Weilai Zhang
  // {
  //   name: "Weilai Zhang",
  //   position: "CEO",
  //   description:
  //     "Mr. Zhang has served as our Chief Executive Officer since January 2023 and joined our Board in February 2023. From 2011 to 2020, he acted as the Chairman of Huitong Tianxia Investment Ltd., an investment company. Since 2020, Mr. Zhang has acted as the chariman of Jinke Yulv Technology Co., Ltd., which is an International Technology firm in China. Mr. Zhang completed the course and obtained a Diploma in Capital and M&A Entrepreneurship from Fudan University in 2021, and a Diploma in Finance and Capital Investment from Southwest University in Finance and Economics in 2014.",
  //   image:
  //     "https://res.cloudinary.com/aehl/image/upload/v1724428444/weilai-zhang_drtijr.png",
  //   linkedin: "https://www.linkedin.com/in/aehl/",
  // },
  {
    name: "Ishak Han",
    position: "Chairman",
    description:
      "Mr. Ishak Han joined our Board in November 2022. Mr. Han is the General Manager of Shenzhen Baisifu Industrial Co., Ltd., which engages in property management and leasing, management services for catering businesses, and enterprise management consulting. Having founded the firm in 2017, Mr. Han developed Shenzhen Baisifu Industrial Co., Ltd.’s marketing strategy, management policies, financial budgeting, and corporate planning activities. From 2011 to 2016, Mr. Han was the General Manager of Shenzhen Baisi Technology Co., Ltd. which engages in the development of self-service website application systems, the training and development of online ventures, online marketing training, and e-commerce product consignments. As the founder of Shenzhen Baisi Technology Co., Ltd., Mr. Han oversaw its financial budgeting and corporate planning functions, and was responsible for its overall marketing strategy. Mr. Han graduated with a higher degree diploma in marketing from Guangdong Open University in 2021.",
    image:
      "https://res.cloudinary.com/aehl/image/upload/v1724428442/ishak-han_eolqsr.png",
    linkedin: "",
  },
  {
    name: "Chungen Song",
    position: "Board Member",
    description:
      "Mr. Chungen Song joined our Board in November 2019 as an independent member of the Board as well as a member of Audit, Compensation and Nominating Committees, to fill the vacancy following Liu Jun’s resignation. From 2009 to present, Song Chungen has been a practicing lawyer at Guangdong Weihao Law firm. He obtained his law license in May 2003, and in November 2009, he obtained Securities Qualification in China. Song Chungen holds a Bachelor’s degree in Law from Sun Yat Sen University (2007).",
    image:
      "https://res.cloudinary.com/aehl/image/upload/v1724428447/chungen-song_pzyogy.png",
    linkedin: "",
  },
  {
    name: "Tingting Zhang",
    position: "Board Member",
    description:
      "Ms. Tingting Zhang joined our Board in October 2022. Ms. Zhang joined China Mobile’s digital content subsidiary Migo Co Ltd in 2021 at its Xiamen headquarters as the manager of its post-production department. Her current responsibilities include video production of programs including the 2022 Winter Olympics, the Golden Rooster Award and other large-scale China award productions. Previous to that, from 2018 to 2021, Ms. Zhang worked as a multimedia designer at 4399 Networks Ltd., where she was responsible for media productions. Ms. Zhang graduated with a Bachelor’s degree in Design from Asia University Taiwan.",
    image:
      "https://res.cloudinary.com/aehl/image/upload/v1724428446/tingting-zhang.jpg_mbwhp1.png",
    linkedin: "",
  },
  // {
  //   name: "Dian Zhang",
  //   position: "Board Member",
  //   description:
  //     "Mr. Dian Zhang joined our Board in November 2022. Mr. Dian Zhang is currently Chief Financial Officer of Baiya International Group Inc., an SaaS (software as a service) platform company in China. Previously, Mr. Zhang worked at Eaton Square from 2014 to 2020, an M&A advisory firm, where he was responsible for investments in new ventures and their financing in the Chinese market. Previous to that, Mr. Zhang worked at the Chengdu branch of ShineWing Certified Public Accountants from 2009 to 2013 where his responsibilities included the auditing of annual reports of publicly listed companies and due diligence for IPO projects. Mr. Zhang holds a Bachelor’s degree in Management Accounting from Aston University, a Master’s degree in Banking and Finance from Monash University, and a Master’s degree in Financial Management from the Australian National University.",
  //   image:
  //     "https://res.cloudinary.com/aehl/image/upload/v1724428442/dian-zhang_omdytk.png",
  //   linkedin: "",
  // },
  {
    name: "Ze Yang",
    position: "Board Member",
    description:
      "Ms. Ze Yang is currently the Finance Director and Chief Operating Officer of Sichuan Yixiaobao Network Technology Co., Ltd, an investment company engaged in cross-border e-commerce businesses, where she manages a team of over 50 people, develops growth strategies and optimizes business operations. Ms. Yang has held this position since March 2021. From December 2016 to January 2021, Ms. Yang served as the Marketing Director of at Top Guagua Technology Group Co., Ltd, a platform that provides one-stop services for enterprises, covering areas such as business registration, financial and tax agency, intellectual property, legal services, qualification processing and entrepreneurial incubation. From March 2011 to November 2016, Ms. Yang worked as a manager at Chengdu Yidai Network Financial Information Service Co., Ltd, an online lending information intermediary service company. From March 2009 to February 2011, Ms. Yang worked as a store manager at Chengdu Orchid Grass Co., Ltd, a flower store. Ms. Yang has an associate degree in computerized auditing from Sichuan Tianyi College.",
    image:
      "https://res.cloudinary.com/aehl/image/upload/v1743687900/Ye_Zang_Photo_Edit_1_h60b2t.jpg",
    linkedin: "",
  },
  // {
  //   name: "Huashu Yuan",
  //   position: "Board Member",
  //   description:
  //     "Ms. Huashu Yuan joined our Board in March 2023. Ms. Yuan has been the marketing specialist of Vesta living corp. since March 2022. Ms. Yuan served as an outside consultant providing marketing advice to the Company from June 2021 to February 2023. Ms. Yuan served as the marketing manager for American Tianfu-Wenhui Publishing Company from March 2021 to February 2022. Ms. Yuan worked at Strands Haircare Inc. as a social media intern from October 2020 to February 2021. Ms. Yuan obtained her Master’s degree in Emerging Media Studies from Boston University in 2020 and obtained her Bachelor’s degree in Communication Science and Rhetoric Studies from University of Wisconsin-Madison in 2019.",
  //   image:
  //     "https://res.cloudinary.com/aehl/image/upload/v1724428441/huashu-yuan_tdkfdp.png",
  //   linkedin: "",
  // },

  {
    name: "Cong Zhang",
    position: "Board Member",
    description:
      "Mr. Cong Zhang joined our Board in August 2025. Mr. Zhang served as Vice President of Business at Sichuan Jindouyun Law Firm from 2023 to 2025, overseeing the firm’s business expansion. Prior to this, Mr. Zhang served as Project Director at Anhui Fengtai Environmental Technology Co., Ltd., from 2019 to 2022, where he innovated project management models and promoted the implementation of EPC + O models. Mr. Zhang served as the Operations Manager at Chongqing Huaxun Business Information Consulting Co., Ltd., from 2016 to 2018, where he standardized operations and optimized business processes. Mr. Zhang holds a Bachelor’s degree in Engineering Management from Chongqing Technology and Business University.",
    image:
      "https://res.cloudinary.com/aehl/image/upload/v1754416890/Screenshot_2025-08-05_at_2.00.53_PM_i3ogkl.png",
    linkedin: "",
  },
  {
    name: "Xiaoying Song",
    position: "Board Member",
    description:
      "Ms. Xiaoying Song has extensive experience in business administration and operations as well as investment management, and has been a co-founder of several companies. Ms. Song is currently the CEO of Sichuan Huanyu Interchange Group Co., Ltd, which she co-founded in January of 2020; the firm operates as a bidding agency for contracts, and engages in engineering supervision, construction labor subcontracting and other related businesses. From October 2016 to December 2020, Ms. Song co-founded and was the CEO of Chengdu Houshi Technology Co., Ltd, which engages in technology development, technical services and information technology consulting services. From July 2013 to September 2016, Ms. Song co-founded and was the CEO of Chengdu Huaxin Wealth Management Co., Ltd, an investment management, investment consulting, and business services firm. Ms. Song obtained an Associates Degree in Air Crew from Nanchang Institute of Technology in 2013.",
    image:
      "https://res.cloudinary.com/aehl/image/upload/v1724428443/xiaoying-song_g5iuh2.jpg",
    linkedin: "",
  },
  {
    name: "Junjie Dong",
    position: "Board Member",
    description:
      'Mr. Junjie Dong is currently the Chief Technology Officer of Antelope Holdings (Chengdu) Co., Ltd., a wholly owned subsidiary of the Company that is engaged in computer consulting and software development. Mr. Dong is responsible for its strategic direction and overseeing its technological advancements, and he has held this position since July 2023. From February 2018 to July 2023, Mr. Dong was the Chief Executive Officer ("CEO") of Shenzhen Hongtaiju Technology Development Co., Ltd., an information technology company, where he was mainly responsible for the company\'s strategic planning and operational management. From August 2015 to December 2018, Mr. Dong was CEO of Shenzhen Weidai Yingxing Financial Services Co., Ltd, a company that provides financial services. From May 2013 to July 2015, he was the CEO of Shenzhen Hongtaiju Investment Consulting Co., Ltd., a company that provides financial services. Mr. Dong attended Hainan Vocational College of Science and Technology from March 2015 to December 2018, and received the junior college degree.',
    image:
      "https://res.cloudinary.com/aehl/image/upload/v1724429516/WechatIMG21_rb7qxg.jpg",
    linkedin: "",
  },
];

export default function BoardRow() {
  const [ellipsis, setEllipsis] = useState<boolean[]>(
    Array(board.length).fill(true)
  );
  const handleToggle = (index: number) => {
    const newEllipsis = [...ellipsis];
    newEllipsis[index] = !newEllipsis[index];
    setEllipsis(newEllipsis);
  };
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
      {board.map((entry, index) => {
        return (
          <div key={index}>
            <Card hoverable bordered={true} className="shadow-xl">
              <Meta
                className="items-center"
                avatar={
                  <Avatar
                    src={entry.image}
                    style={{ width: 90, height: 90 }}
                    className="m-3"
                  />
                }
                title={
                  <div className="flex">
                    <h1 className="text-start text-2xl tracking-wide">
                      {entry.name}
                    </h1>
                  </div>
                }
                description={entry.position}
              />
              <div
                className={`p-5 overflow-hidden transition-all duration-500 ease-in-out ${
                  ellipsis[index] ? "max-h-[180px]" : "max-h-[1500px]"
                }`}
              >
                <Paragraph className="transition-all duration-500 ease-in-out">
                  {entry.description}
                </Paragraph>
              </div>

              <div className="flex justify-end px-5 py-1">
                <Switch
                  checked={!ellipsis[index]}
                  className={"transition-all duration-500"}
                  checkedChildren={
                    <span>
                      <UpOutlined /> Show Less
                    </span>
                  }
                  unCheckedChildren={
                    <span>
                      <DownOutlined /> Show More
                    </span>
                  }
                  onChange={() => handleToggle(index)}
                />
              </div>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
