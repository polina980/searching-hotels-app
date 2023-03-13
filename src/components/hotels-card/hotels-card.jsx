import styles from './hotels-card.module.css';
import AboutHotel from '../about-hotel/about-hotel.jsx';
import images from '../../utils/images.js'

function HotelsCard() {
  return (
    <section className={styles.hotels}>
      <div className={styles.firstString}>
        <div className={styles.firstColumn}>
          <p className={styles.arrow}>Отели</p>
          <p>Москва</p>
        </div>
        <p className={styles.checkInDate}>07 июля 2020</p>
      </div>
      <div className={styles.imagesScroll}>
        <img src={images.house} alt="Дом" />
        <img src={images.forest} alt="Лес" />
        <img src={images.road} alt="Дорога" />
        <img src={images.bridge} alt="Мост" />
        <img src={images.track} alt="Трасса" />
      </div>
      <p className={styles.hotelsAmount}>
        Добавлено в Избранное: <strong>3</strong> отеля
      </p>
      <div className={styles.hotelsScroll}>
        <div className={styles.hotelFull}>
          <div className={styles.icon}></div>
          <AboutHotel />
        </div>
        <div className={styles.hotelFull}>
          <div className={styles.icon}></div>
          <AboutHotel />
        </div>
        <div className={styles.hotelFull}>
          <div className={styles.icon}></div>
          <AboutHotel />
        </div>
        <div className={styles.hotelFull}>
          <div className={styles.icon}></div>
          <AboutHotel />
        </div>
        <div className={styles.hotelFull}>
          <div className={styles.icon}></div>
          <AboutHotel />
        </div>
        <div className={styles.hotelFull}>
          <div className={styles.icon}></div>
          <AboutHotel />
        </div>
      </div>
    </section>
  )
}

export default HotelsCard;
