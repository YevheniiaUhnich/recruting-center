import s from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <section className={s.container}>
      <div className={s.topRule} aria-hidden="true" />

      <div className={s.about}>
        <img className={s.imgAbout} src="/dragonAbout.jpg" alt="AboutUsDragon" />
        <div className={s.blockText}>
          <h2 className={s.title}>Про нас</h2>
          <p className={s.text}>
            107 реактивна артилерійська Кременчуцька бригада — елітний підрозділ Сил оборони України, що має високий рівень бойової підготовки та сучасне озброєння. Особовий склад проходить інтенсивне навчання, що дозволяє ефективно виконувати бойові завдання в будь-яких умовах.
            Командування приділяє особливу увагу збереженню життя та здоров’я військовослужбовців, впроваджуючи передові методи планування та безпеки. Завдяки професіоналізму, дисципліні та злагодженості дій бригади рівень втрат серед особового складу залишається одним із найнижчих у Збройних Силах України
          </p>
        </div>
      </div>
      <div className={s.topRule} aria-hidden="true" />
    </section>
  );
};

export default AboutUs;
