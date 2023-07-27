import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(2);
  return (
    <div className="user-card">
      <h1>UseState Count: {count}</h1>
      <h1>UseState Count2: {count2}</h1>
      <h2>Name : {name}</h2>
      <h3>Location : Ahmednagar</h3>
      <h4>Contact : @MahavirK</h4>
    </div>
  );
};

export default User;
