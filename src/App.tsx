import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Home from "./home";
import ResetPassword from "./resetPassword";
import Success from "./success";

function App() {
  return (
    <>
      <ResetPassword />
      <main>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/success" element={<Success />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
