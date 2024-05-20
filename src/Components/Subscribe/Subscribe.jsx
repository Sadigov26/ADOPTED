import React from "react";
import styles from "./Subscribe.module.scss";

const Subscribe = () => {
  return (
    <div>
      <section className={styles.subscribe}>
        <div className={styles.subscribeContainer}>
            <div className={styles.subscribeContainerTitle}>
                <h1>GET NEWS & UPDATES</h1>
            </div>
            <div className={styles.subscribeContainerInput}>
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Your Email" />
                <button>SUBSCRIBE</button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Subscribe;
