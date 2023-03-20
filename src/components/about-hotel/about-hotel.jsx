import { useEffect, useState } from 'react';
import { getDayWord } from '../../utils/constants.js';
import styles from './about-hotel.module.css';

function AboutHotel({ onClick, hotel, days, formattedDate }) {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    onClick(newLiked ? 1 : -1, newLiked);
    localStorage.setItem(hotel.hotelId, JSON.stringify(newLiked));
    if (liked) {
      localStorage.removeItem(hotel.hotelId, JSON.stringify(newLiked));
    }
  };

  useEffect(() => {
    const isLiked = JSON.parse(localStorage.getItem(hotel.hotelId));
    if (isLiked) {
      setLiked(isLiked);
    }
  }, [hotel.hotelId]);

  return (
    <div className={styles.hotelBlock}>
      <div className={styles.firstString}>
        <p className={styles.hotelName}>{hotel.hotelName}</p>
        <div className={`${styles.like} ${liked ? styles.liked : ''}`} onClick={handleLikeClick} ></div>
      </div>
      <p className={styles.date}>{formattedDate} — {days} {getDayWord(days)}</p>
      <div className={styles.lastString}>
        <div className={styles.rating}>
          {[...Array(5)].map((_, index) => (
            <div key={index} className={`${styles.star} ${index < hotel.stars ? styles.rated : ''}`}></div>
          ))}
        </div>
        <div className={styles.empty}></div>
        <div className={styles.priceBlock}>
          <p className={styles.priceText}>Цена:</p>
          <p className={styles.priceTotal}>{Math.round(hotel.priceAvg).toLocaleString()} ₽</p>
        </div>
      </div>
    </div>
  )
}

export default AboutHotel;
