import { Strings } from "./strings";
import React from "react";

import "./styles.css";

import { redIoasysLogo } from "../../assets";

function Home() {
  return (
    <div className="container">
      <img src={redIoasysLogo} alt="Ioasys Icon" />
    </div>
  );
}

export default Home;
