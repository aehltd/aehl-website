import React from "react";
import { Button, Checkbox, Input } from "antd";

//NOTE: THIS IS A DEMO. SO NO FUNCTIONALITY IS ACTUALLY BEING DONE.
const IREmailAlertsPage = () => {
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
        <div className="max-w-lg space-y-4">
          <div>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <div>
                  <label className="smalltext">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="smalltext">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="smalltext">Email Address</label>
                <Input placeholder="john.doe@gmail.com" />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3>Select the alerts that you would like to recieve: </h3>
            <div className="flex flex-col">
              <Checkbox className="text" onChange={() => {}}>Select All</Checkbox>
              <Checkbox className="text" onChange={() => {}}>News Releases</Checkbox>
              <Checkbox className="text" onChange={() => {}}>Events and Presentations</Checkbox>
              <Checkbox className="text" onChange={() => {}}>SEC Filings and Reports</Checkbox>
              <Checkbox className="text" onChange={() => {}}>Stock Information</Checkbox>
            </div>
          </div>
          <Button className="text"  type="primary">Subscribe</Button>
        </div>
      </div>
      <div
        className="bg-local flex w-full justify-center"
        style={{
          backgroundImage:
            "url('https://www.aehlus.com/png/img12.f4ed389f.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="row space-y-4">
          <h1>Unsubscribe from Email Alerts</h1>
          <div className="max-w-lg">
            <h2>Enter your email address below.</h2>
            <div>
              <label>Email Address</label>
              <Input placeholder="john.doe@gmail.com" />
            </div>
          </div>
          <Button type="primary">Unsubscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default IREmailAlertsPage;
