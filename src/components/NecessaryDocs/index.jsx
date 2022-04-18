import React from "react";
import { useState } from "react";

import "./styles.css";
import { whitePageButton, bluePageButton } from "../../assets";

const NecessaryDocs = () => {
  const [docsPage, setdocsPage] = useState("1");
  return (
    <div className="necessary-docs-container">
      <div className="necessary-docs-header">
        <p className="necessary-docs-header-title">
          Documentos necessários para a <br></br>retificação de nome e/ou gênero
        </p>
        <div className="necessary-docs-header-buttons-container">
          <button className="necessary-docs-header-buttons">
            <img
              src={whitePageButton}
              alt="Previous Page"
              className="necessary-docs-header-buttons"
            />
          </button>
          <span>{`${docsPage}/6`}</span>
          <button className="necessary-docs-header-buttons">
            <img
              src={bluePageButton}
              alt="Next Page"
              className="necessary-docs-header-buttons"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NecessaryDocs;
