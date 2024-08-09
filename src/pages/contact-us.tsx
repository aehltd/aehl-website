import ContactForm from "@/components/forms/ContactForm";

export default function ContactUs() {
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
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};
