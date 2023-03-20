import { useEffect, useState } from 'react';
import { apiHotels } from '../../utils/api.js';
import styles from './main.module.css';
import SearchingBlock from '../searching-block/searching-block.jsx';
import FavoriteCards from '../favorite-cards/favorite-cards.jsx';
import HotelsCards from '../hotels-cards/hotels-cards.jsx';

function Main() {
  const [hotels, setHotels] = useState([]);
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState(new Date().toISOString().slice(0, 10));
  const [days, setDays] = useState(1);

  useEffect(() => {
    const { checkIn, checkOut, location } = getInitialDates();
    fetchHotels({ checkIn, checkOut, location });
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

  const fetchHotels = async ({ checkIn, checkOut, location }) => {
    try {
      const hotels = await apiHotels.getHotels({ location, checkIn, checkOut });
      setHotels(hotels);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = ({ location, checkIn, days }) => {
    const checkOutDate = new Date(checkIn);
    checkOutDate.setDate(checkOutDate.getDate() + Number(days));
    const checkOut = checkOutDate.toISOString().slice(0, 10);
    setLocation(location);
    setCheckIn(checkIn);
    setDays(days);
    fetchHotels({ checkIn, checkOut, location });
  };

  const date = new Date(checkIn);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = date.toLocaleString('ru', options).replace(/ г\./, '');

  return (
    <main className={styles.main}>
      <SearchingBlock handleSearch={handleSearch} location={location} checkIn={checkIn} days={days} setLocation={setLocation} setCheckIn={setCheckIn} setDays={setDays} />
      <FavoriteCards hotels={hotels} checkIn={checkIn} days={days} formattedDate={formattedDate} />
      <HotelsCards hotels={hotels} location={location} checkIn={checkIn} days={days} formattedDate={formattedDate} />
    </main>
  );
}

export default Main;
