import React from 'react';
import VacancyCard from '../VacancyCard/VacancyCard';
import s from './Vacancies.module.css';

const vacanciesData = [
  {
    id: 1,
    title: "Офіцер зв'язку",
    image: "../../../public/Baner2.jpg",
    description: "Забезпечення надійного зв'язку між підрозділами, управління сучасним обладнанням зв'язку.",
    requirements: "Вища освіта, знання англійської мови, досвід роботи з радіообладнанням",
    salary: "25 000 - 35 000 грн"
  },
  {
    id: 2,
    title: "Механік-водій БТР",
    image: "../../../public/Baner2.jpg",
    description: "Управління та технічне обслуговування бронетранспортерів, забезпечення боєготовності техніки.",
    requirements: "Водійські права категорії C, технічна освіта, фізична підготовка",
    salary: "20 000 - 28 000 грн"
  },
  {
    id: 3,
    title: "Сапер",
    image: "../../../public/Baner2.jpg",
    description: "Розмінування територій, знешкодження вибухонебезпечних предметів, інженерні роботи.",
    requirements: "Спеціальна підготовка, стресостійкість, уважність, фізична витривалість",
    salary: "30 000 - 45 000 грн"
  },
  {
    id: 4,
    title: "Медик",
    image: "../../../public/Baner2.jpg",
    description: "Надання першої медичної допомоги, медичне забезпечення підрозділу.",
    requirements: "Медична освіта, сертифікат медика, досвід роботи в екстремальних умовах",
    salary: "22 000 - 32 000 грн"
  },
  {
    id: 5,
    title: "Кіберспеціаліст",
    image: "../../../public/Baner2.jpg",
    description: "Захист інформаційних систем, кібербезпека, аналіз загроз у кіберпросторі.",
    requirements: "IT-освіта, знання кібербезпеки, досвід програмування, англійська мова",
    salary: "35 000 - 50 000 грн"
  },
  {
    id: 6,
    title: "Розвідник",
    image: "../../../public/Baner2.jpg",
    description: "Збір розвідувальної інформації, проведення спеціальних операцій.",
    requirements: "Відмінна фізична підготовка, психологічна стійкість, знання іноземних мов",
    salary: "28 000 - 40 000 грн"
  }
];

const Vacancies = () => {
  return (
    <section className={s.vacancies} id="vacancies">
      <div className={s.container}>
        <h2 className={s.title}>Актуальні вакансії</h2>
        <p className={s.subtitle}>
          Обери свій шлях служіння Україні. Кожна позиція - це можливість захистити країну та розвинути професійні навички.
        </p>
        
        <div className={s.grid}>
          {vacanciesData.map(vacancy => (
            <VacancyCard key={vacancy.id} vacancy={vacancy} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vacancies;