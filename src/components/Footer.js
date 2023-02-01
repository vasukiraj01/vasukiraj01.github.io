import React from "react";
import "./styles/footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>
        Create by <span>Vasuki </span> | Copyright ⓒ {year} All rights
        reserved.
      </p>
    </footer>
  );
}

export default Footer;
