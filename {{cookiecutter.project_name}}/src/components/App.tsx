import type React from "react";
import logo from "../assets/logo.svg";
import "../baseStyles.css";
import ErrorBoundary from "./ErrorBoundary";
import { useEffect } from "react";
import { getCortexContext } from "../api/Cortex";

const App: React.FC = () => {
  useEffect(() => {
    const fetchContext = async (): Promise<void> => {
      const context = await getCortexContext();
      console.log(`Cortex context:`, context);
    };

    void fetchContext();
  });

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
