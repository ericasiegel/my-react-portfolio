import React from "react";
// import the syle sheet
import "./style.css";

function Wrapper(props) {
  // render the wrapper and import the properties from the destructured array
  return (
  <div className="wrapper">{props.children}</div>
  )
}

export default Wrapper;
