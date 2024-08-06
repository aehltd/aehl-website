import React from "react";
import SubscribeForm from "../../components/SubscribeForm";
import UnsubscribeForm from "../../components/UnsubscribeForm";

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
        <SubscribeForm />
      </div>
      <div
        className="bg-local flex w-full justify-center"
        style={{
          backgroundImage:
            "url('https://www.aehlus.com/png/img12.f4ed389f.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="row">
          <UnsubscribeForm />
        </div>
      </div>
    </div>
  );
};

export default IREmailAlertsPage;
