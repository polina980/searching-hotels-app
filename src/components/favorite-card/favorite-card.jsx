import styles from './favorite-card.module.css';
import AboutHotel from '../about-hotel/about-hotel.jsx';
import { useEffect, useState } from 'react';

function FavoriteCard({ hotels, checkIn, days, formattedDate }) {
  const [likedHotels, setLikedHotels] = useState(() => JSON.parse(localStorage.getItem('likedHotels')) || {});
  const [sortType, setSortType] = useState('rating');  // rating или price
  const [sortDirection, setSortDirection] = useState('asc');  // asc или desc
  const [sortedHotels, setSortedHotels] = useState([]);

  useEffect(() => {
    const handleStorageChange = () => {
      setLikedHotels(JSON.parse(localStorage.getItem('likedHotels')) || {});
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLikedHotels(JSON.parse(localStorage.getItem('likedHotels')) || {});
    }, 100);

    return () => clearInterval(intervalId);
  }, [hotels]);


  useEffect(() => {
    if (sortType === 'rating') {
      setSortedHotels([...hotels].sort((a, b) => {
        const direction = sortDirection === 'asc' ? 1 : -1;
        return direction * (b.stars - a.stars);
      }));
    } else if (sortType === 'price') {
      setSortedHotels([...hotels].sort((a, b) => {
        const direction = sortDirection === 'asc' ? 1 : -1;
        return direction * (a.priceAvg - b.priceAvg);
      }));
    }
  }, [sortType, sortDirection, hotels]);

  const filteredHotels = sortedHotels.filter((hotel) => likedHotels[hotel.hotelId]);

  const handleSortClick = (newSortType) => {
    if (newSortType === sortType) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortType(newSortType);
      setSortDirection('asc');
    }
  };

  const handleUnlike = (hotelId) => {
    setLikedHotels((prevLikedHotels) => {
      const newLikedHotels = { ...prevLikedHotels };
      delete newLikedHotels[hotelId];
      localStorage.setItem('likedHotels', JSON.stringify(newLikedHotels));
      return newLikedHotels;
    });
  };

  return (
    <section className={styles.favorite}>
      <h2 className={styles.title}>Избранное</h2>
      <div className={styles.buttons}>
        <button className={styles.sort} onClick={() => handleSortClick('rating')}>Рейтинг</button>
        <button className={styles.sort} onClick={() => handleSortClick('price')}>Цена</button>
      </div>
      <div className={styles.favScroll}>
        {filteredHotels.map((hotel) => (
          <AboutHotel
            key={hotel.hotelId}
            hotel={hotel}
            checkIn={checkIn}
            days={days}
            onClick={() => handleUnlike(hotel.hotelId)}
            formattedDate={formattedDate} />
        ))}
      </div>
    </section>
  );
}

export default FavoriteCard;
