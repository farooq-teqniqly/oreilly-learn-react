import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <div className={`container mx-auto`}>
      <div className={`sticky top-0 z-10`}>
        <Header></Header>
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
