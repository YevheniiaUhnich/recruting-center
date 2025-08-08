import { useEffect, useState } from "react";
import s from './ScrollToTopButton.module.css';
import { AiOutlineUpCircle } from "react-icons/ai";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => removeEventListener("scroll", toggleVisibility)
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    isVisible &&
    <button
        className={s.scrollTo}
        onClick={scrollToTop}
        aria-label="Повернутися нагору"
      >
    <AiOutlineUpCircle />
        
    </button>
  )
}
export default ScrollToTopButton;