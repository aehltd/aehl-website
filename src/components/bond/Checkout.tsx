import { useState } from "react";
import { Button, InputNumber } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Grid } from "antd";
import { Table } from "antd";
import { Slider } from "antd";
import type { SliderSingleProps } from "antd";

export default function Checkout({ index }: { index: number }) {
  const [quantity, setQuantity] = useState(1);
  const [term, setTerm] = useState(1);

  const getInvestmentReturnRate = (index: number) => {
    switch (index) {
      case 0:
        return 0.065; // 5% return for index 1
      case 1:
        return 0.095; // 7% return for index 2
      case 2:
        return 0.12; // 10% return for index 3
      default:
        return 0;
    }
  };

  const getAnnualInterestRate = (index: number) => {
    switch (index) {
      case 0:
        return 0.108; // 10% return for index 1
      case 1:
        return 0.114; // 7% return for index 2
      case 2:
        return 0.12; // 10% return for index 3
      default:
        return 0;
    }
  };

  const getATM1 = (index: number, rate:number) => {
    const m = index * 12
    let sum = 0
    let curSum = investmentAmount
    let monthlyReturn = curSum*(rate/12)
    let temp = 0
    for (let i = 1; i <= m; i++) {
      temp = curSum/m
      sum += temp + monthlyReturn
      curSum -= monthlyReturn
    }
    return sum
  }

  const getAnnualReturnRate = (index: number) => {
    switch (index) {
      case 0:
        // return getATM1(index);
      case 1:
        return investmentAmount * 0.01 + investmentAmount / 6; // 7% return for index 2
      case 2:
        return investmentAmount * 0.01; // 10% return for index 3
      default:
        return 0;
    }
  };

  const investmentReturnRate = 1 + getInvestmentReturnRate(index);
  const investmentAmount = 50000 * quantity;

  const dataSource = [
    {
      key: "1",
      bond: <span className="font-bold" style={{ color: index === 0 ? "red" : "inherit" }}>ATM Bond #1</span>,
      term: <>{term} Year</>,
      amount: <>${new Intl.NumberFormat().format(investmentAmount)}</>,
      interest: <>{getAnnualInterestRate(term-1)*100}%</>,
      iReturnR: <>${new Intl.NumberFormat().format(getATM1(term, getAnnualInterestRate(term-1))/investmentAmount)}</>,
      iReturn: <>${new Intl.NumberFormat().format(getATM1(term, getAnnualInterestRate(term-1)))}</>,
    },
    {
      key: "1",
      bond: <span className="font-bold" style={{ color: index === 1 ? "red" : "inherit" }}>ATM Bond #2</span>,
      term: <>{term} Year</>,
      amount: <>${new Intl.NumberFormat().format(investmentAmount)}</>,
      interest: <>{getAnnualInterestRate(term-1)*100}%</>,
      // iReturn: <>${new Intl.NumberFormat().format(investmentAmount*(getAnnualInterestRate(term-1)+1))}</>,
    },
    {
      key: "1",
      bond: <span className="font-bold" style={{ color: index === 2 ? "red" : "inherit" }}>ATM Bond #3</span>,
      term: <>{term} Year</>,
      amount: <>${new Intl.NumberFormat().format(investmentAmount)}</>,
      interest: <>{getAnnualInterestRate(term-1)*100}%</>,
      // iReturn: <>${new Intl.NumberFormat().format(investmentAmount*(getAnnualInterestRate(term-1)+1))}</>,
    },
  ];

  const columns = [
    {
      title: "Bond Name",
      dataIndex: "bond",
      key: "bond",
    },
    {
      title: "Term",
      dataIndex: "term",
      key: "term",
    },
    {
      title: "Principal",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Annual Interest",
      dataIndex: "interest",
      key: "interest",
    },
    {
      title: "Investment Return Rate",
      dataIndex: "iReturnR",
      key: "iReturnR",
    },
    {
      title: "Total Principal and Interest:",
      dataIndex: "iReturn",
      key: "iReturn",
    },
  ];

  const marks: SliderSingleProps["marks"] = {
    1: "1",
    2: "2",
    3: "3",
  };

  const handleQuantityChange = (value: number | null) => {
    if (value !== null) {
      setQuantity(value);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleTerm = (value: number) => {
    console.log(term);
    setTerm(value);
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {/* <div>
        <h2 className="md:hidden md:text-xl text-xl font-bold py-1 tracking-wider underline">
          ATM Bond #{index + 1}
        </h2>
      </div>
      <div>
        <h2 className="md:text-xl text-lg py-1">
          Investment amount:{" "}
          <span className="text-darkBlue">${investmentAmount}</span>
        </h2>
      </div>

      {index === 0 && (
        <div>
          <h2 className="md:text-xl text-lg py-1 capitalize">
            Pay by Monthly:{" "}
            <span className="text-darkBlue">Up to ${investmentMonthly}</span>
          </h2>
        </div>
      )}

      {index === 1 && (
        <div className="">
          <h2 className="md:text-xl text-lg py-1 capitalize">
            first six month:{" "}
            <span className="text-darkBlue">${investmentFixMonthly}</span>
          </h2>
          <h2 className="md:text-xl text-lg py-1 capitalize">
            start in the seventh:{" "}
            <span className="text-darkBlue">Up to ${investmentMonthly}</span>
          </h2>
        </div>
      )}
      {index === 2 && (
        <div>
          <h2 className="md:text-xl text-lg py-1 capitalize">
            Pay by Monthly:{" "}
            <span className="text-darkBlue">${investmentFixMonthly}</span>
          </h2>
        </div>
      )} */}

      {/* <div>
        <h2 className="md:text-xl text-lg py-1">
          Total Principal and Interest:{" "}
          <span className="text-darkBlue">${investmentReturn}</span>
        </h2>
      </div> */}
      <div className="col-span-3 px-3 w-full">
        <p className="font-bold text-xl">Choose Your Investment Term:</p>
        <div className="">
          <Slider
            min={1}
            max={3}
            onChange={handleTerm}
            value={term}
            marks={marks}
            tipFormatter={null}
          />
        </div>
        <div className="flex justify-between">
          <p className="text-start text-sm capitalize">
            1 Year <br /> (up to {getAnnualInterestRate(0)*100}% Interest Rate)
          </p>
          <p className="text-sm capitalize text-center">
            2 Year <br /> (up to {getAnnualInterestRate(1)*100}% Interest Rate)
          </p>
          <p className="text-end text-sm font-bold capitalize">
            3 Year <br /> (up to <span className="text-green">{getAnnualInterestRate(2)*100}%</span>{" "}
            Interest Rate)
          </p>
        </div>
      </div>
      <div className="py-1 col-span-1">
        <p className="font-bold text-xl">Quantity:</p>
        <div className="flex">
          <Button type="text" onClick={handleDecrement}>
            <MinusOutlined />
          </Button>
          <div>
            <InputNumber
              size="large"
              min={1}
              max={100000}
              defaultValue={1}
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
          <Button type="text" onClick={handleIncrement}>
            <PlusOutlined />
          </Button>
        </div>
      </div>
      <div className="col-span-4">
        <Table dataSource={dataSource} columns={columns} pagination={false}/>
      </div>
    </div>
  );
}
