import React, { useState, useEffect, useLayoutEffect } from "react";
import { Menu, Drawer, MenuProps } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { key: "", label: "Home" },
  {
    key: "aehl-us",
    label: "Energy Business",
    children: [
      { key: "aehl-us/overview", label: "Overview" },
      { key: "aehl-us/products", label: "Our Products" },
      { key: "aehl-us/metrics", label: "Real Time Metrics" },
    ],
  },
  {
    key: "aehl-kylin",
    label: "Kylin Cloud",
    children: [
      { key: "aehl-kylin/overview", label: "Overview" },
      //{ key: "aehl-kylin/value", label: "Value Proposition" },
      { key: "aehl-kylin/model", label: "Business Model" },
    ],
  },
  {
    key: "ir",
    label: "Investor Relations",
  },
  { key: "contact-us", label: "Contact Us" },
];

//Get key from url
const useCurrentPage = () => {
  const location = useLocation();
  const key = location.pathname.split("/")[1];
  console.log(key);
  return key || "";
};

const NavBar = () => {
  const currentPage = useCurrentPage();
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(currentPage ? currentPage : "");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setCurrent(currentPage);
  }, [currentPage]);

  useLayoutEffect(() => {
    const scrollId = location.hash.replace("#", "");
    if (scrollId) {
      const element = document.getElementById(scrollId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ block: "start", behavior: "smooth" });
        }, 500);
      }
    } else {
      const element = document.getElementById("container");
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ block: "start", behavior: "smooth" });
        }, 500);
      }
    }
  }, [location]);

  const handleClick = (e: any) => {
    console.log("click ", e);
    setCurrent(e.key);
    setVisible(false);
    const [path, hash] = e.key.split("#");
    if (hash) {
      navigate(`/${path}#${hash}`);
    } else {
      navigate(`/${e.key}`);
    }
  };

  const openDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  return (
    <div className="flex justify-center">
      <div className="flex row p-0 h-14 justify-between">
        <div className="flex items-center pl-4 py-2">
          <img
            src="data:image/png;base64,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"
            alt="logo"
            className="h-full w-full"
          />
        </div>
        <div className="md:hidden">
          <MenuOutlined className="h-full pr-4" onClick={openDrawer} />
        </div>

        <div className="hidden md:flex">
          <Menu
            className="font-poppins h-full pt-2 min-w-0 flex-auto"
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
            disabledOverflow
            items={items}
          />
        </div>
      </div>
      <div className="md:hidden">
        <Drawer
          placement="right"
          closable={true}
          onClose={closeDrawer}
          open={visible}
        >
          <Menu
            className="font-poppins !border-0"
            onClick={handleClick}
            selectedKeys={[current]}
            mode="inline"
            items={items}
          />
        </Drawer>
      </div>
    </div>
  );
};

export default NavBar;
