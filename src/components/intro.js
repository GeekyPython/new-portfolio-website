import './styles/intro.css';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export const IntroPage = () => {
    const theme = useSelector((state) => state.pageStyles.theme);
  return (
    <div className={`intro ${theme}`} id='intro'>
      <div className="intro-text">
        <h1>Hi there! This is Purohit Iyer</h1>
        <h2>I'm a software engineer and a fullstack web developer based out of Bangalore, India</h2>
        
        <div className="navigate-below">
          <h3>Know more</h3>
          <a href="#about"><FontAwesomeIcon icon={faChevronDown} className="nav-button"/></a>
        </div>
  
      </div>
    </div>
  );
}