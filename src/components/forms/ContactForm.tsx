import useForm from "./useForm";
import { Button, Form, Input } from "antd";

export default function ContactForm() {
  const { handleFinish } = useForm("contact");

  return (
    <Form layout="vertical" onFinish={handleFinish}>
      <div className="flex space-x-4">
        <Form.Item
          label="First Name"
          name="first-name"
          rules={[{ required: true, message: "Please enter your first name." }]}
          className="smalltext"
        >
          <Input name="first-name" placeholder="John" />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="last-name"
          rules={[{ required: true, message: "Please enter your last name." }]}
          className="smalltext"
        >
          <Input name="last-name" placeholder="Doe" />
        </Form.Item>
      </div>

      <Form.Item
        label="Email Address"
        name="email"
        rules={[
          { required: true, message: "Please enter your email address." },
          {
            type: "email",
            message: "Please enter a valid email address.",
          },
        ]}
        className="smalltext"
      >
        <Input name="email" placeholder="john.doe@gmail.com" />
      </Form.Item>

      <Form.Item
        label="Message"
        name="message"
        rules={[{ required: true, message: "Please enter your message." }]}
        className="smalltext"
      >
        <Input.TextArea
          name="message"
          rows={4}
          placeholder="Enter your message..."
        />
      </Form.Item>

      <div className="flex w-full justify-center">
        <Button className="text" type="primary" htmlType="submit">
          Send
        </Button>
      </div>
    </Form>
  );
};
