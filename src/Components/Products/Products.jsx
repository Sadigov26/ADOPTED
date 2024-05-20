import React from "react";
import styles from "./Products.module.scss";
import cardimg from "../About/İmage/children_5.jpg";

const Products = () => {
  return (
    <div>
      <section className={styles.Products}>
        <div className={styles.ProductsContainer}>
          <div className={styles.ProductsContainerTop}>
            <h1>WAITING CHILDREN</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              unde impedit, necessitatibus, soluta sit quam minima expedita
              atque corrupti reiciendis
            </p>
            <button>Find More Waiting Children </button>
          </div>
          <div className={styles.ProductsContainerBottom}>
            <div className={styles.ProductsCard}>
              <img src={cardimg} alt="" />
              <div className={styles.ProductsCardDesk}>
                <h1>ben</h1> <p>14 yasi var</p>
              </div>
            </div>
            <div className={styles.ProductsCard}>
              <img src={cardimg} alt="" />
              <div className={styles.ProductsCardDesk}>
                <h1>ben</h1> <p>14 yasi var</p>
              </div>
            </div>
            <div className={styles.ProductsCard}>
              <img src={cardimg} alt="" />
              <div className={styles.ProductsCardDesk}>
                <h1>ben</h1> <p>14 yasi var</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
