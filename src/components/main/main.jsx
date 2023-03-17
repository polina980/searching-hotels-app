import styles from './main.module.css';
import SearchingCard from '../searching-card/searching-card.jsx';
import FavoriteCard from '../favorite-card/favorite-card.jsx';
import HotelsCard from '../hotels-card/hotels-card.jsx';
import { apiHotels } from '../../utils/api.js';
import { useEffect, useState } from 'react';

function Main() {
  const [hotels, setHotels] = useState([]);

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
    fetchHotels({ checkIn, checkOut, location });
  };

  return (
    <main className={styles.main}>
      <SearchingCard handleSearch={handleSearch} />
      <FavoriteCard />
      <HotelsCard hotels={hotels} />
    </main>
  );
}

export default Main;
