import { Strings } from "./strings";
import React from "react";

import "./styles.css";

import { ioasysLogo, googlePlay, appleStore } from "../../assets";

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
            Home
          </a>
          <a
            className="header-menu-item"
            href="https://camp.ioasys.com.br"
            target="_blank"
            rel="noreferrer"
          >
            Trilhas
          </a>
          <a
            className="header-menu-item"
            href="https://ioasys.gupy.io"
            target="_blank"
            rel="noreferrer"
          >
            Carreiras
          </a>
          <a
            className="header-menu-item"
            href="https://camp.ioasys.com.br/contato"
            target="_blank"
            rel="noreferrer"
          >
            Contato
          </a>
        </nav>
      </header>
      <div className="main-content-container">
        <div className="main-content">
          <p className="main-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="main-content">
          <p className="main-text">
            Texto convidativo/explicativo do app móvel
          </p>
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
