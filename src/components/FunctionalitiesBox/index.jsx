import React from "react";
import { useState } from "react";

import "./styles.css";

const FuncionalitiesBox = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  return (
    <div className="functionality-box-container">
      <div className="functionality-box">
        <div className="functionality-box-header">
          <img src={image} alt="Box Icon" />
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
};

export default FuncionalitiesBox;
