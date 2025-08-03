import React from 'react';
import AccordionItem from '../ConditionAccordionItem/ConditionAccordionItem';
import s from './Condition.module.css';
import conditionsData from '../../data/conditionsData';


const Conditions = () => {
  return (
    <section className={s.conditions} id="conditions">
      <div className={s.container}>
        <h2 className={s.title}>Умови проходження військової служби</h2>
        <p className={s.subtitle}>
          Детальна інформація про всі аспекти військової служби за контрактом в Збройних Силах України
        </p>
        
        <div className={s.accordion}>
          {conditionsData.map(item => (
            <AccordionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conditions;