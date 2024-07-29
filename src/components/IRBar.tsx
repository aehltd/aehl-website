import React, { useState } from "react";
import { Menu, MenuProps } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "Overview",
    key: "overview",
  },
  {
    label: "News and Events",
    key: "news",
    children: [
      {
        label: "Press Releases",
        key: "press-releases",
      },
      {
        label: "Events and Presentations",
        key: "events-presentations",
      },
    ],
  },
  {
    label: "SEC Filings",
    key: "sec-filings",
  },
  {
    label: "Stock Information",
    key: "stock-information",
  },
  {
    label: "Corporate Governance",
    key: "governance",
    children: [
      { key: "documents", label: "Governance Documents" },
      { key: "committee-composition", label: "Committee Composition" },
      { key: "board", label: "Board of Directors" },
    ],
  },
  {
    key: "contact",
    label: "Contact Info",
    children: [
      { key: "contact-ir", label: "Contact IR" },
      { key: "faqs", label: "FAQs" },
      {
        key: "email-alerts",
        label: "Email Alerts",
      },
    ],
  },
];

const itemsInline: MenuItem[] = [
  {
    label: "View All Sections",
    key: "ir-sections",
    children: items,
  },
];

// Get key from path /ir/${e.key}
const useCurrentPage = () => {
  const location = useLocation();
  const key = location.pathname.split("/")[2];
  return key;
};

const IRMenu = () => {
  const currentPage = useCurrentPage();
  const [current, setCurrent] = useState(
    currentPage ? currentPage : "overview"
  );
  const [openKeys, setOpenKeys] = useState<string[]>([]); // State to manage open submenu keys
  const navigate = useNavigate();

  const handleClick = (e: any) => {
    console.log("click ", e);
    setCurrent(e.key);
    setOpenKeys([]);
    navigate(`/ir/${e.key}`);
  };

  return (
    <div className="flex justify-center">
      <div className="flex w-full justify-end md:justify-center bg-slate-100">
        <div className="hidden md:flex">
          <Menu
            className="font-poppins text-center min-w-0 flex-auto bg-slate-100"
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
            disabledOverflow
            items={items}
          />
        </div>
        <div className="md:hidden flex items-center flex-col w-full">
          <Menu
            className="font-poppins !border-0 w-full bg-slate-100"
            onClick={handleClick}
            selectedKeys={[current]}
            openKeys={openKeys}
            onOpenChange={(keys) => setOpenKeys(keys as string[])}
            mode="inline"
            items={itemsInline}
          />
        </div>
      </div>
    </div>
  );
};

export default IRMenu;
