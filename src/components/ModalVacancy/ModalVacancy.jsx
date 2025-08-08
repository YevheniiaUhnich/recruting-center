import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useEffect, useRef } from 'react';
import s from './ModalVacancy.module.css';

const ModalVacancy = ({ isOpen, onClose, vacancy }) => {
  const modalContentRef = useRef(null);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [isOpen, onClose]);

  const handleOverlayClick = (event) => {
    if (modalContentRef.current && !modalContentRef.current.contains(event.target)) {
      onClose();
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Ім'я обов'язкове"),
    age: Yup.number()
      .required("Вік обов'язковий")
      .min(18, "Вік повинен бути більше 18 років")
      .max(65, "Вік повинен бути менше 65 років"),
    phone: Yup.string().required("Телефон обов'язковий"),
    position: Yup.string().required("Обрана посада обов'язкова"),
    militaryStatus: Yup.string().required("Статус військової служби обов'язковий"),
  });

  const initialValues = {
    name: '',
    age: '',
    phone: '',
    position: '',
    militaryStatus: '',
  };

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const formData = new URLSearchParams();
      formData.append("name", values.name);
      formData.append("age", values.age);
      formData.append("phone", values.phone);
      formData.append("position", values.position);
      formData.append("militaryStatus", values.militaryStatus);
      formData.append("vacancy", vacancy?.title || 'Не вказано');

      const response = await fetch('https://script.google.com/macros/s/AKfycbysB3_D0kGJW8r0OS60t_OuesgnBUWHeYoXMk-Pro1rdTQxoaEK-wlmsxG9OdBbelDkFA/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });

      const result = await response.json();

      if (result.result === 'success') {
        alert('Заявка успішно відправлена!');
        resetForm();
        onClose();
      } else {
        alert('Помилка при надсиланні: ' + result.error);
      }
    } catch (error) {
      console.error('Помилка при надсиланні:', error);
      alert('Не вдалося відправити форму. Спробуйте пізніше.');
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={s['modal-overlay']} onClick={handleOverlayClick}>
      <div className={s['modal-content']} ref={modalContentRef}>
        <button className={s['close-button']} onClick={onClose}>×</button>
        <h2>{vacancy ? `Подати заявку на вакансію: ${vacancy.title}` : 'Подати заявку'}</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <div className={s['form-group']}>
                <label htmlFor="name">Прізвище, Ім'я, По-батькові</label>
                <Field type="text" id="name" name="name" />
                <ErrorMessage name="name" component="div" className={s.error} />
              </div>

              <div className={s['form-group']}>
                <label htmlFor="age">Вік</label>
                <Field type="number" id="age" name="age" />
                <ErrorMessage name="age" component="div" className={s.error} />
              </div>

              <div className={s['form-group']}>
                <label htmlFor="phone">Телефон</label>
                <Field type="tel" id="phone" name="phone" />
                <ErrorMessage name="phone" component="div" className={s.error} />
              </div>

              <div className={s['form-group']}>
                <label htmlFor="position">Обрана посада</label>
                <Field type="text" id="position" name="position" />
                <ErrorMessage name="position" component="div" className={s.error} />
              </div>

              <div className={s['form-group']}>
                <label>Статус військової служби</label>
                <div className={s['radio-group']}>
                  <label className={s['radio-label']}>
                    <Field type="radio" name="militaryStatus" value="Перебуваю навійськовій службі" />
                    Перебуває на військовій службі
                  </label>
                  <label className={s['radio-label']}>
                    <Field type="radio" name="militaryStatus" value="Не перебуваю на військовій службі" />
                    Не перебуває на військовій службі
                  </label>
                </div>
                <ErrorMessage name="militaryStatus" component="div" className={s.error} />
              </div>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Відправка...' : 'Відправити заявку'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ModalVacancy;
