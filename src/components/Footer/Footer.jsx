import s from './Footer.module.css';

const Footer = () => {
  const currenYear = new Date().getFullYear();
  return (
    <div>
      <hr className={s.line} />
      <p className={s.text}>© {currenYear} Онлайн-рекрутинговий центр 107 РЕАБР</p>
    </div>
  )
}

export default Footer;