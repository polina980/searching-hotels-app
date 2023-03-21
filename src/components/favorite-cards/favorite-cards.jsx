import { useMemo, useState } from 'react';
import styles from './favorite-cards.module.css';
import AboutHotel from '../about-hotel/about-hotel.jsx';

function FavoriteCards({ hotels, days, formattedDate }) {
  const favoriteHotels = hotels.filter((hotel) => JSON.parse(localStorage.getItem(hotel.hotelId)));

  const [sortMethod, setSortMethod] = useState('rating');
  const [sortOrder, setSortOrder] = useState('desc');

  const sortedHotels = useMemo(() => {
    const sorted = [...favoriteHotels].sort((a, b) => {
      if (sortMethod === 'rating') {
        return sortOrder === 'desc' ? b.stars - a.stars : a.stars - b.stars;
      } else if (sortMethod === 'price') {
        return sortOrder === 'desc' ? b.priceAvg - a.priceAvg : a.priceAvg - b.priceAvg;
      }
      return 0;
    });
    return sorted;
  }, [favoriteHotels, sortMethod, sortOrder]);

  const handleSort = (method) => {
    if (method === sortMethod) {
      setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
    } else {
      setSortMethod(method);
      setSortOrder('desc');
    }
  };

  return (
    <section className={styles.favorite}>
      <h2 className={styles.title}>Избранное</h2>
      <div className={styles.buttons}>
        <button
          className={`${styles.sort} 
          ${sortMethod === 'rating' ? styles.activeSort : ''} 
          ${sortMethod === 'rating' && sortOrder === 'asc' ? styles.upSort : ''} 
          ${sortMethod === 'rating' && sortOrder === 'desc' ? styles.downSort : ''}`}
          onClick={() => handleSort('rating')}
        >
          Рейтинг
        </button>
        <button
          className={`${styles.sort} 
          ${sortMethod === 'price' ? styles.activeSort : ''} 
          ${sortMethod === 'price' && sortOrder === 'asc' ? styles.upSort : ''} 
          ${sortMethod === 'price' && sortOrder === 'desc' ? styles.downSort : ''}`}
          onClick={() => handleSort('price')}
        >
          Цена
        </button>
      </div>
      <div className={styles.favScroll}>
        {sortedHotels.map((hotel) => (
          <AboutHotel
            key={hotel.hotelId}
            hotel={hotel}
            days={days}
            formattedDate={formattedDate}
          />
        ))}
      </div>
    </section>
  );
}

export default FavoriteCards;
