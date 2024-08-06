import React, { useState } from "react";
import useForm from "./hooks/useForm";
import { Form, Input, Checkbox, Button } from "antd";
import { CheckboxChangeEvent, CheckboxProps } from "antd/es/checkbox";

const alertOptions = [
  { value: "news-releases", label: "News Releases" },
  { value: "events-presentations", label: "Events and Presentations" },
  { value: "sec-filings-reports", label: "SEC Filings and Reports" },
  { value: "stock-information", label: "Stock Information" },
];

const SubscribeForm = () => {
  const { handleFinish } = useForm('subscribe');
  const [form] = Form.useForm();

  const [checkAll, setCheckAll] = useState<boolean>(false);

  const onCheckAllChange: CheckboxProps["onChange"] = (
    e: CheckboxChangeEvent
  ) => {
    const newList = e.target.checked
      ? [
          "news-releases",
          "events-presentations",
          "sec-filings-reports",
          "stock-information",
        ]
      : [];
    form.setFieldValue("alerts", newList);
    setCheckAll(e.target.checked);
  };

  const onAlertChange = (checkedList: string[]) => {
    setCheckAll(checkedList.length === alertOptions.length);
    form.setFieldsValue({ alerts: checkedList });
  };

  return (
    <Form
      form={form}
      layout="vertical"
      className="max-w-lg"
      onFinish={handleFinish}
    >
      <div className="flex space-x-4">
        <Form.Item
          label="First Name"
          name="first-name"
          className="smalltext"
          rules={[{ required: true, message: "Please enter your first name." }]}
          style={{ flex: 1 }}
        >
          <Input name="first-name" placeholder="John" />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="last-name"
          className="smalltext"
          rules={[{ required: true, message: "Please enter your last name." }]}
          style={{ flex: 1 }}
        >
          <Input name="last-name" placeholder="Doe" />
        </Form.Item>
      </div>

      <Form.Item
        label="Email Address"
        name="email"
        rules={[
          { required: true, message: "Please enter your email address." },
          { type: "email", message: "Please enter a valid email address." },
        ]}
        className="smalltext"
      >
        <Input placeholder="john.doe@gmail.com" />
      </Form.Item>

      <div>
        <h3 className="mb-4">
          Select the alerts that you would like to receive:
        </h3>
        <Checkbox
          //   indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
        >
          Select all
        </Checkbox>
        <Form.Item
          name="alerts"
          rules={[
            {
              validator: (_, value) =>
                value && value.length > 0
                  ? Promise.resolve()
                  : Promise.reject(
                      new Error("Please select at least one alert")
                    ),
            },
          ]}
        >
          <Checkbox.Group options={alertOptions} onChange={onAlertChange} />
        </Form.Item>
      </div>
      <Button className="text" type="primary" htmlType="submit">
        Subscribe
      </Button>
    </Form>
  );
};

export default SubscribeForm;
