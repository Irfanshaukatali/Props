import React from "react";

export default function Search(props) {
  console.log(props)
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  );
}