import React, { useState } from 'react';
import cn from 'classnames';
import { simplifyClasses } from '../../helpers/utils';
import { useAppSelector } from '../../store/hooks';
import { materialCards } from '../../helpers/context';

export const Materials = () => {
  const [activeCard, setActiveCard] = useState(1);
  const { viewportWidth } = useAppSelector(state => state.viewport);

  const simplifyMaterials = (name: string, i: number) => {
    return simplifyClasses('materials__', name, i);
  };

  const handleClick = (cardId: number) => {
    setActiveCard((prev) => (prev === cardId ? 0 : cardId));
  };

  let touchX = 0;
  let isTouchHandled = true;

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    isTouchHandled = false;
    touchX = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const newTouchX = e.touches[0].clientX;
    const deltaX = touchX - newTouchX;

    // this feature has to work only on phones
    if (!isTouchHandled && viewportWidth <= 639) {
      if (deltaX >= 50) {
        setActiveCard(prev => prev === 5 ? 1 : prev + 1);

        touchX = newTouchX;
        isTouchHandled = true;
      }

      if (deltaX <= -50) {
        setActiveCard(prev => prev === 1 ? 5 : prev - 1);

        touchX = newTouchX;
        isTouchHandled = true;
      }
    }
  };

  return (
    <section className="materials" id="materials">
      <h2 className="materials__title">Materials and Features</h2>

      <div className="materials__text">
        <h3 className="materials__text-title">Environmentally friendly</h3>

        <p className="materials__text-text">
          All materials used in our pots are made from{' '}
          <span className="strong">100% recycled materials </span>
          and are{' '}
          <span className="strong">
            100% recyclable at the end of life
          </span>{' '}
          (should you ever choose to get rid of your POTR!). All materials have
          been sourced from within Europe to reduce our carbon footprint when
          transporting the raw materials, and all manufacturing is carried out
          in the UK.
        </p>
      </div>

      <div className="materials__bg" />

      {[1, 2, 3, 4, 5].map((card) => (
        <article className={simplifyMaterials('card', card - 1)}>
          <div
            className={cn(simplifyMaterials('clicker', card - 1), {
              selected: activeCard === card,
            })}
            onClick={() => handleClick(card)}
          >
            {activeCard === card ? '-' : '+'}
          </div>

          <div
            className="materials__description-card"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <div
              className={cn(simplifyMaterials('description', card - 1), {
                invisible: activeCard !== card,
              })}
            >
              {materialCards[card - 1]}
            </div>

            <div
              className={cn('materials__indexes', {
                invisible: activeCard !== card,
              })}
            >
              {[1, 2, 3, 4, 5].map((index) => (
                <div className={cn('materials__index', {
                  'materials__index--selected': activeCard === index,
                })} />
              ))}
            </div>
          </div>
        </article>
      ))}

      <div className="materials__side-text materials__side-text--right side-text">
        <div className="side-text__line" />

        <div className="side-text__text">POTR POTS</div>
      </div>

      <div className="materials__side-text materials__side-text--left side-text">
        <div className="side-text__line" />

        <div className="side-text__text">POTR POTS</div>
      </div>
    </section>
  );
};
