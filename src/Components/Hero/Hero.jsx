import React from "react";
import style from "./Hero.module.scss";

const Hero = () => {
  return (
    <div>
      <section className={style.hero}>
        <div className={style.containerHeader}>
          <div className={style.containerHeaderDesk}>
            <p>Celine Richardson, 14 yrs. old</p>
            <h1>Needs a Caring Parents</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              unde impedit, necessitatibus, soluta sit quam minima expedita
              atque corrupti reiciendis.
            </p>
            <button>Adopt Her Now!</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
