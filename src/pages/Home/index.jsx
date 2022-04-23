import { Strings } from "./strings";
import React, { useEffect, useState } from "react";
/*import axios from "axios";*/

import "./styles.css";

import {
  retificaLogo,
  firstContentImage,
  tickIcon,
  docIcon,
  mapIcon,
  pinIcon,
  downloadThemeImage,
  appleStoreIcon,
  playStoreIcon,
  RatingStars,
  newRatingUser1,
  ratingUser2,
  ratingUser3,
  ratingUser4,
  ratingUser5,
  ratingUser6,
  logoRetifica,
  logoFacebook,
  logoInstagram,
  logoTwitter,
  togetherLogo,
  checklistLogo,
  readFeedbackLogo,
  supportLocalizationLogo,
  islandsExplorationLogo,
  handsLogo,
  newRatingUser3,
  newRatingUser2,
  newRatingUser4,
  newRatingUser5,
  newRatingUser6,
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
        <img className="header-logo" src={retificaLogo} alt="ioasys logo" />
        <nav className="header-menu">
          <a
            className="header-menu-item-beginning"
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
          <span className="header-menu-button-text">Baixe o aplicativo</span>
        </button>
      </header>
      <div className="main-content-container">
        <div className="main-content">
          <div className="main-content-texts">
            <p className="main-content-text-1">
              Entenda o passo a passo para re.tificar nome e gênero
            </p>
            <p className="main-content-text-2">
              Enquanto pessoa trans ou travesti, você tem o direito garantido de
              retificar o nome e gênero de seus documentos. E não precisa de
              advogado, tá? Baixe o app Re.tifica que a gente te ajuda.
            </p>
            <div className="main-content-buttons">
              <button className="main-content-button-1">
                <span className="main-content-button-1-text">Saiba mais</span>
              </button>
              <button className="main-content-button-2">
                <span className="main-content-button-2-text">
                  Baixe o aplicativo
                </span>
              </button>
            </div>
          </div>
          <img
            src={togetherLogo}
            alt="First Image - Flagged People"
            className="main-content-image"
          />
        </div>
        <div className="main-content-functionalities">
          <div className="main-second-content-texts">
            <p className="main-second-content-texts-title">
              Como funciona o<br></br>re.tifica?
            </p>
            <p className="main-second-content-texts-text">
              O re.tifica atua como um facilitador nesse processo burocrático e
              temeroso que é a retificação de documentação para pessoas trans e
              travestis. O aplicativo disponibiliza toda informação e orientação
              que você precisa saber para iniciar a sua jornada. Com uma check
              list organizada de maneira lógica e otimizada, você consegue
              acompanhar o seu processo alterando o status dos documentos, além
              de tirar suas dúvidas e ler relatos da comunidade. Confira algumas
              das nossas entregas.
            </p>
          </div>
          <div className="main-content-functionalities-boxes">
            <div className="main-content-functionality-box">
              <div className="main-content-functionality-box-header">
                <img src={checklistLogo} alt="Functionality Box Tick Icon" />
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
                <img src={readFeedbackLogo} alt="Functionality Box Doc Icon" />
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
                <img
                  src={supportLocalizationLogo}
                  alt="Functionality Box Map Icon"
                />
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
                <img
                  src={islandsExplorationLogo}
                  alt="Functionality Box Pin Icon"
                />
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
          <img src={handsLogo} alt="Baixe Gratuitamente Image" />
          <div className="main-content-donwload-texts">
            <span className="main-content-download-texts-title">
              Baixe gratuitamente
            </span>
            <p className="main-content-download-texts-text">
              Baixe agora no seu celular e comece sua jornada na companhia de
              Re.tifica, acompanhando e orientando cada passo do seu processo.
              Tenha toda a informação na palma da sua mão.
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
            Confira as avaliações retiradas na íntegra da Playstore e
            AppleStore.{" "}
          </p>
        </div>
        <div className="main-content-ratings-chart-container">
          <div className="main-content-ratings-chart">
            <div className="main-content-ratings-card">
              <div>
                <img src={RatingStars} alt="Rating Stars" />
                <p className="main-content-ratings-card-text">
                  Eu retifiquei o meu nome e gênero com a ajuda desse app e
                  realmente ele cumpre tudo o que promete. Me ajudou demais,
                  apesar do processo ser demorado.
                </p>
                <div className="main-content-ratings-user">
                  <img src={newRatingUser1} alt="Rating User 1" />
                  <div className="main-content-ratings-user-name-and-platform">
                    <span className="main-content-ratings-user-name">
                      Thiago Nogueira
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
                  Já indiquei para amigas trans e nós estamos usando e trocando
                  figurinhas sobre cartórios e tudo mais. Podiam adicionar essa
                  funcionalidade também!
                </p>
                <div className="main-content-ratings-user">
                  <img src={newRatingUser2} alt="Rating User 1" />
                  <div className="main-content-ratings-user-name-and-platform">
                    <span className="main-content-ratings-user-name">
                      Lina Ribeiro
                    </span>
                    <span className="main-content-ratings-user-platform">
                      Avaliação da AppleStore
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-content-ratings-card">
              <div>
                <img src={RatingStars} alt="Rating Stars" />
                <p className="main-content-ratings-card-text">
                  Tenho amigas que demoraram mais de 6 meses em todo o processo
                  buscando cartórios e tudo mais. Com esse app demorei 1 mês.
                  Obrigada! 💛
                </p>
                <div className="main-content-ratings-user">
                  <img src={newRatingUser3} alt="Rating User 1" />
                  <div className="main-content-ratings-user-name-and-platform">
                    <span className="main-content-ratings-user-name">
                      Karla Feijó
                    </span>
                    <span className="main-content-ratings-user-platform">
                      Avaliação da AppleStore
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
                  Eu estou apaixonado por esse aplicativo. Dá um quentinho no
                  coração quando a gente muda um documento de solicitado para
                  recebido que nossa 👏🏼👏🏼👏🏼
                </p>
                <div className="main-content-ratings-user">
                  <img src={newRatingUser4} alt="Rating User 1" />
                  <div className="main-content-ratings-user-name-and-platform">
                    <span className="main-content-ratings-user-name">
                      Tarso Silva
                    </span>
                    <span className="main-content-ratings-user-platform">
                      Avaliação da Playstore
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-content-ratings-card">
              <div>
                <img src={RatingStars} alt="Rating Stars" />
                <p className="main-content-ratings-card-text">
                  EU AMEI DEMAIS AS ILHAS!!! Olhar pra uma lista cheia de
                  documentos e não saber por onde começar é muito triste. Com
                  essas ilhas eu só segui o fluxo ❤️❤️
                </p>
                <div className="main-content-ratings-user">
                  <img src={newRatingUser5} alt="Rating User 1" />
                  <div className="main-content-ratings-user-name-and-platform">
                    <span className="main-content-ratings-user-name">
                      Lia Guimarães
                    </span>
                    <span className="main-content-ratings-user-platform">
                      Avaliação da Playstore
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-content-ratings-card">
              <div>
                <img src={RatingStars} alt="Rating Stars" />
                <p className="main-content-ratings-card-text">
                  A lista de documentos me ajudou com as pendências de
                  documentação e certidão. Grato por ter encontrado um
                  aplicativo que me ajudasse nisso.
                </p>
                <div className="main-content-ratings-user">
                  <img src={newRatingUser6} alt="Rating User 1" />
                  <div className="main-content-ratings-user-name-and-platform">
                    <span className="main-content-ratings-user-name">
                      Jonas Gilberto
                    </span>
                    <span className="main-content-ratings-user-platform">
                      Avaliação da Playstore
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
