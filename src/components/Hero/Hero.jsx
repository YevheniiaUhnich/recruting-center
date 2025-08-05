import React from 'react';
import s from './Hero.module.css';

const Hero = () => {

  const scrollToVacancies = () => {
    const element = document.getElementById("vacancies");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <section className={s.hero} id="home">
      <div className={s.container}>
        <div className={s.content}>
          <h1 className={s.title}>
            Служи Україні з честю та гідністю
          </h1>
          <p className={s.subtitle}>
            Приєднуйся до лав Збройних Сил України. Захищай свою країну, 
            розвивай професійні навички та будуй успішну кар'єру в армії.
          </p>
          <div className={s.buttons}>
            <button onClick={scrollToVacancies} className={s.primaryBtn}>
              Переглянути вакансії
            </button>
            <button className={s.secondaryBtn}>
              Дізнатися більше
            </button>
          </div>
        </div>
        <div className={s.imageContainer}>
          <img 
            src="/dragon1.jpeg" 
            alt="Військовослужбовці" 
            className={s.heroImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;