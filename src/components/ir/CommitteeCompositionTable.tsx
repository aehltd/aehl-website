type CommitteeItem = {
  honorific: string;
  name: string;
  position: string;
  //The following are committee positions, with null, Chairperson, and Member
  auditCommittee?: string;
  compensationCommittee?: string;
  nominatingCommittee?: string;
};

const Committee: CommitteeItem[] = [
  {
    honorific: "Mr.",
    name: "Weilai Zhang",
    position: "Chairman",
  },
  {
    honorific: "Ms.",
    name: "Tingting Zhang",
    position: "Director & Corp. Secretary",
  },
  {
    honorific: "Mr.",
    name: "Ishak Han",
    position: "Independent Director",
    auditCommittee: "M",
    compensationCommittee: "M",
    nominatingCommittee: "M",
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
  {
    honorific: "Mr.",
    name: "Dian Zhang",
    position: "Independent Director",
    auditCommittee: "C",
    compensationCommittee: "M",
    nominatingCommittee: "M",
  },
  {
    honorific: "Mr.",
    name: "Houyou Zhang",
    position: "Director",
  },
  {
    honorific: "Mr.",
    name: "Junjie Dong",
    position: "Director",
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
        <thead className="bg-slate-400 text-white">
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
                className={index % 2 === 0 ? "bg-white" : "bg-slate-100"}
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
