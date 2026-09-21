import React from "react";

function Detail({ type, value = "No Value Provided" }) {
  return (
    <>
      <h3>
        {type}: {value}
      </h3>
    </>
  );
}

function Contact() {
  const mobile = 123452424;
  const email = "something@gmail.com";
  return (
    <div>
      <h1>COntact Page Here</h1>
      <Detail type="mobile" value={mobile} />
      <Detail type="email" value={email} />
      <Detail type="address" value="rajkot" />
    </div>
  );
}

export default Contact;