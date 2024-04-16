import React from 'react';

interface Props {
  onScroll: (value: 'hidden' | 'visible') => void;
}

export const Menu: React.FC<Props> = ({ onScroll }) => {
  const links = ['Features', 'Materials', 'About us', 'Message us'];
  const getLink = (link: (typeof links)[number]) => {
    return link.toLowerCase().split(' ').join('-');
  };

  return (
    <aside className="menu" id="menu">
      <ul className="menu__links links">
        {links.map((link) => (
          <li className="item" key={link} onClick={() => onScroll('visible')}>
            <a href={`#${getLink(link)}`} className="link">
              {link}
            </a>
          </li>
        ))}
      </ul>

      <div className="menu__close">
        <p className="menu__close-text">CLOSE</p>

        <div className="menu__close-line" />

        <a
          href="#"
          className="menu__close-icon"
          onClick={() => onScroll('visible')}
          aria-label="menu-close-icon"
        >
          <span className="invisible">Menu close</span>
        </a>
      </div>
    </aside>
  );
};
