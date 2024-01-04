import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { AppProvider } from "./AppContext";

function App() {
  return (
    <div className={`container mx-auto`}>
      <AppProvider>
        <div className={`sticky top-0 z-10`}>
          <Header></Header>
        </div>
        <Outlet></Outlet>
      </AppProvider>
    </div>
  );
}

export default App;
