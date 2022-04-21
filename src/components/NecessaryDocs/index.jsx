import React from "react";
import { useState } from "react";

import "./styles.css";
import { whitePageButton, bluePageButton } from "../../assets";
import DocumentCard from "../DocumentCard";

const NecessaryDocs = () => {
  return (
    <div className="necessary-docs-container">
      <DocumentCard></DocumentCard>
    </div>
  );
};

export default NecessaryDocs;
