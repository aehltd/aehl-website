import React from "react";

type MatrixDataType = {
  countryOfOfficers: string;
  foreignPrivIssuer: boolean;
  disclosureProhibitedUnderHomeLaw: boolean;
  numDirectors: number;
};

const MatrixData: MatrixDataType = {
  countryOfOfficers: "China",
  foreignPrivIssuer: true,
  disclosureProhibitedUnderHomeLaw: false,
  numDirectors: 9,
};

type GenderDataType = {
  numFemale: number;
  numMale: number;
  numNonBinary: number;
  numNotDisclosed: number;
};

const GenderData: GenderDataType = {
  numFemale: 2,
  numMale: 7,
  numNonBinary: 0,
  numNotDisclosed: 0,
};

type DemographicsDataType = {
  underrepresentedAtHomeNum: number;
  LGBTQNum: number;
  didNotDiscloseBG: number;
};

const DemographicsData: DemographicsDataType = {
  underrepresentedAtHomeNum: 0,
  LGBTQNum: 0,
  didNotDiscloseBG: 0,
};

const DiversityMatrix = () => {
  return (
    <div>
        <div className="overflow-x-auto">
      <table className="max-w-full divide-y divide-gray-200 table-auto w-full">
        <thead className="bg-slate-400 text-white">
          <tr>
            <th
              colSpan={2}
              className="px-6 py-3 text-center xsmalltext text-white font-medium uppercase tracking-wider"
            >
              Board Diversity Matrix
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 text text-black whitespace-nowrap">
              Country of Principal Executive Officers
            </td>
            <td className="px-6 py-4 text text-black text-center whitespace-nowrap">
              {MatrixData.countryOfOfficers}
            </td>
          </tr>
          <tr className="bg-slate-100">
            <td className="px-6 py-4 text text-black whitespace-nowrap">
              Foreign Private Issuer
            </td>
            <td className="px-6 py-4 text text-black text-center whitespace-nowrap">
              {MatrixData.foreignPrivIssuer ? "Yes" : "No"}
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 text text-black whitespace-nowrap">
              Disclosure Prohibited Under Home Country Law
            </td>
            <td className="px-6 py-4 text text-black text-center whitespace-nowrap">
              {MatrixData.disclosureProhibitedUnderHomeLaw ? "Yes" : "No"}
            </td>
          </tr>
          <tr className="bg-slate-100">
            <td className="px-6 py-4 text text-black whitespace-nowrap">Number of Directors</td>
            <td className="px-6 py-4 text text-black text-center whitespace-nowrap">
              {MatrixData.numDirectors}
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      <div className="overflow-x-auto">
      <table className="max-w-full divide-y divide-gray-200 table-auto w-full">
        <thead className="bg-slate-400 text-white">
          <tr>
            <th className="px-6 py-3 text-start xsmalltext text-white font-medium uppercase tracking-wider">
              Part I: Gender Identity
            </th>
            <th className="px-6 py-3 text-center xsmalltext text-white font-medium uppercase tracking-wider">
              Female
            </th>
            <th className="px-6 py-3 text-center xsmalltext text-white font-medium uppercase tracking-wider">
              Male
            </th>
            <th className="px-6 py-3 text-center xsmalltext text-white font-medium uppercase tracking-wider">
              Non-Binary
            </th>
            <th className="px-6 py-3 text-center xsmalltext text-white font-medium uppercase tracking-wider">
              Not Disclosed
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 text text-black text-start whitespace-nowrap">
              Number of Directors
            </td>
            <td className="px-6 py-4 text text-black text-center whitespace-nowrap">
              {GenderData.numFemale}
            </td>
            <td className="px-6 py-4 text text-black text-center whitespace-nowrap">
              {GenderData.numMale}
            </td>
            <td className="px-6 py-4 text text-black text-center whitespace-nowrap">
              {GenderData.numNonBinary}
            </td>
            <td className="px-6 py-4 text text-black text-center whitespace-nowrap">
              {GenderData.numNotDisclosed}
            </td>
          </tr>
        </tbody>
      </table>
      </div>

      <div className="overflow-x-auto">
      <table className="max-w-full divide-y divide-gray-200 table-auto w-full">
        <thead className="bg-slate-400 text-white">
          <tr>
            <th
              colSpan={2}
              className="px-6 py-3 text-left xsmalltext text-white font-medium uppercase tracking-wider"
            >
              Part II: Demographic Background
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 text text-black whitespace-nowrap">
              Underrepresented Individual at Home Country Jurisdiction
            </td>
            <td className="px-6 py-4 text text-black whitespace-nowrap">
              {DemographicsData.underrepresentedAtHomeNum}
            </td>
          </tr>
          <tr className="bg-slate-100">
            <td className="px-6 py-4 text text-black whitespace-nowrap">LGBTQ+</td>
            <td className="px-6 py-4 text text-black whitespace-nowrap">
              {DemographicsData.LGBTQNum}
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 text text-black whitespace-nowrap">
              Did Not Disclose Demographic Background
            </td>
            <td className="px-6 py-4 text text-black whitespace-nowrap">
              {DemographicsData.didNotDiscloseBG}
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default DiversityMatrix;
