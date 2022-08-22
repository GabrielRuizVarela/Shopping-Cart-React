import React from 'react';
import githubSVG from '../images/github_social.svg';
import '../styles/Footer.scss';

function SocialButton() {
  return (
    <footer className="author-footer">
      <a href="https://github.com/GabrielRuizVarela">
        <p className="social-text">Createad By Gabriel Ruiz Varela</p>
      </a>
      <a href="https://github.com/GabrielRuizVarela" className="social github">
        <img src={githubSVG} alt="Github social button" />
      </a>
    </footer>
  );
}

export default SocialButton;
