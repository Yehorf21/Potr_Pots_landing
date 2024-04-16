import React from 'react';

export const Header = () => {
  return (
    <section className="header">
      <div className="header__top">
        {/* wrapped in a container for better control over the image */}
        <div className="header__bg">
          <div className="header__bg-img" />
        </div>

        <h2 className="header__title">
          <span className="outlined">POTR ~ Eco, self-</span>
          watering, origami <span className="outlined">plant</span>{' '}
          pots
        </h2>
      </div>

      <div className="header__price">
        <h3 className="header__price-price">$ 7,50</h3>

        <p className="header__price-description">
          Get the second order in half price
        </p>
      </div>

      <button className="header__button button button--yellow unavailable-feature">
        <p className="button-text">Buy now</p>

        <div className="button-icon">
          <div className="button-arrow" />
        </div>
      </button>

      <a href="#features" className="header__link">
        <div className="header__link-text">More about POTR POTS</div>

        <div className="header__link-arrow" />
      </a>

      <div className="header__side-text side-text">
        <div className="side-text__line" />

        <div className="side-text__text">POTR POTS</div>
      </div>
    </section>
  );
};
