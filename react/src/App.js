import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import Menu2Page from './pages/Menu2';
import Menu3Page from './pages/Menu3';
import PogodaPage from './pages/Pogoda';
import './App.css';


function App() {

  //const url ='https://api.openweathermap.org/data/2.5/weather?q=katowice&appid=fd54d9727b22aa867dc1f33db65eaafc'
  
  return (
    <Routes>
 
      <Route path='/' element={<HomePage/>} /> 
      <Route path='/menu2' element={<Menu2Page/>} /> 
      <Route path='/menu3' element={<Menu3Page/>} /> 
      <Route path='/pogoda' element={<PogodaPage/>} /> 
    </Routes>

  );
}

export default App;
