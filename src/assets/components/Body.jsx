import React from "react";
import Searchbar from "./Searchbar";

export default function Body() {
  const bodyStyle = {
    backgroundColor: "#fefefe",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style={bodyStyle}>
      <Searchbar />
    </div>
  );
}
