import React, { useState } from "react";
import styles from "./SiteSection.module.scss";
import siteimage from "../About/İmage/Ekran şəkli 2024-05-20 090338.png";

const faqData = [
  {
    question: "1. Getting Started",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit culpa accusamus repellat ut officia nesciunt aliquid qui nulla, provident ratione doloremque porro atque repellendus perspiciatis est. Accusamus earum, animi quod?",
  },
  {
    question: "2. Envisioning your family",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit culpa accusamus repellat ut officia nesciunt aliquid qui nulla, provident ratione doloremque porro atque repellendus perspiciatis est. Accusamus earum, animi quod?",
  },
  {
    question: "3. Getting approved",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit culpa accusamus repellat ut officia nesciunt aliquid qui nulla, provident ratione doloremque porro atque repellendus perspiciatis est. Accusamus earum, animi quod?",
  },
];

const SiteSection = () => {
  return (
    <div>
      <section className={styles.SiteSection}>
        <div className={styles.SiteSectionContainer}>
          <div className={styles.SiteDesk}>
            <div className={styles.SiteDeskImage}>
              <img src={siteimage} alt="" />
            </div>
            <div className={styles.SiteDeskBottomText}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                nemo et, esse laudantium consequatur. Eum soluta illum
                architecto dolorum quae suscipit dignissimos! Saepe, amet
                explicabo nemo eligendi totam sint repudiandae.
              </p>
              <button>Adopt Her Now!</button>
            </div>
          </div>
          <div className={styles.SiteFaq}>
            <h1>Steps to adopt & foster a child</h1>
            <FaqList faqs={faqData} />
          </div>
        </div>
      </section>
    </div>
  );
};

const FaqList = ({ faqs }) => {
  return (
    <div>
      {faqs.map((faq, index) => (
        <FaqItem key={index} faq={faq} />
      ))}
    </div>
  );
};

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <h2 onClick={() => setIsOpen(!isOpen)}>{faq.question}</h2>
      {isOpen && <p>{faq.answer}</p>}
    </div>
  );
};

export default SiteSection;
