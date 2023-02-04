import React from "react";
import "./App.css";

import Temp from "./components/Temp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
        <Route path="/success" element={<Temp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
