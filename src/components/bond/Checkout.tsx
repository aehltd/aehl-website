import { useState } from "react";
import { Button, InputNumber } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import type { InputNumberProps } from "antd";

export default function Checkout({ index }) {
  const [quantity, setQuantity] = useState(1);

  const getInvestmentReturnRate = (index) => {
    switch (index) {
      case 0:
        return 0.065; // 5% return for index 1
      case 1:
        return 0.095; // 7% return for index 2
      case 2:
        return 0.12; // 10% return for index 3
    }
  };

  const investmentReturnRate = 1 + getInvestmentReturnRate(index);
  const investmentAmount = 50000 * quantity;
  const investmentReturn = Math.round(investmentAmount * investmentReturnRate);

  const handleQuantityChange = (value) => {
    setQuantity(value);
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
    <div className="flex justify-between">
      <div>
        <h2>Investment amount: <span className="text-darkBlue">${investmentAmount}</span></h2>
      </div>
      <div>
        <h2>Total Principal and Interest: <span className="text-darkBlue">${investmentReturn}</span></h2>
      </div>
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
  );
}
