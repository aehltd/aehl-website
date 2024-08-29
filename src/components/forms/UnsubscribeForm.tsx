import useForm from "./useForm";
import { Form, Input, Button } from "antd";

export default function UnsubscribeForm () {
  const { handleFinish } = useForm('unsubscribe');

  return (
    <Form layout="vertical" onFinish={handleFinish}>
      <h1 className="font-bold tracking-wide">Unsubscribe from Email Alerts</h1>
      <div className="max-w-lg">
        <h2 className="mb-4">Enter your email address below.</h2>
        <div>
          <Form.Item label="Email Address" name="email" className="smalltext" rules={[
          { 
            required: true, 
            message: 'Please enter your email.' 
          },
          { 
            type: 'email', 
            message: 'Please enter a valid email.' 
          }
        ]}
      >
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