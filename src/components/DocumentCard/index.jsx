import React from "react";
import { useState, useEffect } from "react";
// import api from '../../services/api';
import axios from "axios";
import ReactPaginate from "react-paginate";

import "./styles.css";
import { arrowIcon, whitePageButton, bluePageButton } from "../../assets";

const DocumentCard = () => {
  const [documents, setDocuments] = useState([]);
  const [documentName, setDocumentName] = useState("");
  const [documentDescription, setDocumentDescription] = useState("");
  const [documentLink, setDocumentLink] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const documentsPerPage = 3;
  const pagesVisited = pageNumber * documentsPerPage;

  const pageCount = Math.ceil(documents.length / documentsPerPage);
  //If you want to show the Pages

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
            {/* <button
              className="necessary-docs-header-previous-buttons"
              onClick={() => {
                changePage(2);
              }}
            >
              <img src={whitePageButton} alt="" />
            </button>
            <span>{`${pageNumber}/${pageCount}`}</span>
            <button className="necessary-docs-header-next-buttons">
              <img src={bluePageButton} alt="" onClick={() => {}} />
            </button> */}
            <ReactPaginate
              nextLabel="Next"
              previousLabel="Previous"
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"necessary-docs-header-buttons-container"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />

            {/* <ReactPaginate
              nextLabel="Anterior"
              previousLabel="Proximo"
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"necessary-docs-header-buttons-container"}
              previousLinkClassName={"necessary-docs-header-previous-button"}
              nextLinkClassName={"necessary-docs-header-next-button"}
              disabledClassName={"necessary-docs-header-previous-button"}
              activeClassName={""}
            /> */}
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
    </div>
  );
};

export default DocumentCard;
