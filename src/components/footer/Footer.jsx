import React from "react";
import "./footer.css";
import Contact from "./Contact";
import { BsLinkedin } from "react-icons/bs";
import { BsSpotify } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer id="contact">
      <div className="logo-container">
        <a href="/" className="footer__logo">
          <Logo />
        </a>
        <a href="/" className="footer__name">
          Ceavin Rufus
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Ceavin Rufus. All rights reserved</small>
      </div>
      <Contact />
      <h3 className="find__me">Find me on</h3>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/ceavinrufus/" target="blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/ceavinr/" target="blank">
          <FaGithub />
        </a>
        <a href="https://instagram.com/ceavinrufus/" target="blank">
          <RiInstagramFill />
        </a>
        <a href="https://twitter.com/ceavinrufus/" target="blank">
          <IoLogoTwitter />
        </a>
        <a
          href="https://open.spotify.com/user/lt4ao0q432yil746hh8jq8rjj?si=7edf5741a5f64e7e"
          target="blank"
        >
          <BsSpotify />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
