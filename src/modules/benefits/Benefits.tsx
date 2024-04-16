import React, { useState } from 'react';
import cn from 'classnames';

import { benefitsCards } from '../../helpers/context';

export const Benefits = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="benefits">
      <div className="benefits__img" />

      <article className="benefits__card">
        <div className="benefits__benefits">
          {benefitsCards.map((card) => (
            <div className="benefits__benefit">
              <h3 className="benefits__title">{card.title}</h3>

              <p className="benefits__description">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="benefits__checkout">
          <button
            className="benefits__buy button button--yellow-turqoise unavailable-feature"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <p
              className={cn('button-text', {
                'button-text--white': hovered,
              })}
            >
              Buy now
            </p>

            <div className="button-icon">
              <div
                className={cn('button-arrow', {
                  'button-arrow--white': hovered,
                })}
              />
            </div>
          </button>

          <div className="benefits__price-info">
            <p className="benefits__discount">50% off</p>

            <p className="benefits__ad">Get the second order in half price</p>
          </div>
        </div>
      </article>

      <div className="benefits__side-text side-text">
        <div className="side-text__line" />

        <div className="side-text__text side-text__text">POTR POTS features</div>
      </div>
    </section>
  );
};
