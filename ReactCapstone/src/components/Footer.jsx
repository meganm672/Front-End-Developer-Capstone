import React from 'react';
import FooterLogo from "../assets/FooterLogo.png"
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer>
            <menu>
        <li className="img-footer">
          <img
            src={FooterLogo}
            alt="Little Lemon logo"
          ></img>
        </li>
        <li className="contact">
          <h1 className="footer-header">Navigation</h1>
          <ul className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        <li>
            <a
            >
              Menu
            </a>
            </li>
            <Link to="/reservations">Reservations</Link>
            <Link to="/order">Order</Link>
            <Link to="/login">Login</Link>
          </ul>
        </li>

        <li>
          <h1 className="footer-header">Contact</h1>
          <ul className="footer-links">
            <li>2395 Maldove Way,</li>
            <li>Chicago Illinois</li>
            <br></br>
            <li>(629)-243-6827</li>
            <br></br>
            <li>
              <a
              href="mailto: info@littlelemon.com"
              target="_blank"
              rel="noreferrer"
            >
              info@littlelemon.com
            </a>
            </li>
          </ul>
        </li>
        <li>
          <h1 className="footer-header">Connect</h1>
          <ul className="footer-links">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
            >
              Join us!
            </a>
          </ul>
        </li>
      </menu>
    </footer>
    );
};

export default Footer;