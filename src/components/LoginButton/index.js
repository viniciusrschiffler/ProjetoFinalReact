import React from "react";
import { Link } from "react-router-dom";

import "./Btn.css";

export default function Btn({url, title, handleFunction, style}) {
  return (
    <Link type='submit' to={url} style={style} className="w-100 btn btn-lg btn-login rounded-pill" onClick={handleFunction}>{title}</Link>
  );
};