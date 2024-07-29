import React from "react";
import { Divider } from "antd";

type dataEntry = {
  link: string;
  title: string;
  date: string;
};

const dummyData: dataEntry[] = [
  {
    link: "https://finance.yahoo.com/sec-filing/AEHL/0001493152-24-021391_1470683?nn=1",
    title: "F-1 : Offering Registrations",
    date: "May 24, 2024",
  },
  {
    link: "https://finance.yahoo.com/sec-filing/AEHL/0001493152-24-018683_1470683?nn=1",
    title: "20-F : Periodic Financial Reports",
    date: "May 10, 2024",
  },
  {
    link: "https://finance.yahoo.com/sec-filing/AEHL/0001493152-24-016973_1470683?nn=1",
    title: "6-K : Corporate Changes & Voting Matters",
    date: "April 29, 2024",
  },
  {
    link: "https://finance.yahoo.com/sec-filing/AEHL/0001493152-24-015193_1470683?nn=1",
    title: "6-K : Corporate Changes & Voting Matters",
    date: "April 18, 2024",
  },
  {
    link: "https://finance.yahoo.com/sec-filing/AEHL/0001493152-24-013320_1470683?nn=1",
    title: "6-K : Corporate Changes & Voting Matters",
    date: "April 05, 2024",
  },
  {
    link: "https://finance.yahoo.com/sec-filing/AEHL/0001493152-24-011791_1470683?nn=1",
    title: "S-8 : Offering Registrations",
    date: "March 28, 2024",
  },
  {
    link: "https://finance.yahoo.com/sec-filing/AEHL/0001493152-24-011617_1470683?nn=1",
    title: "6-K : Corporate Changes & Voting Matters",
    date: "March 28, 2024",
  },
  {
    link: "https://finance.yahoo.com/sec-filing/AEHL/0001493152-24-010782_1470683?nn=1",
    title: "6-K : Corporate Changes & Voting Matters",
    date: "March 21, 2024",
  },
  {
    link: "https://finance.yahoo.com/sec-filing/AEHL/0001493152-24-007352_1470683?nn=1",
    title: "6-K : Corporate Changes & Voting Matters",
    date: "February 21, 2024",
  },
  {
    link: "https://finance.yahoo.com/sec-filing/AEHL/0001493152-24-004772_1470683?nn=1",
    title: "6-K/A : Corporate Changes & Voting Matters",
    date: "February 02, 2024",
  },
  {
    link: "https://finance.yahoo.com/sec-filing/AEHL/0001493152-24-004755_1470683?nn=1",
    title: "20-F/A : Periodic Financial Reports",
    date: "February 02, 2024",
  },
  {
    link: "https://finance.yahoo.com/sec-filing/AEHL/0001493152-24-004187_1470683?nn=1",
    title: "6-K : Corporate Changes & Voting Matters",
    date: "January 29, 2024",
  },
];

const SECFilingsRow = () => {
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

export default SECFilingsRow;
