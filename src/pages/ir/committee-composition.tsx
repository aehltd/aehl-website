import CommitteeCompositionTable from "@/components/ir/CommitteeCompositionTable";

export default function IRCommitteeComposition() {
  return (
    <div className="container">
      <div className="flex w-full justify-center bg-slate-400">
        <div className="row">
          <h1 className="text-white">Committee Composition</h1>
        </div>
      </div>
      <div className="row">
        {/* <h1>Committee Composition</h1>
        <p>
          Below is the list of the Board of Directors and their positions in
          each committee.
        </p> */}
        <div className="my-4">
          <div className="flex space-x-2">
            <p className="text-black font-bold">C </p>
            <p>-</p>
            <p>Chairman</p>
          </div>
          <div className="flex space-x-2">
            <p className="text-slate-500 font-bold">M</p>
            <p>-</p>
            <p>Member</p>
          </div>
        </div>
        <CommitteeCompositionTable />
      </div>
    </div>
  );
}
