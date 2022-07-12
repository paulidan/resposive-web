import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import Menu2Page from './pages/Menu2';
import Menu3Page from './pages/Menu3';
import PogodaPage from './pages/Pogoda';
import Pogoda_szuk from './pages/Pogoda_szuk';
import Pogoda_dzis from './pages/Pogoda_dzis';
import Pogoda_term from './pages/Pogoda_term';
import './App.css';


function App() {

  //const url ='https://api.openweathermap.org/data/2.5/weather?q=katowice&appid=fd54d9727b22aa867dc1f33db65eaafc'
  
  return (
    <Routes>
 
      <Route path='/' element={<HomePage/>} /> 
      <Route path='/menu2' element={<Menu2Page/>} /> 
      <Route path='/menu3' element={<Menu3Page/>} /> 
      <Route path='/pogoda' element={<PogodaPage/>} /> 
      <Route path='/pogoda/szukaj' element={<Pogoda_szuk/>} /> 
      <Route path='/pogoda/dzis' element={<Pogoda_dzis/>} /> 
      <Route path='/pogoda/term' element={<Pogoda_term/>} /> 
    </Routes>

  );
}

export default App;
