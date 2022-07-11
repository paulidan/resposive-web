
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';



function App() {
  return (

    <div className="App">
      <div id="header"> 
        <Header />
      </div>
      <div id="menu">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
