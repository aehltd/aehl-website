import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";

type DocumentType = {
  name: string;
  url: string;
};

const documents: DocumentType[] = [
  {
    name: "The Code of Ethics",
    url: "https://res.cloudinary.com/aehl/image/upload/v1724337827/Antelope_Enterprise_-_Code_of_Ethics_yrnrnc.pdf",
  },
  {
    name: "The Charter of the Audit Committee",
    url: "https://res.cloudinary.com/aehl/image/upload/v1724337827/Antelope_Enterprise_-_Audit_Committee_Charter_adf130.pdf",
  },
  {
    name: "The Charter of the Nomination Committee",
    url: "https://res.cloudinary.com/aehl/image/upload/v1724337827/Antelope_Enterprise_-_Governance_and_Nominating_Committee_Charter_kdcaur.pdf",
  },
  {
    name: "The Charter of the Compensation Committee",
    url: "https://res.cloudinary.com/aehl/image/upload/v1724337828/Antelope_Enterprise_-_Compensation_Committee_Charter_-_Amended_Restated_ts9arz.pdf",
  },
  {
    name: "Whistleblower Policy of Antelope Enterprise",
    url: "https://res.cloudinary.com/aehl/image/upload/v1724337827/Antelope_Enterprise_-_Whistleblower_Policy_esfsyr.pdf"
  },
];

export default function DocumentsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="max-w-full divide-y divide-gray-200 table-auto w-full">
        <thead className="bg-midnight2 text-white">
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
              className={index % 2 === 0 ? "bg-white" : "bg-gray-200"}
            >
              <td className="px-6 py-3 whitespace-nowrap text text-midnight text-start">
                {document.name}
              </td>
              <td className="flex flex-row-reverse px-6 py-3 whitespace-nowrap items-center justify-start space-x-10">
                <Button
                  type="link"
                  icon={<DownloadOutlined />}
                  href={document.url}
                  target="_blank"
                  size="large"
                  className = "text-midnight"
                ></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
