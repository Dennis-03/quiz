import React from "react";

function progressbar(props) {
  return (
    <div className="progressbar">
      <div>Reading Section</div>
      <div>{props.qno}</div>
      <div>NO of Questions</div>
    </div>
  );
}

export default progressbar;
