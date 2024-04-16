import React from 'react';
import { forWhomCards } from '../../helpers/context';
import { useAppSelector } from '../../store/hooks';
import { simplifyClasses } from '../../helpers/utils';

export const ForWhom = () => {
  const { viewportWidth } = useAppSelector((state) => state.viewport);

  const simplifyForWhom = (name: string, i: number) => {
    return simplifyClasses('for-whom-card__', name, i);
  };

  return (
    <section className="for-whom">
      <h2 className="for-whom__title">For whom?</h2>

      <div className="for-whom__cards">
        {forWhomCards.map((card, i) => (
          <article className={`for-whom-card for-whom-card--${i + 1}`} key={i}>
            {viewportWidth >= 640 && (
              <div className={simplifyForWhom('image', i)} />
            )}

            <div className={simplifyForWhom('container', i)}>
              <div className={simplifyForWhom('adjective', i)}>
                <span className="for-whom-card__adjective--star">*</span>
                {card.adjective}
              </div>

              <div className={simplifyForWhom('counter', i)} key={i + 1} />

              <div className="for-whom-card__text">
                <h3 className="for-whom-card__text-title">{card.title}</h3>

                <p className="for-whom-card__text-description">{card.text}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="for-whom__side-text side-text">
        <div className="side-text__text side-text__text--for-whom">POTR POTS</div>

        <div className="side-text__line" />
      </div>
    </section>
  );
};
