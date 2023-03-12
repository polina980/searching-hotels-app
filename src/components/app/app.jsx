import { Routes, Route } from 'react-router-dom';
import LoginPage from '../../pages/login.jsx';
import MainPage from '../../pages/main.jsx';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/hotels" element={<MainPage />} />
    </Routes>
  )
}

export default App;
