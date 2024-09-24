import { useState } from "react";
import { Button, InputNumber } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import type { InputNumberProps } from "antd";

export default function Checkout({ index }: { index: number }) {
  const [quantity, setQuantity] = useState(1);
  // const [investmentReturnRate, setInvestmentReturnRate] = useState(0);
  // const [investmentAmount, setInvestmentAmount] = useState(0);
  // const [investmentReturn, setInvestmentReturn] = useState(0);

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

  const getInvestmentMonthly = (index: number) => {
    switch (index) {
      case 0:
        return investmentAmount * 0.01 + investmentAmount / 12; 
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
  const investmentReturn = Math.round(investmentAmount * investmentReturnRate);

  const investmentMonthly = Math.round(getInvestmentMonthly(index));
  const investmentFixMonthly = Math.round(investmentAmount * 0.01);

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

  return (
    <div className="md:flex justify-between">
      <div>
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
      )}

      <div>
        <h2 className="md:text-xl text-lg py-1">
          Total Principal and Interest:{" "}
          <span className="text-darkBlue">${investmentReturn}</span>
        </h2>
      </div>
      <div className="flex py-1">
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
  );
}
