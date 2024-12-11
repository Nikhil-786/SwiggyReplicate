import { useState } from "react";

const Contact = (props) => {
  const [count] = useState(0);
  return (
    <div className=" border-black border-2 w-60 m-96 ">
      <h1>Count:{count}</h1>
      <h1>Name: {props.name}</h1>
      <p>
        Address: Agarwal Paramount Building No 2 E wing Flat No-904 Virar west
      </p>
      <h3>Phone No-9022904210</h3>
    </div>
  );
};

export default Contact;
