import { useState } from 'react';
import styles from './about-hotel.module.css';

function AboutHotel({ onClick }) {
  const [liked, setLiked] = useState(false);
  const [rated, setRated] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
    onClick(liked ? -1 : 1, !liked);
  };

  // Будет другая логика: рейтинг будет приходить с сервера
  const handleRateClick = (index) => {
    setRated(index + 1);
  };

  const stars = Array.from({ length: 5 }, (_, index) => {
    return (
      <div
        key={index}
        className={`${styles.star} ${rated && index + 1 <= rated ? styles.rated : ''}`}
        onClick={() => handleRateClick(index)}
      ></div>
    )
  })

  return (
    <div className={styles.hotelBlock}>
      <p className={styles.hotelName}>Moscow Marriott Grand Hotel</p>
      <div className={`${styles.like} ${liked ? styles.liked : ''}`} onClick={handleLikeClick}></div>
      <p className={styles.date}>28 June, 2020 - 1 день</p>
      <div className={styles.lastString}>
        <div className={styles.rating}>{stars}</div>
        <div className={styles.empty}></div>
        <div className={styles.priceBlock}>
          <p className={styles.priceText}>Price:</p>
          <p className={styles.priceTotal}>23 924 ₽</p>
        </div>
      </div>
    </div>
  )
}

export default AboutHotel;
