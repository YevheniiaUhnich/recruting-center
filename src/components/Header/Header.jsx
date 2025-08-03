import s from './Header.module.css';
import { useTheme } from '../DarkModeContext/DarkModeContext';


const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
      <header className={s.header}>
   
    <div className={s.container}>
      <div className={s.logo}>
        <div className={s.logoPlaceholder}>
          <span>🪖</span>
          <span>ВІЙСЬКОВА ЧАСТИНА</span>
        </div>
      </div>
      
      <nav className={s.nav}>
        <a href="#home" className={s.navLink}>Головна</a>
        <a href="#vacancies" className={s.navLink}>Вакансії</a>
          <a href="#conditions" className={s.navLink}>Контрактна служба</a>
          <a href="#benefits" className={s.navLink}>Відгуки</a>
        <a href="#contacts" className={s.navLink}>Контакти</a>
      </nav>

      <button 
        className={s.themeToggle}
        onClick={toggleTheme}
        aria-label="Перемикач теми"
      >
          {isDark ? 'light' : 'night'}
      </button>
        </div>
     
      </header>
     
  )
} 

export default Header;