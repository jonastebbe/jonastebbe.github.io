import React, { Component } from "react";
import MailGray from "../../images/icons/mail-gray.svg";
import TwitterGray from "../../images/icons/twitter-gray.svg";
import LinkedinGray from "../../images/icons/linkedin-gray.svg";
import FacebookGray from "../../images/icons/facebook-gray.svg";
import InstagramGray from "../../images/icons/instagram-gray.svg";
import UnsplashGray from "../../images/icons/unsplash-gray.svg";
import GithubGray from "../../images/icons/github-gray.svg";

class Footer extends Component {
  render() {
    const { config } = this.props;
    const { copyright } = config;
    if (!copyright) {
      return null;
    }
    return (
      <div className="footer">
        <div className="footer__logo">
          <h4>Jonas Tebbe</h4>
        </div>
        <div className="footer__links">
          <a
            href="mailto:jonastebbe@googlemail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={MailGray} alt="Mail" />
          </a>
          <a
            href="https://www.twitter.com/jonastebbe"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={TwitterGray} alt="Twitter" />
          </a>
          <a
            href="https://de.linkedin.com/in/jonastebbe"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={LinkedinGray} alt="LinkedIn" />
          </a>
          <a
            href="https://www.facebook.com/jonas.tebbe"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={FacebookGray} alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com/jonastebbe"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={InstagramGray} alt="Instagram" />
          </a>
          <a
            href="https://unsplash.com/@jonastebbe"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={UnsplashGray} alt="Unsplash" />
          </a>
          <a
            href="https://www.github.com/jonastebbe"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={GithubGray} alt="Github" />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
