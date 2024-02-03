import React from "react";
import { MdOutlineSearch } from "react-icons/md";
import { BiSolidMicrophone } from "react-icons/bi";

import { SiGooglelens } from "react-icons/si";

export default function Searchbar() {
  const searchBarStyle = {
    width: "800px",
    height: "45px",
    backgroundColor: "#efecec",
    boxShadow: "5px 5px 2px rgba(0,0,0,0.5)",
    borderRadius: "25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  };
  const searchIconStyle = {
    width: "25px",
    height: "25px",
    color: "#5F6368",
    margin: "0",
    padding: "0",
    position: "absolute",
    left: "20px",
  };

  const microphoneStyle = {
    width: "25px",
    height: "25px",
    color: "#5F6368",
    margin: "0",
    padding: "0",

    position: "absolute",
    right: "60px",
  };

  const lensStyle = {
    width: "25px",
    height: "25px",
    color: "#5F6368",
    margin: "0",
    padding: "0",
    position: "absolute",
    right: "20px",
  };
  return (
    <div style={searchBarStyle}>
      {" "}
      <MdOutlineSearch style={searchIconStyle} />
      <BiSolidMicrophone style={microphoneStyle} />
      <SiGooglelens style={lensStyle} />
    </div>
  );
}
