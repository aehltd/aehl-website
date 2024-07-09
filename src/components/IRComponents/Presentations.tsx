import React from "react";

const PresentationsRow = () => {
  return (
    <div>
      <h1>Company Presentation</h1>
      <embed
        src={require("../../assets/AEHL Company Presentation June 2024.pdf")}
        type="application/pdf"
        width="100%"
        height="600px"
        className="mt-4"
      />
    </div>
  );
};

export default PresentationsRow;