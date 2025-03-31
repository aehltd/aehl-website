type CommitteeItem = {
  honorific: string;
  name: string;
  position: string;
  // Committee positions: options are null, Chairperson, or Member
  auditCommittee?: string;
  compensationCommittee?: string;
  nominatingCommittee?: string;
};

const Committee: CommitteeItem[] = [
  // {
  //   honorific: "Mr.",
  //   name: "Weilai Zhang",
  //   position: "Chairman",
  // },
  {
    honorific: "Mr.",
    name: "Ishak Han",
    position: "Chairman",
    auditCommittee: "M",
    compensationCommittee: "M",
    nominatingCommittee: "M",
  },
  {
    honorific: "Ms.",
    name: "Tingting Zhang",
    position: "Director",
  },
  {
    honorific: "Ms.",
    name: "Huashu Yuan",
    position: "Independent Director",
    auditCommittee: "M",
    compensationCommittee: "C",
    nominatingCommittee: "C",
  },
  {
    honorific: "Mr.",
    name: "Song Chungen",
    position: "Independent Director",
    auditCommittee: "M",
    compensationCommittee: "M",
    nominatingCommittee: "M",
  },
  // {
  //   honorific: "Mr.",
  //   name: "Dian Zhang",
  //   position: "Independent Director",
  //   auditCommittee: "C",
  //   compensationCommittee: "M",
  //   nominatingCommittee: "M",
  // },
    {
    honorific: "Ms.",
    name: "Ze Yang",
    position: "Director",
    auditCommittee: "C",
    compensationCommittee: "M",
    nominatingCommittee: "M",
  },
  {
    honorific: "Mr.",
    name: "Junjie Dong",
    position: "Director & Corp. Secretary",
  },
  {
    honorific: "Ms.",
    name: "Xiaoying Song",
    position: "Director",
  },
];

export default function CommitteeCompositionTable() {
  const colorItem = (item: string | undefined) => {
    if (item === "M") {
      return "text-slate-500";
    }
    if (item === "C") {
      return "text-black-700";
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="max-w-full divide-y divide-gray-200 table-auto w-full">
        <thead className="bg-midnight2 text-white">
          <tr>
            <th className="px-6 py-3 text-center xsmalltext font-medium uppercase tracking-wider">
              Director
            </th>
            <th className="px-6 py-3 text-center xsmalltext font-medium uppercase tracking-wider">
              Position
            </th>
            <th className="px-6 py-3 text-center xsmalltext font-medium uppercase tracking-wider">
              Audit Committee
            </th>
            <th className="px-6 py-3 text-center xsmalltext font-medium uppercase tracking-wider">
              Compensation Committee
            </th>
            <th className="px-6 py-3 text-center xsmalltext font-medium uppercase tracking-wider">
              Nominating Committee
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {Committee.map((item, index) => {
            return (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-200"}
              >
                <td className="border px-6 py-3 whitespace-nowrap text-center">
                  {item.honorific} {item.name}
                </td>
                <td className="border px-6 py-3 whitespace-nowrap text-center">
                  {item.position}
                </td>
                <td
                  className={`border px-6 py-3 whitespace-nowrap text-center font-bold ${colorItem(
                    item.auditCommittee
                  )}`}
                >
                  {item.auditCommittee}
                </td>
                <td
                  className={`border px-6 py-3 whitespace-nowrap text-center font-bold ${colorItem(
                    item.compensationCommittee
                  )}`}
                >
                  {item.compensationCommittee}
                </td>
                <td
                  className={`border px-6 py-3 whitespace-nowrap text-center font-bold ${colorItem(
                    item.nominatingCommittee
                  )}`}
                >
                  {item.nominatingCommittee}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
