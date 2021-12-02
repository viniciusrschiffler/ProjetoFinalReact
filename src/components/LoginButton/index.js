import React from "react";
import { Link } from "react-router-dom";

import "./Btn.css";

export default function Btn({url, title, handleFunction}) {
  return (
    <Link type='submit' to={url} className="w-100 btn btn-lg btn-login rounded-pill" onClick={handleFunction}>{title}</Link>
  );
};