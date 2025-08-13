import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Benefits from './components/Benefits/Benefits';
import Vacancies from './components/Vacancies/Vacancies';
import Condition from './components/Condition/Condition';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import s from "./App.module.css";
import './App.css';
import { useTheme } from './components/DarkModeContext/DarkModeContext';
import AboutUs from './components/AboutUs/AboutUs';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <a onClick={toggleTheme}>
      {isDark ? '' : ''}
    </a>
  );
};

function App() {
  return (
    <div className={s.app}>
      <ThemeToggle />
      <Header />
      <Hero />
      <AboutUs />
      <Vacancies />
      <Condition />
      <Benefits />
      <Contacts />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
