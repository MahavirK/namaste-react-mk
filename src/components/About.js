import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor() {
    super();
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent ComponentDidMount");
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Us page</h1>
        <h2>This is Namaste React Web series</h2>

        <UserClass name={"First"} />
      </div>
    );
  }
}

export default About;
