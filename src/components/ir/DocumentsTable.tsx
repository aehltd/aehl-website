import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";

type DocumentType = {
  name: string;
  url: string;
};

const documents: DocumentType[] = [
  {
    name: "The Code of Ethics",
    url: "https://aehltd.squarespace.com/s/China-Ceramics-Code-of-Ethics.pdf",
  },
  {
    name: "The Charter of the Audit Committee",
    url: "https://aehltd.squarespace.com/s/China-Ceramics-Audit-Committee-Charter.pdf",
  },
  {
    name: "The Charter of the Nomination Committee",
    url: "https://aehltd.squarespace.com/s/China-Ceramics-Governance-and-Nominating-Commtitee-Charter.pdf",
  },
  {
    name: "The Charter of the Compensation Committee",
    url: "https://aehltd.squarespace.com/s/CompensationCommitteeCharter-AmendedRestated.pdf",
  },
  {
    name: "Whistleblower Policy of China Ceramics",
    url: "https://aehltd.squarespace.com/s/China-Ceramics-Whistleblower-Policy.pdf",
  },
];

export default function DocumentsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="max-w-full divide-y divide-gray-200 table-auto w-full">
        <thead className="bg-slate-400 text-white">
          <tr>
            <th className="px-6 py-3 text-start xsmalltext text-white font-medium uppercase tracking-wider">
              Document
            </th>
            <th className="px-6 py-3 text-end xsmalltext text-white font-medium uppercase tracking-wider">
              Download
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {documents.map((document, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-slate-100"}
            >
              <td className="px-6 py-3 whitespace-nowrap text text-black text-start">
                {document.name}
              </td>
              <td className="flex flex-row-reverse px-6 py-3 whitespace-nowrap items-center justify-start space-x-10">
                <Button
                  type="link"
                  icon={<DownloadOutlined />}
                  href={document.url}
                  target="_blank"
                  size="large"
                ></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
