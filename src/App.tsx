import React, { useEffect } from 'react';
import './App.scss';

import { Header } from './modules/header';
import { ForWhom } from './modules/for-whom';
import { Features } from './modules/features';
import { PotrTeam } from './modules/potr-team';
import { Materials } from './modules/materials';
import { PotrSize } from './modules/potr-size';
import { Benefits } from './modules/benefits';
import { Questions } from './modules/questions';
import { Footer } from './modules/footer';
import { useAppDispatch } from './store/hooks';
import { actions as vieportActions } from './store/reducers/viewport';
import { Menu } from './modules/menu';
import { Nav } from './modules/nav';

function App() {
  const dispatch = useAppDispatch();

  const setViewportWidth = (value: number) => {
    dispatch(vieportActions.setViewportWidth(value));
  };

  useEffect(() => {
    const handleVieportWidth = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleVieportWidth);

    return () => window.removeEventListener('resize', handleVieportWidth);
  }, []);

  const handleScrolling = (value: 'hidden' | 'visible') => {
    const body = document.querySelector('body');

    if (body) {
      body.style.overflowY = value;
    }
  };

  return (
    <div className="Potr-Pots">
      <header>
        <Nav onScroll={handleScrolling} />

        <Header />
      </header>

      <Menu onScroll={handleScrolling} />

      <main>
        <ForWhom />
        <Features />
        <PotrTeam />
        <Materials />
        <PotrSize />
        <Benefits />
        <Questions />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
