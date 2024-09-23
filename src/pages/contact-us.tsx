import ContactForm from "@/components/forms/ContactForm";
import { url } from "inspector";

export default function ContactUs() {
  return (
    <div id="container" className="container">
      <div
        className="bg-top flex w-full h-[60vh] justify-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/aehl/image/upload/t_small size/v1725376615/new-york-view-with-empire-state-building_zzhpya.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-white md:text-7xl sm:text-lg mb-6 tracking-widest font-bold drop-shadow-lg">
            Join AEHL
          </h1>
        </div>
      </div>

      <div className="w-full">
        <p className="text-xxs text-end px-3">
          Designed by{" "}
          <a
            className="text-xxs"
            href="https://www.freepik.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Freepik
          </a>
        </p>
      </div>

      <div className="flex row flex-col">
        <h1 className="font-bold tracking-wide">Contact Us</h1>
        <div className="flex flex-col-reverse space-y-4 md:space-y-0 md:flex-row md:space-x-8">
          <div className="flex flex-col">
            <div className="flex flex-col justify-evenly m-4">
              <div>
                <h2 className="my-2">Phone:</h2>
                <p>+1 (838) 500 - 8888</p>
              </div>
              <div>
                <h2 className="my-2">Office:</h2>
                <p>
                  Suite 7540, The Empire State Building, 350 Fifth Ave, New
                  York, New York, 10118
                </p>
              </div>
              <div>
                <h2 className="my-2">Hours:</h2>
                <p>Monday – Friday</p>
                <p>10am – 5pm</p>
              </div>
              <div className="w-full h-[30vh] my-5">
                <iframe
                  title="AEHL Location"
                  src="https://maps.google.com/maps?q=350+5th+Ave,+New+York,+NY+10118&hl=en&z=17&output=embed"
                  className="h-full w-full"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="m-4">
              If you have any inquiries, feel free to send us an email with the
              form below.
            </p>
            <div className="p-4 max-w-lg border bg-white rounded-xl shadow-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
