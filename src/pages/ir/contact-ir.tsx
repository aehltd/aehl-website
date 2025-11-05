import SubscribeForm from "@/components/forms/SubscribeForm";
import UnsubscribeForm from "@/components/forms/UnsubscribeForm";

export default function IRContact() {
  return (
    <div id="container" className="container">
      <div className="flex w-full justify-center">
        <div className="row">
          <h1 className="font-bold tracking-wider">IR Contact</h1>
        </div>
      </div>
      <div className="row space-y-4">
          <h2 className="underline decoration-2 decoration-sky underline-offset-4 text-lg">
            Investor inquiries should be directed towards our investor relations
            representative:
          </h2>
          <div>
            <h1 className="font-bold tracking-wide text-3xl">Janice Wang</h1>
            <p>Investor Relations Inc.</p>
          </div>
          <div>
            <h3 className="">Phone:</h3>
            <p>+1 (646) 283 - 9214</p>
          </div>
          <div>
            <h3>Email:</h3>
            <p>services@wealthfsllc.com</p>
          </div>
      </div>

      <div className="row space-y-4">
        <h1 className="font-bold tracking-wide text-3xl">Subscribe to our Investor Email Alerts</h1>
        <p className="mb-4">
          If you are interested in working with AEHL and joining us in our
          exciting future, please fill in the information below.
        </p>
        <SubscribeForm />
        <h1 className="font-bold tracking-wide text-3xl pt-4">Unsubscribe from Email Alerts</h1>
        <UnsubscribeForm />
      </div>
    </div>
  );
}
