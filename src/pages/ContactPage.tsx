import { Button, Input } from "antd";
import React from "react";

const ContactPage = () => {
  return (
    <div id="container" className="container">
      <div
        className="bg-local flex w-full h-[65vh] justify-center"
        style={{
          backgroundImage:
            "url('https://www.aehlus.com/png/img3.0cd01d99.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-white text-7xl mb-6 drop-shadow-lg">Join AEHL</h1>
        </div>
      </div>
      <div className="flex row flex-col">
        <h1>Contact Us</h1>
        <div className="flex flex-col-reverse space-y-4 md:space-y-0 md:flex-row md:space-x-8">
          <div className="flex flex-col md:w-[2/5] mt-4">
            <div className="flex flex-col mt-auto h-4/5 justify-evenly">
              <div>
                <h2>Phone</h2>
                <p>+1 (838) 500 - 8888</p>
              </div>
              <div>
                <h2>Office</h2>
                <p>
                  Suite 7540, The Empire State Building, 350 Fifth Ave, New
                  York, New York, 10118
                </p>
              </div>
              <div>
                <h2>Hours</h2>
                <p>Monday–Friday</p>
                <p>10am–6pm</p>
              </div>
              {/* <div>
                <h2>Investor Relations</h2>
                <p>+1 (646) 694 - 8538</p>
                <p>ir@aehltd.com</p>
              </div> */}
            </div>
          </div>
          <div className="w-full md:w-[60%] h-[60vh] my-4">
            <iframe
              title="AEHL Location"
              src="https://maps.google.com/maps?q=350+5th+Ave,+New+York,+NY+10118&hl=en&z=17&output=embed"
              className="h-full w-full"
            ></iframe>
          </div>
        </div>
      </div>
      <div
        className="flex bg-local w-full justify-center"
        style={{
          backgroundImage:
            "url('https://www.aehlus.com/png/img12.f4ed389f.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col row items-center">
          <p className="m-4">
            If you have any inquiries, feel free to send us an email with the
            form below.
          </p>
          <div className="p-4 max-w-lg border bg-white rounded-xl shadow-lg">
            <form
              name="contact-form"
              method="POST"
              data-netlify="true"
              className="space-y-4"
            >
              {/* Hidden input for Netlify */}
              <input type="hidden" name="form-name" value="contact-form" />

              <div className="flex space-x-4">
                <div>
                  <label htmlFor="first-name">First Name</label>
                  <Input name="first-name" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="last-name">Last Name</label>
                  <Input name="last-name" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label htmlFor="email">Email Address</label>
                <Input name="email" placeholder="john.doe@gmail.com" />
              </div>

              <div>
                <label htmlFor="message">Message</label>
                <Input.TextArea
                  name="message"
                  rows={4}
                  placeholder="Enter your message..."
                />
              </div>

              <div className="flex w-full justify-center">
                <Button type="primary" htmlType="submit">
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
