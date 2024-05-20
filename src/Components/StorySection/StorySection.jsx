import React from "react";
import styles from "./StorySection.module.scss";
import cardimage from "../About/İmage/work_thumb_2.jpg";

const StorySection = () => {
  return (
    <div>
      <section className={styles.StorySection}>
        <h1>FEATURED STORIES</h1>
        <div className={styles.containerStory}>
          <div className={styles.containerStoryCard}>
            <img src={cardimage} alt="" />
          </div>
          <div className={styles.containerStoryCard}>
            <img src={cardimage} alt="" />
          </div>
          <div className={styles.containerStoryCard}>
            <img src={cardimage} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default StorySection;
