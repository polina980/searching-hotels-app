import styles from './favorite-card.module.css';
import AboutHotel from '../about-hotel/about-hotel.jsx';

function FavoriteCard() {
  return (
    <section className={styles.favorite}>
      <h2 className={styles.title}>Избранное</h2>
      <div className={styles.buttons}>
        <button className={styles.sort}>Рейтинг</button>
        <button className={styles.sort}>Цена</button>
      </div>
      <div className={styles.blocks}>
        <AboutHotel />
        <AboutHotel />
        <AboutHotel />
      </div>
    </section>
  )
}

export default FavoriteCard;
