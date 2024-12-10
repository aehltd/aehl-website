import AehlKylinBanner from "@/components/banner/AehlKylinBanner";
import AehlKylinStatistic from "@/components/aehlKylin/aehlKylinStatistic";
import AehlKylinInfo from "@/components/aehlKylin/aehlKylinInfo";

export default function KylinOverview() {
  return (
    <div id="container" className="container">
      <div className="xl:w-[120vh] w-full pb-10">
        <AehlKylinBanner />
      </div>

      <div className="row">
        <AehlKylinStatistic />
      </div>

      <div className="row">
        <AehlKylinInfo />
      </div>

      <div className="bg-gray-400 flex w-full justify-center">
        <div className="row text-center">
          <h1 className="text-white font-semibold mb-8">
            Collaborating Livestreaming Platforms
          </h1>
          <div className="flex w-full flex-col 4xl:flex-row justify-center 4xl:justify-evenly items-center">
            <div className="flex w-full flex-col md:flex-row 4xl:w-1/2 justify-evenly items-center">
              <div className="flex w-full justify-evenly items-center">
                <img
                  src="https://res.cloudinary.com/aehl/image/upload/v1724428447/%E5%B0%8F%E7%BA%A2%E4%B9%A6_d5u9yo.png"
                  alt="小红书"
                />
                <img
                  src="https://res.cloudinary.com/aehl/image/upload/v1724428451/%E5%BF%AB%E6%89%8B_fvsuyq.png"
                  alt="快手"
                />
              </div>
              <div className="flex w-full justify-evenly items-center">
                <img
                  src="https://res.cloudinary.com/aehl/image/upload/v1724428451/%E4%BA%AC%E4%B8%9C_b5u9vi.png"
                  alt="京东"
                />
                <img
                  src="https://res.cloudinary.com/aehl/image/upload/v1724428453/%E4%BB%8A%E6%97%A5%E5%A4%B4%E6%9D%A1_vfu7wc.png"
                  alt="今日头条"
                />
              </div>
            </div>
            <div className="flex w-full flex-col md:flex-row 4xl:w-1/2 justify-evenly items-center">
              <div className="flex w-full justify-evenly items-center">
                <img
                  src="https://res.cloudinary.com/aehl/image/upload/v1724428449/TikTok_aepoag.png"
                  alt="TikTok"
                />
                <img
                  src="https://res.cloudinary.com/aehl/image/upload/v1724428448/%E6%8A%96%E9%9F%B3_sctelm.png"
                  alt="抖音"
                />
              </div>
              <div className="flex w-full justify-evenly items-center">
                <img
                  src="https://res.cloudinary.com/aehl/image/upload/v1724428449/%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9_idd9e3.png"
                  alt="哔哩哔哩"
                />
                <img
                  src="https://res.cloudinary.com/aehl/image/upload/v1724428452/%E8%A5%BF%E7%93%9C%E8%A7%86%E9%A2%91_jzim14.png"
                  alt="西瓜视频"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
