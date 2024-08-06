import React from "react";
// import encode from "../utils/encode";
// import useForm from "./hooks/useForm";
import { Form, Input, Button } from "antd";

const UnsubscribeForm = () => {
  const formName = "unsubscribe";

  const handleFinish = (values: any) => {
    // Create a form element for Netlify
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "/"; // Netlify will process the form based on the name attribute

    // Append hidden fields
    Object.keys(values).forEach((key) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = values[key];
      form.appendChild(input);
    });

    const formNameInput = document.createElement("input");
    formNameInput.type = "hidden";
    formNameInput.name = "form-name";
    formNameInput.value = formName; // Form name should match
    form.appendChild(formNameInput);

    // Submit form
    document.body.appendChild(form);
    form.submit();
  };

  return (
    <Form layout="vertical" onFinish={handleFinish}>
      <h1>Unsubscribe from Email Alerts</h1>
      <div className="max-w-lg">
        <h2 className="mb-4">Enter your email address below.</h2>
        <div>
          <Form.Item label="Email Address" name="email" className="smalltext">
            <Input name="email" placeholder="john.doe@gmail.com" />
          </Form.Item>
        </div>
      </div>
      <Button className="text" type="primary" htmlType="submit">
        Unsubscribe
      </Button>
    </Form>
  );
};

export default UnsubscribeForm;