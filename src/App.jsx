import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import EmployeeForm from "./Component/EmployeeForm";

export default function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-Theme", theme);
  }, [theme]);

  const changeTheme = () => {
    setTheme((prev) => (prev == "light" ? "dark" : "light"));
  };

  return (
    <>
      <h1 style={{ textAlign: "Center" }}>Emplyoee Onbording</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          alignItems: "Center",
          height: "50px",
          paddingRight: "40px",
        }}
      >
        <button onClick={changeTheme}>
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>
      <EmployeeForm />
    </>
  );
}
