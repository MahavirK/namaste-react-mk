import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const Title = () => <h1 className="head">Namaste React jsx 🚀</h1>;

//React Functional Component
const HeadingComponent = () => (
  <div>
    <Title />
    <h1>Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
