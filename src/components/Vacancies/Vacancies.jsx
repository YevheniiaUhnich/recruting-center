import React from 'react';
import VacancyCard from '../VacancyCard/VacancyCard';
import s from './Vacancies.module.css';
import vacanciesData
  from '../../data/vacanciesData';

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