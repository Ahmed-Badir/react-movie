import React from "react";
import { Link } from "react-router-dom";

import "./footer.scss";

import bg from "./../../assets/footer-bg.jpg";
import logo from "./../../assets/logo.png";

import * as Config from "./../../constants/Config";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content container">
        {/* اللوجو + الاسم */}
        <div className="footer__content__logo">
          <div className="logo">
            <Link to={`/${Config.HOME_PAGE}`} className="logo__link">
              <img src={logo} alt="Flixora" />
              <span>Flixora</span>
            </Link>
          </div>
        </div>

        {/* القوائم */}
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to={`/${Config.HOME_PAGE}`}>Home</Link>
            <Link to={`/${Config.HOME_PAGE}`}>Contact us</Link>
            <Link to={`/${Config.HOME_PAGE}`}>Terms of service</Link>
            <Link to={`/${Config.HOME_PAGE}`}>About us</Link>
          </div>
          <div className="footer__content__menu">
            <Link to={`/${Config.HOME_PAGE}`}>Live</Link>
            <Link to={`/${Config.HOME_PAGE}`}>FAQ</Link>
            <Link to={`/${Config.HOME_PAGE}`}>Premium</Link>
            <Link to={`/${Config.HOME_PAGE}`}>Privacy policy</Link>
          </div>
          <div className="footer__content__menu">
            <Link to={`/${Config.HOME_PAGE}`}>You must watch</Link>
            <Link to={`/${Config.HOME_PAGE}`}>Recent release</Link>
            <Link to={`/${Config.HOME_PAGE}`}>Top IMDB</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
