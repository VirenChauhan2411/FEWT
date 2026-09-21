import React from 'react'

function EventHendling() {
  return (
    <>
    <button onClick={()=>{
        alert("SIngle click active")
    }}>click</button>
        <button onDoubleClick={()=>{
        alert("double click active")}}>Double Click</button>
    </>
  )
}

export default EventHendling
