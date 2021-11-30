import React from "react";
import { Link } from "react-router-dom";

import "./Btn.css";

export default function Btn() {
  return (
    <Link to="/products" style={{color: '#fff'}} class="w-100 btn btn-lg btn-login rounded-pill">Acessar</Link>
  );
};