import { Divider } from "antd";

export default function Footer() {
  return (
    <div className="bg-slate-100 w-full flex items-center justify-center">
      <div className="flex flex-col row items-center">
        <div className="flex w-full justify-between items-center">
          <h3>Antelope Enterprise Holdings Limited</h3>
          <img
            src="https://images.squarespace-cdn.com/content/65f5178b7e5b446365b2d70a/a8d944de-48ba-45e1-8187-e059b49f996b/%E5%B0%8F%E9%BB%91%E8%89%B2.jpg?content-type=image%2Fpng"
            alt="logo"
          />
        </div>
        <Divider className="my-2" />
        <div className="flex w-full justify-between space-x-16">
          <div className="text-start">
            <p>Phone: +1 (838) 500 - 8888</p>
            <p>
              Office: Suite 7540, The Empire State Building, 350 Fifth Ave, New
              York, New York, 10118
            </p>
          </div>
          <p className="text-end">Copyright ©2024 AEHL</p>
        </div>
      </div>
    </div>
  );
}
