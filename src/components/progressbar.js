import React from "react";

function progressbar(props) {
  const width = (props.qno / props.noofquestions) * 300;
  return (
    <div className="container">
      <div className="progressbar">
        <div className="text">Reading Section</div>
        <div className="outerbar">
          <div className="innerbar" style={{ width: width }}></div>
        </div>
        <div className="text">NO of Questions:{props.noofquestions}</div>
      </div>
    </div>
  );
}

export default progressbar;
