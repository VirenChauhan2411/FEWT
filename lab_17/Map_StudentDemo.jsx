import React from 'react'

function Map_StudentDemo() {
    const student = ["Viren","Aum","shreyashx"]
  return (
  <>
  {student.map((student , i)=>(
    <li key={i}>{student}</li>

  ))}
  </>
  )
}

export default Map_StudentDemo
