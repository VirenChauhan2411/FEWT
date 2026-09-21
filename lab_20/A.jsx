import React from "react";
import B from "./B";

function A(props) {
  return (
    <>
      <h2>Name Demo</h2>
      <B name={props.name} setName={props.setName} />
    </>
  );
}

export default A;
