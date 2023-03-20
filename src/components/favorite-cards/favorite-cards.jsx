import styles from './favorite-cards.module.css';
import AboutHotel from '../about-hotel/about-hotel.jsx';

function FavoriteCards({ hotels, days, formattedDate }) {
  const filteredHotels = hotels.filter((hotel) => JSON.parse(localStorage.getItem(hotel.hotelId)));

  return (
    <section className={styles.favorite}>
      <h2 className={styles.title}>Избранное</h2>
      <div className={styles.buttons}>
        <button className={styles.sort}>Рейтинг</button>
        <button className={styles.sort}>Цена</button>
      </div>
      <div className={styles.favScroll}>
        {filteredHotels.map((hotel) => (
          <AboutHotel
            key={hotel.hotelId}
            hotel={hotel}
            days={days}
            formattedDate={formattedDate} />
        ))}
      </div>
    </section>
  );
}

export default FavoriteCards;
