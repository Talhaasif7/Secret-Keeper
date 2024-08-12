import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} | Talha Asif</p>
    </footer>
  );
}

export default Footer;
