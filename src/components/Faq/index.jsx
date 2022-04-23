import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

import "./styles.css";
import JsonData from "../../MOCK_DATA.json";
import {
  arrowIcon,
  whitePageButton,
  bluePageButton,
  plus,
  minus,
  playStoreIcon,
} from "../../assets";

const Faq = () => {
  const [faq, setFaq] = useState(JsonData.slice(0, 27));
  const [faqQuestion, setFaqQuestion] = useState("");
  const [faqAnswer, setFaqAnswer] = useState("");
  const [theme, setTheme] = useState("retificação");
  const [faqButtonStyle, setFaqButtonStyle] = useState(
    "faq-question-button-image"
  );
  const [faqAnswerTextStyle, setFaqAnswerTextStyle] = useState(
    "faq-question-answer-text-hidden"
  );
  const [faqQuestionSize, setFaqQuestionSize] = useState("faq-question-hidden");

  const [buttonImage, setButtonImage] = useState(minus);

  const [pageNumber, setPageNumber] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);

  const questionsPerPage = 4;
  const pagesVisited = pageNumber * questionsPerPage;
  const pageCount = Math.ceil(faq.length / questionsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleFaqButtonImage = () => {
    if (buttonImage == plus) {
      setButtonImage(minus);
      setFaqAnswerTextStyle("faq-question-answer-text");
      setFaqQuestionSize("faq-question");
    } else if (buttonImage == minus) {
      setButtonImage(plus);
      setFaqAnswerTextStyle("faq-question-answer-text-hidden");
      setFaqQuestionSize("faq-question-hidden");
    }
  };

  useEffect(() => {
    handleFaqButtonImage();
  }, []);

  return (
    <div className="faq">
      <span className="faq-title">Perguntas Frequentes</span>
      <span className="faq-subtitle">
        Confira as perguntas frequentes sobre{" "}
        <span className="faq-subtitle-theme">{theme}</span>
      </span>
      <div className="faq-question-column">
        {faq.slice(pagesVisited, pagesVisited + questionsPerPage).map((faq) => (
          <>
            <div className={faqQuestionSize}>
              <span className="faq-question-text">
                {faq.question}
                <p className={faqAnswerTextStyle}>{faq.answer}</p>
              </span>
              <button className={faqButtonStyle} onClick={handleFaqButtonImage}>
                <img src={buttonImage} alt="" />
              </button>
            </div>
          </>
        ))}
      </div>
      <div className="faq-paginate-buttons">
        <ReactPaginate
          previousLabel={""}
          nextLabel={""}
          pageCount={pageCount}
          marginPagesDisplayed={5}
          onPageChange={changePage}
          containerClassName={"faq-pagination"}
          previousLinkClassName={"faqPreviousBttn"}
          nextLinkClassName={"faqNextBttn"}
          disabledClassName={"faqPaginationDisabled"}
          activeClassName={"faqPaginationActive"}
        ></ReactPaginate>
      </div>
    </div>
  );
};

export default Faq;
