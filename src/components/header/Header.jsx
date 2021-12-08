import "./header.css";
import { useState } from "react";
import {
  FaLinkedin,
  FaYoutube,
  FaGithub,
  FaWhatsapp,
  FaBars,
  FaRegWindowClose,
} from "react-icons/fa";
export default function Header() {
  const [clicked, setClicked] = useState();
  const [click, setClick] = useState(false);
  const [showMobileMenu, setshowMobileMenu] = useState(false);

  return (
    <header id="header" className={` ${clicked && "header-top"}`}>
      <div className="container">
        <h1>
          <a href="/">Carlos Orozco</a>
        </h1>

        <h2>
          I am an <span>Electronics and Communications Engineer</span> from
          Ecuador
        </h2>

        <nav
          id="navbar"
          className={`navbar ${click && "navbar-mobile"}`}
        >
          <ul>
            <li>
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="#about"
                onClick={() => setClicked(true)}
              >
                About
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="#resume"
                onClick={() => setClicked(true)}
              >
                Resume
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="#services"
                onClick={() => setClicked(true)}
              >
                Practical
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="#portfolio"
                onClick={() => setClicked(true)}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="#contact"
                onClick={() => setClicked(true)}
              >
                Contact
              </a>
            </li>
          </ul>
         <div  >
         <i
            className="mobile-nav-toggle"
            onClick={() => {setshowMobileMenu(!showMobileMenu)
           }}
          >
            {showMobileMenu ? <FaRegWindowClose /> : <FaBars />}
          </i>
         </div>
        </nav>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/carlos-orozco-64892021/"
            className="linkedin"
            target="_blank"
          >
            <i className="bi bi-linkedin">
              <FaLinkedin />
            </i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCgR2CZLCClCdTeo_l5W53eQ"
            className="linkedin"
            target="_blank"
          >
            <i className="bi bi-youtube">
              <FaYoutube />
            </i>
          </a>
          <a
            href="https://github.com/corozco6489"
            className="linkedin"
            target="_blank"
          >
            <i className="bi bi-github">
              <FaGithub />
            </i>
          </a>
          <a
            href="https://wa.me/5930983592690"
            className="linkedin"
            target="_blank"
          >
            <i className="bi bi-whatsapp">
              <FaWhatsapp />
            </i>
          </a>
        </div>
      </div>
    </header>
  );
}
