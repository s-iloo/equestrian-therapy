import React from "react";
import "./App.css";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

function App() {
  return <p>Cleanedup React App</p>;
}

export default App;
