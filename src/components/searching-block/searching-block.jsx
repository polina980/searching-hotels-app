import styles from './searching-block.module.css';

function SearchingBlock({ handleSearch, location, checkIn, days, setLocation, setCheckIn, setDays }) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    handleSearch({ location, checkIn, days });
  };

  return (
    <form className={styles.location} onSubmit={handleSubmit}>
      <label className={styles.inputName}>Локация
        <input type="text" className={styles.input} placeholder="Москва"
          value={location.charAt(0).toUpperCase() + location.slice(1)}
          onChange={(event) => setLocation(event.target.value)} />
      </label>
      <label className={styles.inputName}>Дата заселения
        <input type="date" className={styles.input}
          defaultValue={checkIn}
          onChange={(event) => setCheckIn(event.target.value)} />
      </label>
      <label className={styles.inputName}>Количество дней
        <input type="text" className={styles.input} placeholder={days}
          onChange={(event) => setDays(event.target.value)} />
      </label>
      <button className={styles.button}>Найти</button>
    </form>
  )
}

export default SearchingBlock;
