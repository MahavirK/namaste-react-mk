import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About Us page</h1>
        <h2>This is Namaste React Web series</h2>

        <UserClass />
      </div>
    );
  }
}

export default About;
