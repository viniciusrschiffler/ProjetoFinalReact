import React from "react";
import { Link } from "react-router-dom";

import "./Btn.css";

export default function Btn({label, url}) {
  return (
    <Link to={url} class="w-100 btn btn-lg btn-login rounded-pill">{label}</Link>
  );
};