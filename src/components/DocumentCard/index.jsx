import React from "react";
import { useState, useEffect } from "react";
// import api from '../../services/api';
import axios from "axios";
import ReactPaginate from "react-paginate";

import "./styles.css";
import { arrowIcon } from "../../assets";

const DocumentCard = () => {
  const [documents, setDocuments] = useState([]);
  const [documentName, setDocumentName] = useState("");
  const [documentDescription, setDocumentDescription] = useState("");
  const [documentLink, setDocumentLink] = useState("");
  useEffect(() => {
    const fetchDocuments = async () => {
      const res = await axios.get(
        "https://ods10-backend-develop.herokuapp.com/api/documents"
      );
      setDocuments(res.data);
    };

    fetchDocuments();
  }, []);

  console.log(documents);

  return (
    <div className="necessary-docs">
      {documents.map((document) => (
        <>
          <div className="necessary-docs-content">
            <div className="necessary-docs-content-header">
              <div className="necessary-docs-name-border"></div>
              <div className="necessary-docs-name">{document.name}</div>
            </div>
            <p className="necessary-docs-description">
              {document.shortDescription}
            </p>
            <div className="necessary-docs-footer">
              <a
                className="necessary-docs-footer-text"
                href={document.link}
                target="_blank"
                rel="noreferrer"
              >
                Link aqui
              </a>
              <img
                src={arrowIcon}
                alt="Click Here"
                className="necessary-docs-footer-icon"
              />
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default DocumentCard;
