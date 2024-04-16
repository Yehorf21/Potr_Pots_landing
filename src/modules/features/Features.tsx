import React from 'react';
import { featuresCards } from '../../helpers/context';
import { simplifyClasses } from '../../helpers/utils';

export const Features = () => {
  const simplifyFeatures = (name: string, i: number) => {
    return simplifyClasses('feature-card__', name, i);
  };
  return (
    <section className="features" id="features">
      <h2 className="features__title">
        POTR Pots <span className="outlined">Features</span>
      </h2>

      <div className="features__features">
        {featuresCards.map((card, i) => (
          <article
            className={`feature-card feature-card--${i + 1}`}
            key={i + 1}
          >
            <div className={simplifyFeatures('img', i)} />

            <h3 className="feature-card__title">{card.title}</h3>

            <p className="feature-card__text">{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
