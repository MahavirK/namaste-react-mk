import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Ignited the React app using parcel!🚀"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
