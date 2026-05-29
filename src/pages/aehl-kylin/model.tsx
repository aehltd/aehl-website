import { Collapse } from "antd";
import type { CollapseProps } from "antd";

const items: CollapseProps['items'] = [
  {
    key: "1",
    label: "Talent Matching",
    children: <p>With a pool of over 800,000 livestreaming hosts and influencers, we provide businesses with tailored collaboration solutions.</p>,
  },
  {
    key: "2",
    label: "KylinCloud BBP Model",
    children: <p>We believe we are the industry&apos;s first to introduce the KylinCloud BBP (Business-to-Business-to-Person) model, making it easier than ever for businesses to connect with the right talents and manage their ecommerce campaigns.</p>,
  },
  {
    key: "3",
    label: "Full-Process Monitoring",
    children: <p>Our comprehensive monitoring system ensures the safety and security of tasks and funds, giving our clients peace of mind throughout the collaboration process.</p>,
  },
  {
    key: "4",
    label: "Cost-Effective Solutions",
    children: <p>On average, we help our clients save over 8% in costs, making our services not only efficient but also cost-effective.</p>,
  }
];

export default function KylinModel() {
  return (
    <div id="container" className="container">
      <div
        className="bg-local flex w-full h-[40vh] bg-center justify-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/aehl/image/upload/f_auto,q_auto,w_1920,c_limit/v1724428457/image5-1_vawwhv.jpg')",
          backgroundSize: "cover ",
        }}
      ></div>
      <div className="flex row flex-col">
        <h1 className="tracking-wider font-semibold">Business Model</h1>
        <div className="flex flex-col-reverse md:flex-row">
          <p className="flex md:w-1/2 items-center">
            At AEHL, we focus on enabling B-end manufacturers and C-end talents
            to realize their economic value through live streaming platforms,
            social e-commerce, online education, and other platforms. We provide
            integrated technology and service support for the three parties in
            this new business ecosystem, offering business opportunity matching,
            employment security, and business support services for product
            manufacturers and new micro-entrepreneurs.
          </p>
          <div className="flex items-center justify-center my-4 md:my-0 md:ml-8 md:w-1/2">
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "0px",
                paddingBottom: "56.250%",
              }}
            >
              <iframe
                title="Kylin Model Video"
                allow="fullscreen"
                allowFullScreen
                height="100%"
                src="https://streamable.com/e/i4rur7"
                width="100%"
                style={{
                  border: "none",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  left: "0px",
                  top: "0px",
                  overflow: "hidden",
                }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-local w-full justify-center">
        <div className="flex row flex-col">
          <h1 className="tracking-wider font-semibold">Our Services</h1>
          <div className="flex flex-col md:flex-row items-center justify-center"
                style={{height:"36vh"}}>
            <div className="flex items-center justify-center my-4 md:mr-8 w-full md:w-1/2">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "0px",
                  paddingBottom: "56.250%",
                }}
              >
                <iframe
                  title="Kylin BBP Video"
                  allow="fullscreen"
                  allowFullScreen
                  height="100%"
                  src="https://streamable.com/e/v3zyhb?"
                  width="100%"
                  style={{
                    border: "none",
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    left: "0px",
                    top: "0px",
                    overflow: "hidden",
                  }}
                ></iframe>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <Collapse accordion items={items} size="large">
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};