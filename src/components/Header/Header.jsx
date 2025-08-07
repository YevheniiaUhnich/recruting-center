import s from './Header.module.css';
import { useTheme } from '../DarkModeContext/DarkModeContext';
import { useState, useEffect, useRef } from 'react';



const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  
  // Закриття меню при кліку поза ним
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);
  
  // Закриття меню при кліку на посилання
  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.logo}>
          <div className={s.logoPlaceholder}>
          <img src="/107Logo.png" alt="Логотип" width="60" height="60" />
            <span>107 РЕАБР</span>
          </div>
        </div>
        
        {/* Бургер-меню для мобільних пристроїв */}
        <button 
          className={`${s.burgerMenu} ${isMenuOpen ? s.active : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Меню"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        {/* Навігаційне меню */}
        <nav 
          className={`${s.nav} ${isMenuOpen ? s.navActive : ''}`}
          ref={menuRef}
        >
          <a href="#home" className={s.navLink} onClick={handleNavLinkClick}>Головна</a>
          <a href="#vacancies" className={s.navLink} onClick={handleNavLinkClick}>Вакансії</a>
          <a href="#conditions" className={s.navLink} onClick={handleNavLinkClick}>Контрактна служба</a>
          <a href="#benefits" className={s.navLink} onClick={handleNavLinkClick}>Відгуки</a>
          <a href="#contacts" className={s.navLink} onClick={handleNavLinkClick}>Контакти</a>
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