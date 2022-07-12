import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Carousel from '../components/Carousel';

function HomePage() {
    return (
        <div className="App">
            <div id="header"> 
                <Header />
            </div>
            <div id="menu">
                <Navbar />
            </div>
            <div>
                HOME
            </div>
            <div id="carousel">
                <Carousel />
            </div>
        </div>
    );
}

export default HomePage;