import React from "react";
import "./style.css";
import Main from "./components/Main"
import Header from "./components/Header"

export default function App() {
  let name="hello"
  return (
    <div>
      <Main/>
      <Header/>
    </div>
  );
}
