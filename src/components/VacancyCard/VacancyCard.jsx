import React, { useState } from 'react';
import s from './VacancyCard.module.css';
import ModalVacancy from '../ModalVacancy/ModalVacancy';

const VacancyCard = ({ vacancy }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  const handleApply = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  return (
    <>
      <div 
        className={`${s.card} ${isPressed ? s.pressed : ''}`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div className={s.imageContainer}>
          <img src={vacancy.image} alt={vacancy.title} className={s.image} />
        </div>
        
        <div className={s.content}>
          <h3 className={s.title}>{vacancy.title}</h3>
          
          <div className={s.section}>
            <h4 className={s.sectionTitle}>Опис вакансії:</h4>
            <p className={s.description}>{vacancy.description}</p>
          </div>
          
          <div className={s.section}>
            <h4 className={s.sectionTitle}>Вимоги до кандидата:</h4>
            <p className={s.requirements}>{vacancy.requirements}</p>
          </div>
          
          <div className={s.actions}>
            <button className={s.applyBtn} onClick={handleApply}>
              Подати заявку
            </button>
            <div className={s.salary}>
              <span className={s.salaryLabel}>Зарплата:</span>
              <span className={s.salaryAmount}>{vacancy.salary}</span>
            </div>
          </div>
        </div>
      </div>
      
      <ModalVacancy 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        vacancy={vacancy} 
      />
    </>
  );
};

export default VacancyCard;