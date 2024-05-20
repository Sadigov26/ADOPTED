import React from "react";
import style from "./Header.module.scss";
import { FaInstagram } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <header>
        <div className={style.containerHeader}>
          <div style={{ backgroundColor: "orange", width: "100%", display:"flex", justifyContent:"center" }}>
            <div className={style.containerHeaderTop}>
              <div className={style.containerHeaderSocial}>
                <FaInstagram />
                <FaInstagram />
                <FaInstagram />
                <FaInstagram />
              </div>
              <div className={style.containerHeaderButton}>
                <button>Sponsor</button>
                <button style={{ backgroundColor: "orange" }}> Login</button>
              </div>
            </div>
          </div>
          <div className={style.containerHeaderBottom}>
            <div className={style.containerHeaderBottomLogo}>
              <h1>ADOPTED</h1>
            </div>
            <div className={style.containerHeaderBottomNavbar}>
              <nav>
                <ul>
                  <li>
                    <a href=""  style={{ color: "red" }}>Home</a>
                  </li>
                  <li>
                    <a href="">Adoption</a>
                  </li>
                  <li>
                    <a href="">Success Stories</a>
                  </li>
                  <li>
                    <a href="">About</a>
                  </li>
                  <li>
                    <a href="">Contact</a>
                  </li>
                  <FaBars />
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
