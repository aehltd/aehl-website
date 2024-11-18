import { useState } from "react";
import { Menu, Drawer, MenuProps } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { key: "/", label: <Link className="flex md:hidden" href="/">Home</Link> },
  {
    key: "/aehl-us/",
    label: <Link href="/aehl-us/corporate-overview" className="hover:text-black">AEHL US</Link>,
    children: [
      {
        key: "/aehl-us/overview",
        label: <Link href="/aehl-us/corporate-overview">Overview</Link>,
      },
      // {
      //   key: "/aehl-us/ATM",
      //   label: <Link href="/aehl-us/ATM">Electricity Bond</Link>,
      // },
      {
        key: "/aehl-us/products",
        label: <Link href="/aehl-us/products">Our Products</Link>,
      },
      // {
      //   key: "/aehl-us/metrics",
      //   label: <Link href="/aehl-us/metrics">Real Time Metrics</Link>,
      //   disabled: true,
      // },
    ],
  },
  {
    key: "aehl-kylin",
    label: <Link href="/aehl-kylin/business-overview" className="hover:text-black">Kylin Cloud</Link>,
    children: [
      {
        key: "/aehl-kylin/overview",
        label: <Link href="/aehl-kylin/business-overview">Overview</Link>,
      },
      {
        key: "/aehl-kylin/model",
        label: <Link href="/aehl-kylin/model">Business Model</Link>,
      },
    ],
  },
  { key: "/btc/btc-overview", label: <Link href="/btc/btc-overview">BtcShort</Link> },
  { key: "/ir", label: <Link href="/ir/our_values">Investors</Link> },
  { key: "/contact-us", label: <Link href="/contact-us">Contact Us</Link> },
];

export default function NavBar({
  current,
  isIRSection,
}: {
  current: string;
  isIRSection: boolean;
}) {
  const [visible, setVisible] = useState(false);

  const currPage = isIRSection ? "/ir" : current;

  const openDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  return (
    <div className="flex justify-center bg-white">
      <div className="flex row p-0 h-14 justify-between">
        <div className="flex items-center pl-4 py-2">
          <Link href="/">
          <img
            src="https://res.cloudinary.com/aehl/image/upload/v1724428463/%E5%B0%8F%E9%BB%91%E8%89%B2.jpg_dsu0fh.png"
            alt="logo"
            className="h-45 w-45"
          />
          </Link>
        </div>
        <div className="md:hidden items-center flex">
          <h1 className="text-midnight text-sm font-semibold tracking-wide">Antelope Enterprise Holdings Limited</h1>
        </div>
        <div className="md:hidden">
          <MenuOutlined className="h-full pr-4" onClick={openDrawer}/>
        </div>

        <div className="hidden md:flex">
          <Menu
            className="text-base font-poppins h-full pt-2 min-w-0 flex-auto bg-white"
            selectedKeys={[currPage]}
            disabledOverflow={true}
            mode="horizontal"
            items={items}
            style={{
              borderBottom: "none",
            }}
          />
        </div>
      </div>

      <div className="md:hidden">
        <Drawer
          placement="right"
          closable={true}
          onClose={closeDrawer}
          open={visible}
          width={250}
          title="AEHL"
        >
          <Menu
            className="font-poppins !border-0"
            selectedKeys={[currPage]}
            mode="inline"
            items={items}
            onClick={closeDrawer}
          />
        </Drawer>
      </div>
    </div>
  );
}
