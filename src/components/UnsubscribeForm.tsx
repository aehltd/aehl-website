import React from "react";
import encode from "../utils/encode";
import useForm from "./hooks/useForm";
import { Form, Input, Button } from "antd";

const UnsubscribeForm = () => {
  const formName = "unsubscribe";

  const { handleSubmit } = useForm(formName);

  return (
    <>
      <form
        name={formName}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        hidden
      >
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>

      <Form layout="vertical" name="uf" method="post" onFinish={handleSubmit}>
        <Form.Item
          label="Don't fill this out"
          className={`hidden`}
          style={{ display: `none` }}
          name="bot-field"
        >
          <Input type={`hidden`} />
        </Form.Item>

        <h1>Unsubscribe from Email Alerts</h1>
        <div className="max-w-lg">
          <h2 className="mb-4">Enter your email address below.</h2>
          <div>
            <Form.Item
              label="Email Address"
              name="email"
              className="smalltext"
              rules={[{ required: true, message: `Please enter your email.` }]}
            >
              <Input name="email" placeholder="john.doe@gmail.com" />
            </Form.Item>
          </div>
        </div>
        <Button className="text" type="primary" htmlType="submit">
          Unsubscribe
        </Button>
      </Form>
    </>
  );
};

export default UnsubscribeForm;
