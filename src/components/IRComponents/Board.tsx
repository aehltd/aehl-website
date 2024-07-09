import React from "react";
import weilaiZhang from "../../assets/board/weilai-zhang.png";
import chungenSong from "../../assets/board/chungen-song.png";
import tingtingZhang from "../../assets/board/tingting-zhang.png";
import dianZhang from "../../assets/board/dian-zhang.png";
import ishakHan from "../../assets/board/ishak-han.png";
import huashuYuan from "../../assets/board/huashu-yuan.png";
import xiaoyingSong from "../../assets/board/xiaoying-song.jpg";
import junjieDong from "../../assets/board/WechatIMG21.jpg";
import houyouZhang from "../../assets/board/Image_20240618105142.jpg";

type BoardEntry = {
  name: string;
  description: string;
  image: string;
};

const board: BoardEntry[] = [
  {
    name: "Weilai Zhang",
    description:
      "Mr. Zhang has served as our Chief Executive Officer since January 2023 and joined our Board in February 2023. From 2011 to 2020, he acted as the Chairman of Huitong Tianxia Investment Ltd., an investment company. Since 2020, Mr. Zhang has acted as the chariman of Jinke Yulv Technology Co., Ltd., which is an International Technology firm in China. Mr. Zhang completed the course and obtained a Diploma in Capital and M&A Entrepreneurship from Fudan University in 2021, and a Diploma in Finance and Capital Investment from Southwest University in Finance and Economics in 2014.",
    image: weilaiZhang,
  },
  {
    name: "Chungen Song",
    description:
      "Mr. Chungen Song joined our Board in November 2019 as an independent member of the Board as well as a member of Audit, Compensation and Nominating Committees, to fill the vacancy following Liu Jun’s resignation. From 2009 to present, Song Chungen has been a practicing lawyer at Guangdong Weihao Law firm. He obtained his law license in May 2003, and in November 2009, he obtained Securities Qualification in China. Song Chungen holds a Bachelor’s degree in Law from Sun Yat Sen University (2007).",
    image: chungenSong,
  },
  {
    name: "Tingting Zhang",
    description:
      "Ms. Tingting Zhang joined our Board in October 2022. Ms. Zhang joined China Mobile’s digital content subsidiary Migo Co Ltd in 2021 at its Xiamen headquarters as the manager of its post-production department. Her current responsibilities include video production of programs including the 2022 Winter Olympics, the Golden Rooster Award and other large-scale China award productions. Previous to that, from 2018 to 2021, Ms. Zhang worked as a multimedia designer at 4399 Networks Ltd., where she was responsible for media productions. Ms. Zhang graduated with a Bachelor’s degree in Design from Asia University Taiwan.",
    image: tingtingZhang,
  },
  {
    name: "Dian Zhang",
    description:
      "Mr. Dian Zhang joined our Board in November 2022. Mr. Dian Zhang is currently Chief Financial Officer of Baiya International Group Inc., an SaaS (software as a service) platform company in China. Previously, Mr. Zhang worked at Eaton Square from 2014 to 2020, an M&A advisory firm, where he was responsible for investments in new ventures and their financing in the Chinese market. Previous to that, Mr. Zhang worked at the Chengdu branch of ShineWing Certified Public Accountants from 2009 to 2013 where his responsibilities included the auditing of annual reports of publicly listed companies and due diligence for IPO projects. Mr. Zhang holds a Bachelor’s degree in Management Accounting from Aston University, a Master’s degree in Banking and Finance from Monash University, and a Master’s degree in Financial Management from the Australian National University.",
    image: dianZhang,
  },
  {
    name: "Ishak Han",
    description:
      "Mr. Ishak Han joined our Board in November 2022. Mr. Han is the General Manager of Shenzhen Baisifu Industrial Co., Ltd., which engages in property management and leasing, management services for catering businesses, and enterprise management consulting. Having founded the firm in 2017, Mr. Han developed Shenzhen Baisifu Industrial Co., Ltd.’s marketing strategy, management policies, financial budgeting, and corporate planning activities. From 2011 to 2016, Mr. Han was the General Manager of Shenzhen Baisi Technology Co., Ltd. which engages in the development of self-service website application systems, the training and development of online ventures, online marketing training, and e-commerce product consignments. As the founder of Shenzhen Baisi Technology Co., Ltd., Mr. Han oversaw its financial budgeting and corporate planning functions, and was responsible for its overall marketing strategy. Mr. Han graduated with a higher degree diploma in marketing from Guangdong Open University in 2021.",
    image: ishakHan,
  },
  {
    name: "Huashu Yuan",
    description:
      "Ms. Huashu Yuan joined our Board in March 2023. Ms. Yuan has been the marketing specialist of Vesta living corp. since March 2022. Ms. Yuan served as an outside consultant providing marketing advice to the Company from June 2021 to February 2023. Ms. Yuan served as the marketing manager for American Tianfu-Wenhui Publishing Company from March 2021 to February 2022. Ms. Yuan worked at Strands Haircare Inc. as a social media intern from October 2020 to February 2021. Ms. Yuan obtained her Master’s degree in Emerging Media Studies from Boston University in 2020 and obtained her Bachelor’s degree in Communication Science and Rhetoric Studies from University of Wisconsin-Madison in 2019.",
    image: huashuYuan,
  },
  {
    name: "Xiaoying Song",
    description:
      "Ms. Xiaoying Song has extensive experience in business administration and operations as well as investment management, and has been a co-founder of several companies. Ms. Song is currently the CEO of Sichuan Huanyu Interchange Group Co., Ltd, which she co-founded in January of 2020; the firm operates as a bidding agency for contracts, and engages in engineering supervision, construction labor subcontracting and other related businesses. From October 2016 to December 2020, Ms. Song co-founded and was the CEO of Chengdu Houshi Technology Co., Ltd, which engages in technology development, technical services and information technology consulting services. From July 2013 to September 2016, Ms. Song co-founded and was the CEO of Chengdu Huaxin Wealth Management Co., Ltd, an investment management, investment consulting, and business services firm. Ms. Song obtained an Associates Degree in Air Crew from Nanchang Institute of Technology in 2013.",
    image: xiaoyingSong,
  },
  {
    name: "Junjie Dong",
    description:
      'Mr. Junjie Dong is currently the Chief Technology Officer of Antelope Holdings (Chengdu) Co., Ltd., a wholly owned subsidiary of the Company that is engaged in computer consulting and software development. Mr. Dong is responsible for its strategic direction and overseeing its technological advancements, and he has held this position since July 2023. From February 2018 to July 2023, Mr. Dong was the Chief Executive Officer ("CEO") of Shenzhen Hongtaiju Technology Development Co., Ltd., an information technology company, where he was mainly responsible for the company\'s strategic planning and operational management. From August 2015 to December 2018, Mr. Dong was CEO of Shenzhen Weidai Yingxing Financial Services Co., Ltd, a company that provides financial services. From May 2013 to July 2015, he was the CEO of Shenzhen Hongtaiju Investment Consulting Co., Ltd., a company that provides financial services. Mr. Dong attended Hainan Vocational College of Science and Technology from March 2015 to December 2018, and received the junior college degree.',
    image: junjieDong,
  },
  {
    name: "Houyou Zhang",
    description:
      "Mr. Houyou Zhang has been a director of YiXiang International LLC since March 2023, where he secures projects for investment and conducted due diligence. From May 2017 to October 2022, Mr. Zhang was the chairman of Shanghai KKM Asset Management Co., Ltd., a firm that he founded and where he was engaged in investment and asset management. Mr. Zhang is experienced in quantitative trading in China with 20 years of experience in the finance industry, and he has published widely on finance and investments. Mr. Zhang received a Bachelor’s degree in Engineering from Sichuan University in 2002.",
    image: houyouZhang,
  },
];

const BoardRow = () => {
    return (
      <div className="w-full">
        {board.map((entry, index) => {
          const isAlternateRow = Math.floor(index / 3) % 2 !== 0;
  
          // Apply background style to the entire row if it's an alternate row
          const rowStyle = isAlternateRow
            ? {
                backgroundImage: "url('https://www.aehlus.com/png/img12.f4ed389f.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }
            : {};
  
          // Wrap every three entries in a row div
          if (index % 3 === 0) {
            return (
              <div
                key={index}
                className="flex w-full"
                style={rowStyle}
              >
                <div className="flex row space-x-4">
                {board.slice(index, index + 3).map((subEntry, subIndex) => (
                  <div
                    key={subIndex}
                    className="flex flex-col items-center bg-slate-200 p-4 rounded-lg w-1/3"
                  >
                    <img
                      src={subEntry.image}
                      alt={subEntry.name}
                      className="w-32 h-32 rounded-full mb-4"
                    />
                    <h2 className="text-lg font-bold mb-2">{subEntry.name}</h2>
                    <p className="text-start">{subEntry.description}</p>
                  </div>
                ))}
                </div>
              </div>
            );
          }
  
          return null;
        })}
      </div>
    );
  };

export default BoardRow;