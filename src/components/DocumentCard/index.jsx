import React from "react";
import { useState, useEffect } from "react";
// import api from '../../services/api';
import axios from "axios";
import ReactPaginate from "react-paginate";

import "./styles.css";
import { arrowIcon, whitePageButton, bluePageButton, newArrowIcon } from "../../assets";

const DocumentCard = () => {
  const [documents, setDocuments] = useState([]);
  const [documentName, setDocumentName] = useState("");
  const [documentDescription, setDocumentDescription] = useState("");
  const [documentLink, setDocumentLink] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);

  const documentsPerPage = 3;
  const pagesVisited = pageNumber * documentsPerPage;

  const pageCount = Math.ceil(documents.length / documentsPerPage);
  //If you want to show the Pages

  /*SIMPLE PAGINATION WITH NO PACKAGE*/
  const indexOfLastDocument = currentPage * documentsPerPage;
  const indexOfFirstDocument = indexOfLastDocument - documentsPerPage;
  const currentDocument = documents.slice(
    indexOfFirstDocument,
    indexOfLastDocument
  );

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

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
    <div className="necessary-docs-container">
      <div className="necessary-docs">
        <div className="necessary-docs-header">
          <p className="necessary-docs-header-title">
            Documentos necessários para a <br></br>retificação de nome e/ou
            gênero
          </p>
          <div className="necessary-docs-header-buttons-container">
            <ReactPaginate
              nextLabel=""
              previousLabel=""
              pageCount={pageCount}
              onPageChange={changePage}
              marginPagesDisplayed={5}
              containerClassName={"necessary-docs-header-buttons-container"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            >
              {" "}
            </ReactPaginate>
          </div>
        </div>
      </div>
      <div className="necessary-docs-chart">
        {documents
          .slice(pagesVisited, pagesVisited + documentsPerPage)
          .map((document) => (
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
                    Baixar modelo
                  </a>
                  <img
                    src={newArrowIcon}
                    alt="Click Here"
                    className="necessary-docs-footer-icon"
                  />
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default DocumentCard;
