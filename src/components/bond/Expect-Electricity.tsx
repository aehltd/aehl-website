import { Steps } from "antd";
import { LoadingOutlined, LineChartOutlined} from '@ant-design/icons';

export default function expectElectricity() {
  return (
    <div>
      <Steps
        current={1}
        items={[
          {
            title: "Finished",
            description: "9 MW",
          },
          {
            title: "In Progress",
            description: "40 MW",
            subTitle: "By end of 2024",
            icon: <LoadingOutlined />,
          },
          {
            title: "Waiting",
            description: "120 MW",
            subTitle: "By 2025",
            icon: <LineChartOutlined />,
          },
        ]}
      />
    </div>
  );
}
