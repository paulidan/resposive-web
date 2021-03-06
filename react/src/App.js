import { Route, Routes } from 'react-router-dom';
import HomePage from '@/pages/Home';
import Menu2Page from '@/pages/Menu2';
import Menu3Page from '@/pages/Menu3';
import PogodaPage from '@/pages/Pogoda';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/menu2' element={<Menu2Page />} />
      <Route path='/menu3' element={<Menu3Page />} />
      <Route path='/pogoda' element={<WeatherPage />} />
      <Route path='/pogoda/szukaj' element={<WeatherSearchPage />} />
      <Route path='/pogoda/dzis' element={<WeatherToday />} />
      <Route path='/pogoda/term' element={<WeatherTermPage />} />
    </Routes>
  );
}

export default App;
