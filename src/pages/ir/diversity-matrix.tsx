import DiversityMatrix from "@/components/ir/DiversityMatrix";

export default function IRDiversityMatrix() {
  return (
    <div className="container">
      <div className="flex w-full justify-center bg-slate-400">
        <div className="row">
          <h1 className="text-white">Diversity Matrix</h1>
        </div>
      </div>
      <div className="row">
        <DiversityMatrix />
      </div>
    </div>
  );
};
