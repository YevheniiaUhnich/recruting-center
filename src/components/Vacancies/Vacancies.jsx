import React from 'react';
import VacancyCard from '../VacancyCard/VacancyCard';
import s from './Vacancies.module.css';
import vacanciesData
  from '../../data/vacanciesDataOfficer';
import vacanciesDataSergeant from '../../data/vacanciesDataSergeant';
import vacanciesDataSoldier from '../../data/vacanciesDataSoldier';

const Vacancies = () => {
  return (
    <section className={s.vacancies} id="vacancies">

      <div className={s.container}>
        <h2 className={s.title}>Актуальні вакансії</h2>
        <p className={s.subtitle}>
          Обери свій шлях служіння Україні. Кожна позиція - це можливість захистити країну та розвинути професійні навички.
        </p>

        <h3 className={s.titleVacancy}>Офіцерські посади</h3>
        
        <div className={s.scrollContainer}>
  <div className={s.cardRow}>
    {vacanciesData.map(vacancy => (
      <VacancyCard key={vacancy.id} vacancy={vacancy} />
    ))}
  </div>
</div>

        <h3 className={s.titleVacancy}>Сержантськи посади</h3>

        <div className={s.scrollContainer}>
        <div className={s.cardRow}>
          {vacanciesDataSergeant.map(vacancy => (
            <VacancyCard key={vacancy.id} vacancy={vacancy} />
          ))}
          </div>
          </div>

        <h3 className={s.titleVacancy}>Солдатськи посади</h3>

        <div className={s.scrollContainer}>
        <div className={s.cardRow}>
          {vacanciesDataSoldier.map(vacancy => (
            <VacancyCard key={vacancy.id} vacancy={vacancy} />
          ))}
          </div>
          </div>

      </div>
    </section>
  );
};

export default Vacancies;