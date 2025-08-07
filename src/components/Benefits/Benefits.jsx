import React from 'react';
import s from './Benefits.module.css';
import benefitsData from '../../data/benefitsData';
import { MdStarBorder } from "react-icons/md";
  

const Benefits = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <MdStarBorder key={index} className={`${s.star} ${index < rating ? s.filled : ''}`}/>

    ));
  };

  return (
    <section className={s.benefits} id="benefits">
      <div className={s.container}>
        <h2 className={s.title}>Переваги військової служби</h2>
        <p className={s.subtitle}>
          Відгуки наших військовослужбовців про переваги служби <br></br> в 107 реактивної артилерійської Кременчуцької бригади Збройних Сил України 
        </p>
        
        <div className={s.grid}>
          {benefitsData.map(benefit => (
            <div key={benefit.id} className={s.card}>
              <div className={s.header}>
              <div className={s.info}>
                  <h3 className={s.name}>{benefit.name}</h3>
                  <p className={s.position}>{benefit.rank}</p>
                  <p className={s.position}>{benefit.position}</p>
                 
                  
                  <p className={s.experience}>{benefit.experience}</p>
                </div>

                <img src={benefit.avatar} alt={benefit.name} className={s.avatar} />
                
              </div>
              
              <div className={s.rating}>
                {renderStars(benefit.rating)}
              </div>
              
              <p className={s.review}>"{benefit.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;