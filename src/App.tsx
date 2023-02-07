import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import Temp from "./components/Temp";
import Success from "./success";

Amplify.configure(awsconfig);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* /, /login, /create-account, /forgot-password, /enter-code, /reset-password, /success */}
        <Route path="/" element={<Temp />} />
        <Route path="/login" element={<Temp />} />
        <Route path="/create-account" element={<Temp />} />
        <Route path="/forgot-password" element={<Temp />} />
        <Route path="/enter-code" element={<Temp />} />
        <Route path="/reset-password" element={<Temp />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
