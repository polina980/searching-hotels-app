import { useEffect, useState } from 'react';
import { getHotelWord } from '../../utils/constants.js';
import styles from './hotels-cards.module.css';
import AboutHotel from '../about-hotel/about-hotel.jsx';
import SimpleSlider from '../slider/slider.jsx';

function HotelsCards({ hotels, location, days, formattedDate }) {
  const [totalLikes, setTotalLikes] = useState(0);

  const handleLike = (count) => {
    const newTotalLikes = totalLikes + count;
    setTotalLikes(newTotalLikes >= 0 ? newTotalLikes : 0);
    localStorage.setItem('totalLikes', newTotalLikes >= 0 ? newTotalLikes : 0);
  };

  useEffect(() => {
    const storedLikes = localStorage.getItem('totalLikes');
    if (storedLikes) {
      setTotalLikes(parseInt(storedLikes));
    }
  }, []);

  return (
    <section className={styles.hotels}>
      <div className={styles.firstString}>
        <div className={styles.firstColumn}>
          <p className={styles.arrow}>Отели</p>
          <p>{location ? location : 'Москва'}</p>
        </div>
        <p className={styles.checkInDate}>{formattedDate}</p>
      </div>
      <SimpleSlider />
      <p className={styles.hotelsAmount}>
        Добавлено в Избранное: <strong>{totalLikes}</strong> {getHotelWord(totalLikes)}
      </p>
      <div className={styles.hotelsScroll}>
        {hotels.map((hotel) => (
          <div key={hotel.hotelId} className={styles.hotelFull}>
            <div className={styles.icon}></div>
            <AboutHotel onClick={handleLike} hotel={hotel} days={days} formattedDate={formattedDate} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default HotelsCards;
