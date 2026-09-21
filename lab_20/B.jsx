import React from "react";
import C from "./C";
import { useState } from "react";
function B(props) {
    const [input , setInput] = useState(" ")
  return (
  <>
  <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
  <button onClick={()=>{props.setName(input)}}>Click</button>

  <C name={props.name} />
  </>
  )
}

export default B;
