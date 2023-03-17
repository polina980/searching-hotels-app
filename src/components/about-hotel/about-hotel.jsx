import { useState } from 'react';
import styles from './about-hotel.module.css';

function AboutHotel({ onClick, hotel }) {
  //console.log(hotel) // проверяю перерисовку элементов отелей
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
    onClick(liked ? -1 : 1, !liked);
  };

  const stars = Array.from({ length: 5 }, (_, index) => {
    return (
      <div key={index} className={styles.star}></div>
    )
  })

  return (
    <div className={styles.hotelBlock}>
      <p className={styles.hotelName}>{hotel.hotelName}</p>
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
