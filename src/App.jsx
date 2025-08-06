import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Benefits from './components/Benefits/Benefits';
import Vacancies from './components/Vacancies/Vacancies';
import Condition from './components/Condition/Condition';
import Contacts from './components/Contacts/Contacts';
import s from "./App.module.css";
import './App.css';
import { useTheme } from './components/DarkModeContext/DarkModeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <a onClick={toggleTheme}>
      {isDark ? 'Світла тема' : 'Темна тема'}
    </a>
  );
};

function App() {
  return (
    <div className={s.app}>
      <ThemeToggle />
      <Header />
      <Hero />
      <Vacancies />
      <Condition />
      <Benefits />
      <Contacts />
    </div>
  );
}

export default App;
