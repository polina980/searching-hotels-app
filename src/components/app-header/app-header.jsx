import { useNavigate } from 'react-router-dom';
import styles from './app-header.module.css';

function AppHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('email');
    navigate('/');
  }

  return (
    <header className={styles.header}>
      <h2 className={styles.title}>Simple Hotel Check</h2>
      <button className={styles.button} onClick={handleLogout}>Выйти</button>
    </header>
  )
}

export default AppHeader;
