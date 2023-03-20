import styles from './main.module.css';
import SearchingCard from '../searching-card/searching-card.jsx';
import FavoriteCard from '../favorite-card/favorite-card.jsx';
import HotelsCard from '../hotels-card/hotels-card.jsx';
import { apiHotels } from '../../utils/api.js';
import { useEffect, useState } from 'react';

function Main() {
  const [hotels, setHotels] = useState([]);
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState(new Date().toISOString().slice(0, 10));
  const [days, setDays] = useState(1);

  useEffect(() => {
    const { checkIn, checkOut, location, currency, limit } = getInitialDates();
    fetchHotels({ checkIn, checkOut, location, currency, limit });
  }, []);

  const getInitialDates = () => {
    const today = new Date();
    const checkOutDate = new Date();

    checkOutDate.setDate(today.getDate() + 1);
    const checkIn = today.toISOString().slice(0, 10);
    const checkOut = checkOutDate.toISOString().slice(0, 10);

    const location = 'Москва';
    return { checkIn, checkOut, location };
  };

  const fetchHotels = async ({ checkIn, checkOut, location, currency, limit }) => {
    try {
      const hotels = await apiHotels.getHotels({ location, checkIn, checkOut, currency, limit });
      setHotels(hotels);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = ({ location, checkIn, days, currency, limit }) => {
    const checkOutDate = new Date(checkIn);
    checkOutDate.setDate(checkOutDate.getDate() + Number(days));
    const checkOut = checkOutDate.toISOString().slice(0, 10);
    fetchHotels({ checkIn, checkOut, location, currency, limit });
  };

  const date = new Date(checkIn);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = date.toLocaleString('ru', options);


  return (
    <main className={styles.main}>
      <SearchingCard handleSearch={handleSearch} setLocation={setLocation} setCheckIn={setCheckIn} setDays={setDays} location={location} checkIn={checkIn} days={days} />
      <FavoriteCard hotels={hotels} checkIn={checkIn} days={days} formattedDate={formattedDate} />
      <HotelsCard hotels={hotels} checkIn={checkIn} days={days} formattedDate={formattedDate} />
    </main>
  );
}

export default Main;
