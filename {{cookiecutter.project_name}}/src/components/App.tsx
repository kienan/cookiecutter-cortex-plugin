import type React from "react";
import logo from "../assets/logo.svg";
import "../baseStyles.css";
import ErrorBoundary from "./ErrorBoundary";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <div>
        <img src={logo} />
        <h2>My Awesome Cortex Plugin</h2>
      </div>
    </ErrorBoundary>
  );
};

export default App;
