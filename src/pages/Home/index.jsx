import { Strings } from "./strings";
import React, { useEffect, useState } from "react";
/*import axios from "axios";*/

import "./styles.css";

import {
  ioasysLogo,
  firstContentImage,
  tickIcon,
  docIcon,
  mapIcon,
  pinIcon,
  downloadThemeImage,
  appleStoreIcon,
  playStoreIcon,
  RatingStars,
  ratingUser1,
  ratingUser2,
  ratingUser3,
  ratingUser4,
  ratingUser5,
  ratingUser6,
  logoRetifica,
  logoFacebook,
  logoInstagram,
  logoTwitter,
} from "../../assets";
import DocumentCard from "../../components/DocumentCard";
import { ArticlesChart, Faq } from "../../components";

const Home = () => {
  // const [documents, setDocuments] = useState([]);
  // const [loading, setLoading] = useState(false); /*See if it is necessary*/

  // useEffect(() => {
  //   const fetchDocuments = async () => {
  //     setLoading(true);
  //     const res = await axios.get(
  //       "https://ods10-backend-develop.herokuapp.com/api/users/99fed5de-575b-40ec-aee8-01258aa596be/documents/id"
  //     );
  //     setDocuments(res.data);
  //     setLoading(false);
  //   };

  //   fetchDocuments();
  // }, []);
  return (
    <div className="container">
      <header className="header">
        <img className="header-logo" src={ioasysLogo} alt="ioasys logo" />
        <nav className="header-menu">
          <a
            className="header-menu-item"
            href="https://camp.ioasys.com.br"
            target="blank"
          >
            Início
          </a>
          <a
            className="header-menu-item"
            href="https://camp.ioasys.com.br"
            target="_blank"
            rel="noreferrer"
          >
            Sobre
          </a>
          <a
            className="header-menu-item"
            href="https://ioasys.gupy.io"
            target="_blank"
            rel="noreferrer"
          >
            Download
          </a>
          <a
            className="header-menu-item"
            href="https://camp.ioasys.com.br/contato"
            target="_blank"
            rel="noreferrer"
          >
            Avaliações
          </a>
          <a
            className="header-menu-item"
            href="https://camp.ioasys.com.br/contato"
            target="_blank"
            rel="noreferrer"
          >
            Documentos
          </a>
          <a
            className="header-menu-item"
            href="https://camp.ioasys.com.br/contato"
            target="_blank"
            rel="noreferrer"
          >
            Artigos
          </a>
          <a
            className="header-menu-item"
            href="https://camp.ioasys.com.br/contato"
            target="_blank"
            rel="noreferrer"
          >
            Dúvidas
          </a>
        </nav>
        <button className="header-menu-button">
          <span className="header-menu-button-text">Baixe grátis</span>
        </button>
      </header>
      <div className="main-content-container">
        <div className="main-content">
          <div className="main-content-texts">
            <p className="main-content-text-1">
              Entenda o passo a passo para retificar o nome e gênero
            </p>
            <p className="main-content-text-2">
              Você que é trans consegue retificar seu nome e gênero, sem auxílio
              de um advogado. A gente te ajuda.
            </p>
            <div className="main-content-buttons">
              <button className="main-content-button-1">
                <span className="main-content-button-1-text">Saiba mais</span>
              </button>
              <button className="main-content-button-2">
                <span className="main-content-button-2-text">Baixe grátis</span>
              </button>
            </div>
          </div>
          <img
            src={firstContentImage}
            alt="First Image - Flagged People"
            className="main-content-image"
          />
        </div>
        <div className="main-content-functionalities">
          <div className="main-second-content-texts">
            <p className="main-second-content-texts-title">
              Como funciona o <br></br>RETIFICATRANS?
            </p>
            <p className="main-second-content-texts-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut erat
              bibendum ornare urna, cursus eget convallis. Feugiat imperdiet
              posuere justo, ultrices Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Ut erat bibendum ornare urna, cursus eget
              convallis. Feugiat imperdiet posuere justo, ultrices Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Ut erat bibendum
              ornare urna, cursus{" "}
            </p>
          </div>
          <div className="main-content-functionalities-boxes">
            <div className="main-content-functionality-box">
              <div className="main-content-functionality-box-header">
                <img src={tickIcon} alt="Functionality Box Tick Icon" />
                <p className="main-content-functionality-box-header-text">
                  Checklist de <br />
                  documentos
                </p>
              </div>
              <p className="main-content-functionality-box-text">
                Acompanhe seu processo de retificação através de uma organização
                entre documentos que faltam, documentos já solicitados e os
                documentos já recebidos.{" "}
              </p>
            </div>
            <div className="main-content-functionality-box">
              <div className="main-content-functionality-box-header">
                <img src={docIcon} alt="Functionality Box Doc Icon" />
                <p className="main-content-functionality-box-header-text">
                  Leia artigos <br />
                  selecionados
                </p>
              </div>
              <p className="main-content-functionality-box-text">
                Nosso time disponibiliza uma curadoria de conteúdos atualizados
                sobre o universo LGBTQIA+, com foco em pessoas trans e
                travestis.{" "}
              </p>
            </div>
          </div>
          <div className="main-content-functionalities-boxes">
            <div className="main-content-functionality-box">
              <div className="main-content-functionality-box-header">
                <img src={mapIcon} alt="Functionality Box Map Icon" />
                <p className="main-content-functionality-box-header-text">
                  Explore nossos <br />
                  mundos
                </p>
              </div>
              <p className="main-content-functionality-box-text">
                Acompanhe seu processo de retificação através de uma história
                ilustrada com nossos personagens que explicam sobre os
                documentos e te ajudam a conseguí-los.{" "}
              </p>
            </div>
            <div className="main-content-functionality-box">
              <div className="main-content-functionality-box-header">
                <img src={pinIcon} alt="Functionality Box Pin Icon" />
                <p className="main-content-functionality-box-header-text">
                  Veja locais de <br />
                  apoio
                </p>
              </div>
              <p className="main-content-functionality-box-text">
                Através dos nossos mapas você consegue verificar as ONGs e
                cartórios mais próximos de você, auxiliando dessa forma no seu
                processo de retificação.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="main-content-download">
          <img src={downloadThemeImage} alt="Baixe Gratuitamente Image" />
          <div className="main-content-donwload-texts">
            <span className="main-content-download-texts-title">
              Baixe gratuitamente
            </span>
            <p className="main-content-download-texts-text">
              Baixe grátis no seu celular e tenha acesso a diversos recursos
              para acompanhar o seu processo de retificação de nome e gênero
              através do seu celular.
            </p>
            <div className="main-content-texts-icons">
              <img src={appleStoreIcon} alt="Apple Store" />
              <img src={playStoreIcon} alt="Google Play Store" />
            </div>
          </div>
        </div>
        <div className="main-content-ratings">
          <h1 className="main-content-ratings-title">
            O que estão falando sobre o aplicativo
          </h1>
          <p className="main-content-ratings-subtitle">
            {" "}
            confira as avaliações na íntegra da Playstore e AppleStore
          </p>
        </div>
        <div className="main-content-ratings-chart-container">
          <div className="main-content-ratings-chart">
            <div className="main-content-ratings-card">
              <div>
                <img src={RatingStars} alt="Rating Stars" />
                <p className="main-content-ratings-card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  volutpat nisi ut purus condimentum condimentum. Ut non libero
                  sed nulla ornare dignissim.{" "}
                </p>
                <div className="main-content-ratings-user">
                  <img src={ratingUser1} alt="Rating User 1" />
                  <div className="main-content-ratings-user-name-and-platform">
                    <span className="main-content-ratings-user-name">
                      Nome da pessoa
                    </span>
                    <span className="main-content-ratings-user-platform">
                      Avaliação da PlayStore
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-content-ratings-card">
              <div>
                <img src={RatingStars} alt="Rating Stars" />
                <p className="main-content-ratings-card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  volutpat nisi ut purus condimentum condimentum. Ut non libero
                  sed nulla ornare dignissim.{" "}
                </p>
                <div className="main-content-ratings-user">
                  <img src={ratingUser2} alt="Rating User 1" />
                  <div className="main-content-ratings-user-name-and-platform">
                    <span className="main-content-ratings-user-name">
                      Nome da pessoa
                    </span>
                    <span className="main-content-ratings-user-platform">
                      Avaliação da PlayStore
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-content-ratings-card">
              <div>
                <img src={RatingStars} alt="Rating Stars" />
                <p className="main-content-ratings-card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  volutpat nisi ut purus condimentum condimentum. Ut non libero
                  sed nulla ornare dignissim.{" "}
                </p>
                <div className="main-content-ratings-user">
                  <img src={ratingUser3} alt="Rating User 1" />
                  <div className="main-content-ratings-user-name-and-platform">
                    <span className="main-content-ratings-user-name">
                      Nome da pessoa
                    </span>
                    <span className="main-content-ratings-user-platform">
                      Avaliação da PlayStore
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="main-content-ratings-chart">
            <div className="main-content-ratings-card">
              <div>
                <img src={RatingStars} alt="Rating Stars" />
                <p className="main-content-ratings-card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  volutpat nisi ut purus condimentum condimentum. Ut non libero
                  sed nulla ornare dignissim.{" "}
                </p>
                <div className="main-content-ratings-user">
                  <img src={ratingUser4} alt="Rating User 1" />
                  <div className="main-content-ratings-user-name-and-platform">
                    <span className="main-content-ratings-user-name">
                      Nome da pessoa
                    </span>
                    <span className="main-content-ratings-user-platform">
                      Avaliação da PlayStore
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-content-ratings-card">
              <div>
                <img src={RatingStars} alt="Rating Stars" />
                <p className="main-content-ratings-card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  volutpat nisi ut purus condimentum condimentum. Ut non libero
                  sed nulla ornare dignissim.{" "}
                </p>
                <div className="main-content-ratings-user">
                  <img src={ratingUser5} alt="Rating User 1" />
                  <div className="main-content-ratings-user-name-and-platform">
                    <span className="main-content-ratings-user-name">
                      Nome da pessoa
                    </span>
                    <span className="main-content-ratings-user-platform">
                      Avaliação da PlayStore
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-content-ratings-card">
              <div>
                <img src={RatingStars} alt="Rating Stars" />
                <p className="main-content-ratings-card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  volutpat nisi ut purus condimentum condimentum. Ut non libero
                  sed nulla ornare dignissim.{" "}
                </p>
                <div className="main-content-ratings-user">
                  <img src={ratingUser6} alt="Rating User 1" />
                  <div className="main-content-ratings-user-name-and-platform">
                    <span className="main-content-ratings-user-name">
                      Nome da pessoa
                    </span>
                    <span className="main-content-ratings-user-platform">
                      Avaliação da PlayStore
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <DocumentCard></DocumentCard>
        <ArticlesChart></ArticlesChart>
        <Faq></Faq>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-content-retifica">
            <img src={logoRetifica} alt="Retifica" />
            <p className="footer-content-retifica-text">
              Desburocratizando o <br></br> processo de retificação para{" "}
              <br></br> pessoas trans e travestis.
            </p>
            <div className="footer-content-retifica-social-media">
              <img src={logoFacebook} alt="Facebook" />
              <img src={logoInstagram} alt="Instagram" />
              <img src={logoTwitter} alt="Twitter" />
            </div>
          </div>
          <div className="footer-content-company">
            <p className="footer-content-company-abouts-title">Companhia</p>
            <div className="footer-content-company-abouts">
              <p className="footer-content-company-abouts-text">Sobre</p>
              <p className="footer-content-company-abouts-text">Download</p>
              <p className="footer-content-company-abouts-text">Documentos</p>
              <p className="footer-content-company-abouts-text">Artigos</p>
            </div>
          </div>
          <div className="footer-content-resources">
            <p className="footer-content-resources-abouts-title">Recursos</p>
            <div className="footer-content-resources-abouts">
              <p className="footer-content-resources-abouts-text">FAQ</p>
              <p className="footer-content-resources-abouts-text">
                Privacidade
              </p>
              <p className="footer-content-resources-abouts-text">
                Termos de uso
              </p>
            </div>
          </div>
          <div className="footer-content-suggestions">
            <p className="footer-content-suggestions-info-title">
              Dúvidas ou sugestões?
            </p>
            <div className="footer-content-suggestions-info">
              <p className="footer-content-suggestions-info-text">
                Cadastre seu e-mail e entraremos em contato.<br></br> Estamos
                aqui para nos fortalecer.
              </p>
              <div className="footer-content-suggestions-email">
                <input
                  type="text"
                  placeholder="Email"
                  className="footer-content-suggestions-email-input"
                />
                <button className="footer-content-suggestions-email-signin">
                  <span className="footer-content-suggestions-email-signin-text">
                    Inscreva-se
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
