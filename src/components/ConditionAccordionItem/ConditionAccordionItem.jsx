import React, { useState } from 'react';
import s from './ConditionAccordionItem.module.css';

const ConditionAccordionItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${s.item} ${isOpen ? s.open : ''}`}>
      <button className={s.header} onClick={toggleOpen}>
        <h3 className={s.title}>{item.title}</h3>
        <span className={s.icon}>
          {isOpen ? '−' : '+'}
        </span>
      </button>
      
      {isOpen && (
  <div className={s.contentWrapper}>
    <div className={s.content}>
      <p>{item.content}</p>
    </div>
  </div>
)}

    </div>
  );
};

export default ConditionAccordionItem;