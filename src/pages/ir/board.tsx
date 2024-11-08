import BoardRow from "@/components/ir/Board";

export default function IRBoard() {
  return (
    <div id="container" className="container">
      <div className="flex w-full justify-center">
        <div className="row">
          <h1 className="text-black font-bold tracking-wider">Board of Directors</h1>
        </div>
      </div>
      <div className="row">
        <BoardRow/>
      </div>
      
    </div>
  );
}
