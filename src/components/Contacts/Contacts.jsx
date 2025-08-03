import s from './Contacts.module.css';
const Contacts = () => {
  return (
    <section className={s.contacts} id="contacts">
            <div className={s.container}>
              <h2 className={s.title}>Контакти</h2>
              <div className={s.contactsContent}>
                <div className={s.contactInfo}>
                  <div className={s.contactItem}>
                    <span className={s.contactIcon}>📞</span>
                    <div>
                      <h3>Телефон для довідок</h3>
                      <p>+38 (000) 111-22-33</p>
                      <p>+38 (050) 111-22-33</p>
                    </div>
                  </div>
                  
                  <div className={s.contactItem}>
                    <span className={s.contactIcon}>📧</span>
                    <div>
                      <h3>Електронна пошта</h3>
                      <p>aaaaaaaaaa@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className={s.contactItem}>
                    <span className={s.contactIcon}>📍</span>
                    <div>
                      <h3>Адреса</h3>
                      <p>Україна</p>
                    </div>
                  </div>
                </div>
                
                <div className={s.socialMedia}>
                  <h3>Слідкуйте за нами</h3>
                  <div className={s.socialLinks}>
                    <a href="#" className={s.socialLink} aria-label="Facebook">
                      <span>📘</span>
                    </a>
                    <a href="#" className={s.socialLink} aria-label="Instagram">
                      <span>📷</span>
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