import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <h4>Copyright &copy; {year} | All Rights Reserved.</h4>
      <div className="footerLinks">
        <a href="https://github.com/kvskmurty2802/" target="_blank">
          <FaGithub />
        </a>
        <a href="https://instagram.com/k_V_S_KRISHNA_MURTY" target="_blank">
          <FaInstagram />
        </a>

        <a href="mailTo:krishnamurty2802@gmail.com" target="_blank">
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
