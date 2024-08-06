import React from "react";
import { Form, Button, Checkbox, Input } from "antd";
// import { FormInstance } from "antd";
// import QModComponent from "../../components/QModWidget";
// import QModFooter from "../../components/QModFooter";

//TODO: IMPLEMENT FORMS
const IREmailAlertsPage = () => {
  const handleFinish = (values:any) => {
    console.log('Form submitted:', values);
  };

  return (
    <div className="container" id="container">
      <div className="flex w-full justify-center bg-slate-400">
        <div className="row">
          <h1 className="text-white">Email Alerts</h1>
        </div>
      </div>
      <div className="row">
        <h1>Subscribe to our Investor Email Alerts</h1>
        <p className="mb-4">
          If you are interested in working with AEHL and joining us in our
          exciting future, please fill in the information below.
        </p>
        <Form
          layout="vertical"
          name="subscribe"
          method="POST"
          data-netlify="true"
          className="max-w-lg"
          onFinish={handleFinish}
        >
          <input type="hidden" name="form-name" value="subscribe" />
          <div className="flex space-x-4">
            <Form.Item
              label="First Name"
              name="first-name"
              className="smalltext"
              style={{ flex: 1 }}
            >
              <Input name="first-name" placeholder="John" />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="last-name"
              className="smalltext"
              style={{ flex: 1 }}
            >
              <Input name="last-name" placeholder="Doe" />
            </Form.Item>
          </div>

          <Form.Item label="Email Address" name="email" className="smalltext">
            <Input placeholder="john.doe@gmail.com" />
          </Form.Item>

          <div>
            <h3 className="mb-4">
              Select the alerts that you would like to recieve:{" "}
            </h3>
            <Form.Item name="alerts" className="flex flex-col">
              <Checkbox.Group>
                <Checkbox value="select-all" className="text">
                  Select All
                </Checkbox>
                <Checkbox value="news-releases" className="text">
                  News Releases
                </Checkbox>
                <Checkbox value="events-presentations" className="text">
                  Events and Presentations
                </Checkbox>
                <Checkbox value="sec-filings-reports" className="text">
                  SEC Filings and Reports
                </Checkbox>
                <Checkbox value="stock-information" className="text">
                  Stock Information
                </Checkbox>
              </Checkbox.Group>
            </Form.Item>
          </div>
          <Button className="text" type="primary" htmlType="submit">
            Subscribe
          </Button>
        </Form>
      </div>
      <div
        className="bg-local flex w-full justify-center"
        style={{
          backgroundImage:
            "url('https://www.aehlus.com/png/img12.f4ed389f.png')",
          backgroundSize: "cover",
        }}
      >
        <Form
          // layout="vertical"
          name="unsubscribe-form"
          method="POST"
          data-netlify="true"
          className="row"
          onFinish={handleFinish}
        >
          <input type="hidden" name="form-name" value="unsubscribe" />

          <h1>Unsubscribe from Email Alerts</h1>
          <div className="max-w-lg">
            <h2 className="mb-4">Enter your email address below.</h2>
            <div>
              <Form.Item
                label="Email Address"
                name="email"
                className="smalltext"
              >
                <input name="email" placeholder="john.doe@gmail.com" />
              </Form.Item>
            </div>
          </div>
          <Button className="text" 
            type="primary" 
            htmlType="submit">
            Unsubscribe
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default IREmailAlertsPage;
