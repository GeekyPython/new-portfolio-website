import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './store/pageStylesSlice';
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';

import { IntroPage } from './components/intro';
import { AboutPage } from './components/about';
import { WorkPage } from './components/work/work';
import { ContactPage } from './components/contact';

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.pageStyles.theme);

  return (
    <div className={`App ${theme}`}>
    <nav className={`navbar ${theme}`}>
      <div className="logo">
        <h1>./PI</h1>
      </div>
      <div className="page-controls">
        <div className="navlist">
          <a href="#intro" className="navlink"><p>Home</p></a>
          <a href="#about" className="navlink"><p>About</p></a>
          <a href="#work" className="navlink"><p>Work</p></a>
          <a href="#contact" className="navlink"><p>Contact</p></a>
        </div>
        <div className={`theme-toggle ${theme}`}>
          <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} onClick={() => dispatch(toggleTheme())} size="xl"/>
        </div>
      </div>
    </nav>
    <IntroPage />
    <AboutPage />
    <WorkPage />
    <ContactPage />
    </div>
  );
}

export default App;
