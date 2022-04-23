import React from "react";

import "./styles.css";
import {
  firstArticleCardImage,
  purplePButton,
  secondArticleCardImage,
  thirdArticleCardImage,
  whitePButton,
} from "../../assets";

const ArticlesChart = () => {
  return (
    <div className="articles-chart">
      <div className="articles-chart-row">
        <div className="articles-chart-description">
          <p className="articles-chart-title">Conta mais</p>
          <p className="articles-chart-text">
            Nosso time realiza uma curadoria de relatos e depoimentos de pessoas
            trans e travestis que passaram pelo processo de retificação de nome
            e/ou gênero. Vem ver quais foram as delícias e as dores de cada
            experiência. <br></br> <br></br> Quer aparecer aqui também? Envie
            sua história para o email: re.tifica.app@gmail.com{" "}
          </p>
        </div>
        <div className="articles-chart-cards">
          <div className="articles-card">
            <img
              src={firstArticleCardImage}
              alt="First Card"
              className="articles-card-image"
            />
            <p className="articles-card-title">
              A minha viagem não tão <br></br> solitária
            </p>
            <p className="articles-card-text">
              Oi, eu sou o João e a minha história não tão solitária é
              referência a João Nery em Viagem Solitária. Não tão solitária
              porque apesar dos amigos tive alguns percalços próprios do
              processo de retificação
            </p>
            <span className="articles-card-expand">Ver mais</span>
          </div>
          <div className="articles-card">
            <img
              src={secondArticleCardImage}
              alt="Second Card"
              className="articles-card-image"
            />
            <p className="articles-card-title">
              Pamela: um relato do <br></br> processo de retificação
            </p>
            <p className="articles-card-text">
              Queria dizer que meu processo de retificação foi fácil, mas eu
              estaria mentindo. Não pelo fato dos documentos serem tantos - o
              que foi até fácil de administrar graças ao aplicativo.
            </p>
            <span className="articles-card-expand">Ver mais</span>
          </div>
          <div className="articles-card">
            <img
              src={thirdArticleCardImage}
              alt="Third Card"
              className="articles-card-image"
            />
            <p className="articles-card-title">
              Documentos e certidões: <br></br> a história de Sarah{" "}
            </p>
            <p className="articles-card-text">
              Eu me chamo Sarah, sou travesti e, desde que me entendi como uma
              travesti, tenho vontade de usar o nome “Sarah” na minha
              identidade. Não imaginava que teria que reunir tantos documentos
            </p>
            <span className="articles-card-expand">Ver mais</span>
          </div>
        </div>
      </div>
      <div className="articles-chart-footer-buttons">
        <img src={whitePButton} alt="Previous White Button" />
        <span>1/1</span>
        <img src={purplePButton} alt="Next White Button" />
      </div>
    </div>
  );
};

export default ArticlesChart;
