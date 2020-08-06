import React from "react";
import { EMAIL } from "./../Constants";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="contact-paragraph">
        Do you want to report an issue? Provide feedback?{" "}
        <a className="contact-link" href={"mailto:" + EMAIL}>
          Get in touch!
        </a>
      </p>
    </footer>
  );
};

export default Footer;
