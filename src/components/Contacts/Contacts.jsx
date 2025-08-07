import s from './Contacts.module.css';
import { SlSocialFacebook } from 'react-icons/sl';
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { GrLocationPin } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa6";


const Contacts = () => {
  return (
    <section className={s.contacts} id="contacts">
            <div className={s.container}>
              <h2 className={s.title}>Контакти</h2>
              <div className={s.contactsContent}>
                <div className={s.contactInfo}>
                  <div className={s.contactItem}>
              <AiOutlinePhone className={s.contactIcon}/>
                    <div>
                      <h3>Телефон для довідок</h3>
                      <p>+38 (000) 111-22-33</p>
                      <p>+38 (050) 111-22-33</p>
                    </div>
                  </div>
                  
                  <div className={s.contactItem}>
              
              <AiOutlineMail className={s.contactIcon}/>
              
                    <div>
                      <h3>Електронна пошта</h3>
                      <p>107reabrcvs@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className={s.contactItem}>
              
              <GrLocationPin className={s.contactIcon}/>
                    <div>
                      <h3>Адреса</h3>
                      <p>Україна</p>
                    </div>
                  </div>
                </div>
                
                <div className={s.socialMedia}>
                  <h3>Слідкуйте за нами</h3>
                  <div className={s.socialLinks}>
                    <a href="https://www.facebook.com/107Kremenchuk?locale=uk_UA" className={s.socialLink} aria-label="Facebook" target="_blank">
                      <SlSocialFacebook />
                    </a>
                    <a href="https://www.instagram.com/107reabr/?igsh=d2J4aDhnNWttNmE%3D#" className={s.socialLink} aria-label="Instagram">
                    <FaInstagram />
                    </a>
                    <a href="#" className={s.socialLink} aria-label="Telegram">
                      <span>✈️</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default Contacts;