import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { getHotelsList } from '../../services/actions/hotels-list.js';
import LoginPage from '../../pages/login.jsx';
import MainPage from '../../pages/main.jsx';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotelsList())
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/hotels" element={<MainPage />} />
    </Routes>
  )
}

export default App;
