import { useEffect, useState } from 'react';
import { getDayWord } from '../../utils/constants.js';
import styles from './about-hotel.module.css';

function AboutHotel({ onClick, hotel, days, formattedDate }) {
  const [liked, setLiked] = useState(false);
  const [activeStars, setActiveStars] = useState(0);

  const handleLikeClick = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    onClick(newLiked ? 1 : -1, newLiked);
    localStorage.setItem(`liked-${hotel.hotelId}`, JSON.stringify(newLiked));
  };

  useEffect(() => {
    const isLiked = JSON.parse(localStorage.getItem(`liked-${hotel.hotelId}`));
    if (isLiked) {
      setLiked(isLiked);
    }
    setActiveStars(Math.round(hotel.stars));
  }, [hotel.stars, hotel.hotelId]);

  return (
    <div className={styles.hotelBlock}>
      <p className={styles.hotelName}>{hotel.hotelName}</p>
      <div className={`${styles.like} ${liked ? styles.liked : ''}`} onClick={handleLikeClick}></div>
      <p className={styles.date}>{formattedDate} — {days} {getDayWord(days)}</p>
      <div className={styles.lastString}>
        <div className={styles.rating}>
          {[...Array(5)].map((_, index) => (
            <div key={index} className={`${styles.star} ${index < activeStars ? styles.rated : ''}`}></div>
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
