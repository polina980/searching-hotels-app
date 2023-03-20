import { useEffect, useState } from 'react';
import styles from './about-hotel.module.css';
import { getDayWord } from '../../utils/constants.js';

function AboutHotel({ onClick, hotel, days, formattedDate }) {
  const likedHotels = JSON.parse(localStorage.getItem('likedHotels')) || {};
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const likedHotels = JSON.parse(localStorage.getItem('likedHotels')) || {};
    if (likedHotels[hotel.hotelId]) {
      setLiked(true);
    }
  }, [hotel.hotelId]);

  const handleLikeClick = () => {
    setLiked(!liked);
    onClick(liked ? -1 : 1, !liked);

    const newLikedHotels = { ...likedHotels };
    if (liked) {
      delete newLikedHotels[hotel.hotelId];
    } else {
      newLikedHotels[hotel.hotelId] = true;
    }
    localStorage.setItem('likedHotels', JSON.stringify(newLikedHotels));
  };

  const stars = Array.from({ length: 5 }, (_, index) => {
    return (
      <div key={index} className={`${styles.star} ${index < hotel.stars ? styles.rated : ''}`}></div>
    )
  })

  return (
    <div className={styles.hotelBlock}>
      <p className={styles.hotelName}>{hotel.hotelName}</p>
      <div className={`${styles.like} ${liked ? styles.liked : ''}`} onClick={handleLikeClick}></div>
      <p className={styles.date}>{formattedDate} - {days} {getDayWord(days)}</p>
      <div className={styles.lastString}>
        <div className={styles.rating}>
          {stars}
        </div>
        <div className={styles.empty}></div>
        <div className={styles.priceBlock}>
          <p className={styles.priceText}>Цена:</p>
          <p className={styles.priceTotal}>{hotel.priceAvg} ₽</p>
        </div>
      </div>
    </div>
  )
}

export default AboutHotel;
