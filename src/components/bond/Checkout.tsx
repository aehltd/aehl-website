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

  const getATM1 = (term: number, rate: number) => {
    const months = term * 12; // Total months
    let remainingPrincipal = investmentAmount; // Starting principal
    let totalPaid = 0; // Total amount paid over the term

    const monthlyRate = rate / 12; // Monthly interest rate

    const monthlyPayment = remainingPrincipal / months;

    for (let i = 1; i <= months; i++) {
      totalPaid += remainingPrincipal * monthlyRate + monthlyPayment;
      remainingPrincipal -= monthlyPayment;
    }
    return totalPaid;
  };

  const getATM2 = (term: number, rate: number) => {
    const months = term * 12; // Total months
    const hMonths = months / 2;
    let remainingPrincipal = investmentAmount; // Starting principal
    let totalPaid = 0; // Total amount paid over the term

    const monthlyRate = rate / 12; // Monthly interest rate
    const monthlyPayment = remainingPrincipal / hMonths;
    const fixMonthlyPayment = remainingPrincipal * monthlyRate;

    for (let i = 1; i <= hMonths; i++) {
      totalPaid += fixMonthlyPayment;
    }
    for (let i = 1; i <= hMonths; i++) {
      totalPaid += remainingPrincipal * monthlyRate + monthlyPayment;
      remainingPrincipal -= monthlyPayment;
    }
    return totalPaid;
  };

  const getATM3 = (term: number, rate: number) => {
    const months = term * 12; // Total months
    let remainingPrincipal = investmentAmount; // Starting principal
    let totalPaid = 0; // Total amount paid over the term

    const monthlyRate = rate / 12; // Monthly interest rate
    const fixMonthlyPayment = remainingPrincipal * monthlyRate;

    for (let i = 1; i <= months; i++) {
      totalPaid += fixMonthlyPayment;
    }
    return totalPaid + remainingPrincipal;
  };

  const investmentAmount = 50000 * quantity;

  const dataSource = [
    {
      key: "1",
      bond: (
        <span className={` ${index === 0 ? "font-bold text-darkBlue " : ""}`}>
          ATM Bond #1
        </span>
      ),
      term: (
        <span className={` ${index === 0 ? "font-bold text-darkBlue " : ""}`}>
          {term} Year
        </span>
      ),
      amount: (
        <span className={` ${index === 0 ? "font-bold text-darkBlue " : ""}`}>
          ${new Intl.NumberFormat().format(investmentAmount)}
        </span>
      ),
      interest: (
        <span className={` ${index === 0 ? "font-bold text-darkBlue " : ""}`}>
          {getAnnualInterestRate(term - 1) * 100}%
        </span>
      ),
      iReturnR: (
        <span className={` ${index === 0 ? "font-bold text-darkBlue " : ""}`}>
          {new Intl.NumberFormat().format(
            (getATM1(term, getAnnualInterestRate(term - 1)) / investmentAmount -
              1) *
              100
          )}
          %
        </span>
      ),
      iReturn: (
        <span className={` ${index === 0 ? "font-bold text-darkBlue " : ""}`}>
          $
          {new Intl.NumberFormat().format(
            getATM1(term, getAnnualInterestRate(term - 1))
          )}
        </span>
      ),
    },
    {
      key: "2",
      bond: (
        <span className={` ${index === 1 ? "font-bold text-darkBlue " : ""}`}>
          ATM Bond #2
        </span>
      ),
      term: (
        <span className={` ${index === 1 ? "font-bold text-darkBlue " : ""}`}>
          {term} Year
        </span>
      ),
      amount: (
        <span className={` ${index === 1 ? "font-bold text-darkBlue " : ""}`}>
          ${new Intl.NumberFormat().format(investmentAmount)}
        </span>
      ),
      interest: (
        <span className={` ${index === 1 ? "font-bold text-darkBlue " : ""}`}>
          {getAnnualInterestRate(term - 1) * 100}%
        </span>
      ),
      iReturnR: (
        <span className={` ${index === 1 ? "font-bold text-darkBlue " : ""}`}>
          {new Intl.NumberFormat().format(
            (getATM2(term, getAnnualInterestRate(term - 1)) / investmentAmount -
              1) *
              100
          )}
          %
        </span>
      ),
      iReturn: (
        <span className={` ${index === 1 ? "font-bold text-darkBlue " : ""}`}>
          $
          {new Intl.NumberFormat().format(
            getATM2(term, getAnnualInterestRate(term - 1))
          )}
        </span>
      ),
    },
    {
      key: "3",
      bond: (
        <span className={` ${index === 2 ? "font-bold text-darkBlue " : ""}`}>
          ATM Bond #3
        </span>
      ),
      term: (
        <span className={` ${index === 2 ? "font-bold text-darkBlue " : ""}`}>
          {term} Year
        </span>
      ),
      amount: (
        <span className={` ${index === 2 ? "font-bold text-darkBlue " : ""}`}>
          ${new Intl.NumberFormat().format(investmentAmount)}
        </span>
      ),
      interest: (
        <span className={` ${index === 2 ? "font-bold text-darkBlue " : ""}`}>
          {getAnnualInterestRate(term - 1) * 100}%
        </span>
      ),
      iReturnR: (
        <span className={` ${index === 2 ? "font-bold text-darkBlue " : ""}`}>
          {new Intl.NumberFormat().format(
            (getATM3(term, getAnnualInterestRate(term - 1)) / investmentAmount -
              1) *
              100
          )}
          %
        </span>
      ),
      iReturn: (
        <span className={` ${index === 2 ? "font-bold text-darkBlue " : ""}`}>
          $
          {new Intl.NumberFormat().format(
            getATM3(term, getAnnualInterestRate(term - 1))
          )}
        </span>
      ),
    },
  ];

  const columns = [
    {
      title: "Bond Name",
      dataIndex: "bond",
      key: "bond",
      fixed: "left",
      width: 100,
    },
    {
      title: "Term",
      dataIndex: "term",
      key: "term",
      width: 100,
    },
    {
      title: "Principal",
      dataIndex: "amount",
      key: "amount",
      width: 100,
    },
    {
      title: "Annual Interest",
      dataIndex: "interest",
      key: "interest",
      width: 100,
    },
    {
      title: "Total Investment Return Rate",
      dataIndex: "iReturnR",
      key: "iReturnR",
      width: 250,
    },
    {
      title: "Total Principal and Interest:",
      dataIndex: "iReturn",
      key: "iReturn",
      width: 220,
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
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-2 w-full py-3">
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
            1 Year <br /> ({getAnnualInterestRate(0) * 100}% Interest Rate)
          </p>
          <p className="text-sm capitalize text-center">
            2 Year <br /> ({getAnnualInterestRate(1) * 100}% Interest Rate)
          </p>
          <p className="text-end text-sm font-bold capitalize">
            3 Year <br /> ({" "}
            <span className="text-green">
              {getAnnualInterestRate(2) * 100}%
            </span>{" "}
            Interest Rate)
          </p>
        </div>
      </div>
      <div className="col-span-2 py-3">
        <p className="font-bold text-xl">Revenue Forecast:</p>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          scroll={{ x: "max-content", y: 55 * 5 }}
        />
      </div>
      <div className="py-1 col-span-1 justify-end">
        <p className="font-bold text-xl text-end">
          Principal: ${new Intl.NumberFormat().format(investmentAmount)}
        </p>
      </div>
      <div className="py-1 col-span-1">
        <div className="justify-end flex flex-col">
          <p className="font-bold text-xl text-center">Quantity:</p>
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
      </div>
    </div>
  );
}