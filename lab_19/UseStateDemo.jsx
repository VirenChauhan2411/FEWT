import React, { useEffect, useState } from "react";

export default function UseStateDemo() {
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSecond(second + 1);
    }, 1000);
  }, [second]);

  return (
    <>
      <p>Second : {second}</p>
    </>
  );
}
