import { Strings } from "./strings";
import React from "react";

import "./styles.css";

import {
  ioasysLogo,
  googlePlay,
  appleStore,
  firstContentImage,
} from "../../assets";

function Home() {
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
          <div>
            <img src={firstContentImage} alt="First Image - Flagged People" />
          </div>
        </div>
        <div className="main-content">
          <a
            href="https://play.google.com/store/apps/dev?id=6715068722362591614&hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <img src={googlePlay} alt="Google Play Icon" />
          </a>
          <a
            href="https://apps.apple.com/us/developer/supercell/id488106216"
            target="_blank"
            rel="noreferrer"
          >
            <img src={appleStore} alt="Google Play Icon" />
          </a>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-content-text">Termos de Serviços</p>
          <p className="footer-content-text">Política de Privacidade</p>
          <p className="footer-content-text">Safe and Fair Play Policy</p>
        </div>
        <div className="footer-content">
          <p className="footer-content-text">Sobre nós</p>
          <p className="footer-content-text">Depoimentos</p>
          <p className="footer-content-text">Artigos</p>
        </div>
        <div className="footer-content">
          <p className="footer-content-text">Instagram</p>
          <p className="footer-content-text">Facebook</p>
          <p className="footer-content-text">Linkedin</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
