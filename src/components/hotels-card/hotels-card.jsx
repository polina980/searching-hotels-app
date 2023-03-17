import { useState } from 'react';
import styles from './hotels-card.module.css';
import AboutHotel from '../about-hotel/about-hotel.jsx';
import SimpleSlider from '../slider/slider.jsx';

function HotelsCard({ hotels }) {
  //console.log(hotels) //проверяю перерисовку массива отелей
  const [totalLikes, setTotalLikes] = useState(0);

  const handleLike = (count) => {
    setTotalLikes(totalLikes + count);
  };

  return (
    <section className={styles.hotels}>
      <div className={styles.firstString}>
        <div className={styles.firstColumn}>
          <p className={styles.arrow}>Отели</p>
          <p>Москва</p>
        </div>
        <p className={styles.checkInDate}>07 июля 2020</p>
      </div>
      <SimpleSlider />
      <p className={styles.hotelsAmount}>
        Добавлено в Избранное: <strong>{totalLikes}</strong> отеля
      </p>
      <div className={styles.hotelsScroll}>
        {hotels.map((hotel) => (
          // <div className={styles.hotelFull}>
          //   <div className={styles.icon}></div>
            <AboutHotel onClick={handleLike} key={hotel.hotelId} hotel={hotel} />
          //  </div>
        ))}
      </div>
    </section>
  )
}

export default HotelsCard;
