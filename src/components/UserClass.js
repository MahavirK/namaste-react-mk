import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        location: "",
        avatar_url: "",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/MahavirK");
    const user = await data.json();
    this.setState({ userInfo: user });
    console.log(user);
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} style={{ width: "150px" }} />
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : @MahavirK</h4>
      </div>
    );
  }
}

export default UserClass;
