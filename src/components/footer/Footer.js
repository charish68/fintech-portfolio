import React, { useContext } from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made with ❤️ by charish yadav")}
          <a
            href="https://github.com/charish68"
            target="_blank"
            rel="noreferrer"
            style={{ color: "inherit", fontWeight: "bold" }}
          >
            Nagalla Venkata Charish Yadav
          </a>
        </p>

        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Portfolio source on{"charish "}
          <a
            href="https://github.com/charish68/fintech-portfolio"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>
    </Fade>
  );
}
