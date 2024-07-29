import React from "react";
import { Divider } from "antd";

type dataEntry = {
  link: string;
  title: string;
  date: string;
};

const dummyData: dataEntry[] = [
  {
    link: "https://finance.yahoo.com/news/antelope-enterprise-announces-second-half-110000239.html",
    title:
      "Antelope Enterprise Announces Second Half and Full Year 2023 Financial Results",
    date: "GlobeNewswire • Fri, May 10, 2024",
  },
  {
    link: "https://finance.yahoo.com/news/antelope-enterprise-announces-second-half-123000588.html",
    title:
      "Antelope Enterprise Announces Second Half and Fiscal Year End 2023 Earnings Conference Call",
    date: "GlobeNewswire • Thu, May 9, 2024",
  },
  {
    link: "https://finance.yahoo.com/news/antelope-enterprise-announces-rescheduling-second-110000082.html",
    title:
      "Antelope Enterprise Announces Rescheduling of its Second Half and Fiscal Year End 2023 Earnings Conference Call",
    date: "GlobeNewswire • Tue, May 7, 2024",
  },
  {
    link: "https://finance.yahoo.com/news/antelope-enterprise-schedules-second-half-123000836.html",
    title:
      "Antelope Enterprise Schedules Second Half and Fiscal Year End 2023 Earnings Conference Call",
    date: "GlobeNewswire • Mon, May 6, 2024",
  },
  {
    link: "https://finance.yahoo.com/news/antelope-enterprise-announces-plan-launch-130000041.html",
    title:
      "Antelope Enterprise Announces its Plan to Launch Energy Transmission Business and Appoints Management Team to Spearhead Such Initiative",
    date: "GlobeNewswire • Mon, Apr 29, 2024",
  },
  {
    link: "https://finance.yahoo.com/news/antelope-enterprise-announces-preliminary-full-123000039.html",
    title:
      "Antelope Enterprise Announces Preliminary Full Year 2023 Revenue of $70.4 Million, a Projected 65% Year-Over-Year Increase",
    date: "GlobeNewswire • Mon, Apr 1, 2024",
  },
  {
    link: "https://finance.yahoo.com/news/antelope-enterprise-announces-closing-1-140000474.html",
    title:
      "Antelope Enterprise Announces Closing of $1.3 Million Registered Direct Offering and Private Placement",
    date: "PR Newswire • Mon, Feb 26, 2024",
  },
  {
    link: "https://finance.yahoo.com/news/antelope-enterprise-announces-warrant-exchange-211500129.html",
    title: "Antelope Enterprise Announces Warrant Exchange Agreements",
    date: "PR Newswire • Wed, Feb 21, 2024",
  },
  {
    link: "https://finance.yahoo.com/news/antelope-enterprise-announces-changes-board-130000112.html",
    title: "Antelope Enterprise Announces Changes to its Board of Directors",
    date: "PR Newswire • Fri, Dec 1, 2023",
  },
  {
    link: "https://finance.yahoo.com/news/antelope-enterprise-holdings-regains-compliance-133000445.html",
    title:
      "Antelope Enterprise Holdings Regains Compliance with NASDAQ Minimum Bid Price Requirement",
    date: "PR Newswire • Wed, Oct 4, 2023",
  },
  {
    link: "https://finance.yahoo.com/news/antelope-enterprise-announces-first-half-110000575.html",
    title: "Antelope Enterprise Announces First Half 2023 Financial Results",
    date: "PR Newswire • Mon, Oct 2, 2023",
  },
  {
    link: "https://finance.yahoo.com/news/antelope-enterprise-schedules-first-half-133000944.html",
    title:
      "Antelope Enterprise Schedules First Half 2023 Earnings Conference Call",
    date: "PR Newswire • Thu, Sep 28, 2023",
  },
];

const PressReleasesRow = () => {
  return (
    <ul className="grid grid-cols-2 gap-x-8">
      {dummyData.map((entry, index) => (
        <li key={index}>
          <a className="truncate block hover:text-blue-500" href={entry.link}>
            {entry.title}
          </a>
          <p className="xsmalltext">{entry.date}</p>
          <Divider className="my-4 " />
        </li>
      ))}
    </ul>
  );
};

export default PressReleasesRow;
