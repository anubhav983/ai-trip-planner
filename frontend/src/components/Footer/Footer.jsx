import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPlaneDeparture
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-logo">

        <FaPlaneDeparture className="plane"/>

        <h2>AI Trip Planner</h2>

      </div>

      <p className="footer-text">
        Crafting intelligent travel experiences with AI.
      </p>

      <div className="footer-social">

        <a
          href="https://github.com/anubhav983"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/anubhav-tiwari-a578bb293/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a href="mailto:2k23.csaiml2313998@gmail.com">
          <FaEnvelope />
        </a>

      </div>

      <div className="footer-bottom">

        © {new Date().getFullYear()} <strong>Anubhav Tiwari</strong>

        <span> • AI Trip Planner</span>

      </div>

    </footer>
  );
}

export default Footer;