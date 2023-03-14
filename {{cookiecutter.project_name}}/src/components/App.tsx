import React from "react";
import logo from "../assets/logo.svg";
import "../baseStyles.css";

const App: React.FC = () => {
  return (
    <div>
      <img src={logo} />
      <h2>My Awesome Cortex Plugin</h2>
    </div>
  );
};

export default App;
