import { Statistic} from 'antd';

export default function AehlBtcStatistic() {
    return(
        <div className="grid md:grid-cols-4 grid-cols-2">
        <div className="flex md:justify-center justify-start items-center md:col-span-1 col-span-2">
            <h3 className="font-bold">Statistic Info:</h3>
        </div>
        <div className="flex md:justify-center justify-start">
            <Statistic title="Active Users" value={112893} />
        </div>
        <div className="flex md:justify-center justify-start">
            <Statistic title="Monthly Active Users" value={112893} />
        </div>
        <div className="flex md:justify-center justify-start">
            <Statistic title="Video Play Time (Mins)" value={2000} />
        </div>
    </div>
    );
}