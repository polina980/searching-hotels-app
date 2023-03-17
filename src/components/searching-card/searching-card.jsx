import { todaysDate } from '../../utils/constants.js';
import { useState } from 'react';
import styles from './searching-card.module.css';

function SearchingCard({ handleSearch }) {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState(new Date().toISOString().slice(0, 10));
  const [days, setDays] = useState(1);

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleSearch({ location, checkIn, days });
  };

  return (
    <form className={styles.location} onSubmit={handleSubmit}>
      <label className={styles.inputName}>Локация
        <input type="text" className={styles.input} placeholder="Москва" value={location} onChange={(event) => setLocation(event.target.value)} />
      </label>
      <label className={styles.inputName}>Дата заселения
        <input type="date" className={styles.input} defaultValue={todaysDate} onChange={(event) => setCheckIn(event.target.value)} />
      </label>
      <label className={styles.inputName}>Количество дней
        <input type="text" className={styles.input} placeholder={days} onChange={(event) => setDays(event.target.value)} />
      </label>
      <button className={styles.button}>Найти</button>
    </form>
  )
}

export default SearchingCard;
