import React from "react";
import styles from "./Footer.module.scss";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className={styles.FooterContainer}>
          <div className={styles.FooterContainerTop}>
            <div className={styles.FooterAbout}>
              <h3>About</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus et dolor blanditiis consequuntur ex voluptates
                perspiciatis omnis unde minima expedita.
              </p>
              <nav>
                <ul>
                  <li>
                    <a href="">Learn More</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={styles.FooterContact}>
              <h3>CONTACT & ADDRESS</h3>
              <ul>
                <li>
                  <strong>A:</strong> 34 Street Name, City Name Here, United
                  States
                </li>
                <li>
                  <strong>T:</strong> +1 242 4942 290
                </li>
                <li>
                  <strong>E:</strong>{" "}
                  <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
                </li>
              </ul>
            </div>
            <div className={styles.FooterLink}>
              <h3>QUICK LINKS</h3>
              <nav>
                <ul>
                  <li>
                    <a href="">About</a>
                  </li>
                  <li>
                    <a href="">Success Stories</a>
                  </li>
                  <li>
                    <a href="">Waiting Children</a>
                  </li>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="">Terms of Use</a>
                  </li>
                  <li>
                    <a href="">Disclaimers</a>
                  </li>
                  <li>
                    <a href="">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={styles.FooterSocial}>
              <h3>SOCIAL</h3>
              <div className={styles.FooterSocialIcons}>
                <TiSocialFacebook className={styles.SocialIcons} />
                <TiSocialLinkedin className={styles.SocialIcons} />
                <TiSocialTwitter className={styles.SocialIcons} />
                <FaInstagram className={styles.SocialIcons} />
              </div>
            </div>
          </div>
          <div className={styles.FooterContainerBottom}>
            <p>
              Copyright ©2024 All rights reserved | This template is made with ♡
              by<p style={{ color: "yellow" }}>Colorlib</p>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
