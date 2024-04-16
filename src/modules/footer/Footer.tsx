import React from 'react';
import { simplifyClasses } from '../../helpers/utils';

export const Footer = () => {
  const simplifyFooter = (name: string, i: number) => {
    return simplifyClasses('footer__', name, i);
  };

  const iconLinks = [
    'https://www.twitter.com',
    'https://www.instagram.com',
    'https://www.facebook.com',
  ];

  return (
    <section className="footer">
      <div className="footer__left-section">
        <h3 className="footer__title">Adrress</h3>

        <p className="footer__info">
          United Kingdom 99 Staple Hill Road, Bristol, BS16 5AD
        </p>
      </div>

      <div className="footer__main">
        <div className="footer__icons">
          {[1, 2, 3].map((index, i) => (
            <a href={iconLinks[i]} target="_blank" rel="noreferrer">
              <div className={simplifyFooter('icon', index - 1)} />
            </a>
          ))}
        </div>

        <p className="footer__logo">POTRPOTS</p>
      </div>

      <div className="footer__right-section">
        <h3 className="footer__title">About us</h3>

        <p className="footer__info">Copyright © 2019</p>
      </div>
    </section>
  );
};
