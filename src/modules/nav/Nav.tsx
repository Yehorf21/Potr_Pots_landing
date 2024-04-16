import React from 'react';
import { useAppSelector } from '../../store/hooks';

interface Props {
  onScroll: (value: 'hidden' | 'visible') => void;
}

export const Nav: React.FC<Props> = ({ onScroll }) => {
  const { viewportWidth } = useAppSelector((state) => state.viewport);

  const currentIcon = viewportWidth >= 1200 ? 'cart' : 'burger';
  const currentLink = currentIcon === 'burger' ? '#menu' : '#';
  const handleIconClick = () => {
    if (viewportWidth < 1200) {
      onScroll('hidden');
    }
  };

  const links = ['Features', 'Materials', 'About us', 'Message us'];
  const getLink = (link: (typeof links)[number]) => {
    return link.toLowerCase().split(' ').join('-');
  };

  return (
    <nav className="nav">
      <h1 className="nav__title">POTR POTS</h1>

      {viewportWidth >= 1200 && (
        <ul className="links">
          {links.map((link) => (
            <li className="item" key={link}>
              <a href={`#${getLink(link)}`} className="link">
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}

      <a href={currentLink} className="nav__icon" onClick={handleIconClick}>
        <div
          className={`nav__icon--${currentIcon} unavailable-feature unavailable-feature--left`}
        />
      </a>
    </nav>
  );
};
