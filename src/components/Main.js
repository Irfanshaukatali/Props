import React from "react";
import Contact from "./Contact"
import Landing from "./Landing"
export default function Main(props) {
  console.log(props)
  return (
    <div>
      <Contact/>
      <Landing/>
    </div>
  );
}