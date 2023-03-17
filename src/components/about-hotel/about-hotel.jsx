import { useState } from 'react';
import styles from './about-hotel.module.css';

function AboutHotel({ onClick, hotel }) {
  console.log(hotel)
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
    onClick(liked ? -1 : 1, !liked);
  };

  return (
    <div className={styles.hotelBlock}>
      <p className={styles.hotelName}></p>
      <div className={`${styles.like} ${liked ? styles.liked : ''}`} onClick={handleLikeClick}></div>
      <p className={styles.date}>28 June, 2020 - 1 день</p>
      <div className={styles.lastString}>
        <div className={styles.rating}>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
        </div>
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
