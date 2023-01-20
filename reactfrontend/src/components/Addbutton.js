import React from "react";
import { ReactComponent as Addicon } from "../assets/add.svg";
import { Link } from "react-router-dom";

let Addbutton = () => {
  return (
    <Link to="/note/new" className="floating-button">
      <Addicon />
    </Link>
  );
};

export default Addbutton;
