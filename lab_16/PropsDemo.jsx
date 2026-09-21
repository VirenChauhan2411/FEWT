import React from "react";

function PropsDemo() {
  return (
    <>
      <Studennt name="Viren" Rollno="102" />
    </>
  );
}
// function Studennt(props) { --> object
//   return (
//     <>
//       <h1>Student Details</h1>
//       <p>name = {props.name}</p>
//       <p>Rollno = {props.Rollno}</p>
//     </>
//   );
// }


function Studennt({name,Rollno}) { // destructring
  return (
    <>
      <h1>Student Details</h1>
      <p>name = {name}</p>
      <p>Rollno = {Rollno}</p>
    </>
  );
}
export default PropsDemo;
    