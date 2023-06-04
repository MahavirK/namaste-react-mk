import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";
import user from "./user.png";
import "./index.css";

// const header = React.createElement("div", { class: "title" }, [
//   React.createElement("h1", {}, "This is H1"),
//   React.createElement("h2", {}, "This is H3"),
//   React.createElement("h3", {}, "This is H3"),
// ]);

// const Header2 = () => (
//   <div className="title">
//     <h1>This is h1</h1>
//     <h2>This is h2</h2>
//     <h3>This is h3 1234</h3>
//   </div>
// );

// const Header3 = () => {
//   return (
//     <div className="title">
//       <h1 key="h1">This is h1</h1>
//       <h2 key="h2">This is h2</h2>
//       <h3 key="h3" style={{ color: "rebeccapurple" }}>
//         This is h3
//       </h3>
//       <Header2 />
//     </div>
//   );
// };

const Header = () => {
  return (
    <div className="header">
      <img src={logo} style={{ width: "50px", height: "50px" }}></img>

      <input placeholder="Seacrh.."></input>
      <img src={user} style={{ width: "50px", height: "50px" }}></img>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
