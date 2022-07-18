import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Carousel from '../components/Carousel';

function HomePage() {
    return (
        <div className="App">
            <div id="carousel">
                <Carousel />
            </div>
        </div>
    );
}

export default HomePage;