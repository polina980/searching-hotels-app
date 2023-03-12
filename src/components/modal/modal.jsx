import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { emailRegex, passwordRegex } from '../../utils/constants.js';
import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay.jsx';

function Modal() {
  const [state, setState] = useState({ email: '', password: '' });
  const [valueError, setValueError] = useState({ email: '', password: '' });
  const [isValidForm, setIsValidForm] = useState(false);
  const { email, password } = state;

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValidForm && !valueError.email && !valueError.password) {
      navigate('/hotels');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const blurHandler = (event) => {
    const { name, value } = event.target;
    let isValid = true;

    if (!value) {
      setValueError((prev) => ({ ...prev, [name]: 'Поле не может быть пустым' }));
    } else if (name === 'email' && !value.includes('@')) {
      setValueError((prev) => ({ ...prev, [name]: 'Введите корректный e-mail' }));
    } else if (name === 'email' && !emailRegex.test(value)) {
      setValueError((prev) => ({ ...prev, [name]: 'Введите корректный e-mail' }));
    } else if (name === 'password' && !passwordRegex.test(value)) {
      setValueError((prev) => ({ ...prev, [name]: 'Пароль должен содержать не менее 8 символов' }));
    } else {
      setValueError((prev) => ({ ...prev, [name]: '' }));
    }

    setIsValidForm(isValid);
  };

  return createPortal(
    <>
      <ModalOverlay />
      <form className={styles.form}>
        <h2 className={styles.title}>Simple Hotel Check</h2>
        <label className={`${styles.inputName} ${valueError.email && styles.errorColor}`}>
          Логин
          <input
            type="text"
            className={`${styles.input} ${valueError.email && styles.errorColor}`}
            onChange={handleChange}
            onBlur={blurHandler}
            value={email}
            name={'email'}
          />
          {valueError.email && <div className={styles.error}>{valueError.email}</div>}
        </label>
        <label className={`${styles.inputName} ${valueError.password && styles.errorColor}`}>
          Пароль
          <input
            type="password"
            className={`${styles.input} ${valueError.password && styles.errorColor}`}
            onChange={handleChange}
            onBlur={blurHandler}
            value={password}
            name={'password'}
          />
          {valueError.password && <div className={styles.error}>{valueError.password}</div>}
        </label>
        <button className={styles.button} onClick={handleSubmit} disabled={!isValidForm}>Войти</button>
      </form>
    </>,
    document.getElementById('modal')
  );
}

export default Modal;
