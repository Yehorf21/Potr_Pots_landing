import React from 'react';
import { potrSizeCards } from '../../helpers/context';

export const PotrSize = () => {
  return (
    <section className="potr-size">
      <h2 className="potr-size__title">Which size POTR for my house plant ?</h2>

      <article className="potr-size__section">
        <p className="potr-size__description potr-size__description--top">
          Pre potted plants come in fairly standard sized pots, and can be
          classified into one of two categories:
        </p>

        <div className="potr-size__card">
          <div className="potr-size__texts">
            {potrSizeCards.map((card) => (
              <div className="potr-size__text">
                <h4 className="potr-size__text-title">{card.title}</h4>

                <p className="potr-size__description">{card.description}</p>
              </div>
            ))}
          </div>

          <div className="potr-size__img" />
        </div>

        <p className="potr-size__description potr-size__description--bottom">
          POTR Pots have a little bit of give around the top rim so can fit
          slightly larger sizes than the recommended sizes stated above if
          necessary.
        </p>
      </article>
    </section>
  );
};
