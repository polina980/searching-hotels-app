import styles from './main.module.css';
import SearchingCard from '../searching-card/searching-card.jsx';
import FavoriteCard from '../favorite-card/favorite-card.jsx';
import HotelsCard from '../hotels-card/hotels-card.jsx';

function Main() {
  return (
    <main className={styles.main}>
      <SearchingCard />
      <FavoriteCard />
      <HotelsCard />
    </main>
  )
}

export default Main;
