import { todaysDate } from '../../utils/constants.js';
import styles from './searching-card.module.css';

function SearchingCard() {
  return (
    <form className={styles.location}>
      <label className={styles.inputName}>Локация
        <input type="text" className={styles.input} placeholder="Москва" />
      </label>
      <label className={styles.inputName}>Дата заселения
        <input type="date" className={styles.input} defaultValue={todaysDate} />
      </label>
      <label className={styles.inputName}>Количество дней
        <input type="text" className={styles.input} placeholder="1" />
      </label>
      <button className={styles.button}>Найти</button>
    </form>
  )
}

export default SearchingCard;
