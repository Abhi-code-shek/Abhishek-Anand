import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Abhishek Anand</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#services" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#qualification" className="footer__link">Qualification</a>
                </li>
            </ul>

            <div className="footer__social">

                <a 
                    href="https://www.linkedin.com/in/abhishekanand73/" 
                    className="footer__social-link" target="_blank"
                >
                    <i class="bx bxl-linkedin"></i>
                </a>

                <a 
                    href="https://leetcode.com/u/NIAgi1nBrM/" 
                    className="footer__social-link" target="_blank"
                >
                    <i class="bx bx-code-alt"></i>
                </a>

                <a 
                    href="https://github.com/Abhi-code-shek" 
                    className="footer__social-link" target="_blank"
                >
                    <i class="bx bxl-github"></i>
                </a>

                <a 
                    href="mailto:abhishekanand.468@gmail.com" 
                    className="footer__social-link" target="_blank"
                >
                    <i class="bx bxl-gmail"></i>
                </a>

                <a 
                    href="https://www.instagram.com/abhishek.anand._/" 
                    className="footer__social-link" 
                    target="_blank"
                >
                    <i class="bx bxl-instagram"></i>
                </a>
            </div>
        </div>
    </footer>
  );
};

export default Footer;