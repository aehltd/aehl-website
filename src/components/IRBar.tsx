import { useState } from "react";
import { Menu, MenuProps } from "antd";
import Link from "next/link";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "/ir/overview",
    label: <Link href="/ir/overview">Overview</Link>,
  },
  {
    key: "/ir/news",
    label: "News and Events",
    children: [
      {
        key: "/ir/press-releases",
        label: <Link href="/ir/press-releases">Press Releases</Link>,
      },
      {
        key: "/ir/events-presentations",
        label: (
          <Link href="/ir/events-presentations">Events and Presentations</Link>
        ),
      },
    ],
  },
  {
    key: "/ir/sec-filings",
    label: <Link href="/ir/sec-filings">SEC Filings</Link>,
  },
  {
    key: "/ir/stock-information",
    label: <Link href="/ir/stock-information">Stock Information</Link>,
  },
  {
    key: "/ir/governance",
    label: "Corporate Governance",
    children: [
      {
        key: "/ir/board",
        label: <Link href="/ir/board">Board of Directors</Link>,
      },
      {
        key: "/ir/committee-composition",
        label: (
          <Link href="/ir/committee-composition">Committee Composition</Link>
        ),
      },
      {
        key: "/ir/diversity-matrix",
        label: <Link href="/ir/diversity-matrix">Diversity Matrix</Link>,
      },
      {
        key: "/ir/documents",
        label: <Link href="/ir/documents">Governance Documents</Link>,
      },
    ],
  },
  {
    key: "/ir/contact",
    label: "Contact Info",
    children: [
      {
        key: "/ir/contact-ir",
        label: <Link href="/ir/contact-ir">Contact IR</Link>,
      },
      { key: "/ir/faqs", label: <Link href="/ir/faqs">FAQs</Link> },
      {
        key: "/ir/email-alerts",
        label: <Link href="/ir/email-alerts">Email Alerts</Link>,
      },
    ],
  },
];

const itemsInline: MenuItem[] = [
  {
    label: "View All Sections",
    key: "/ir-sections",
    children: items,
  },
];

export default function IRBar({current}: {current: string}) {
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const handleClick = (e: any) => {
    setOpenKeys([]);
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
