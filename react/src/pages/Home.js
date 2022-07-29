import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Boxes from '@/components/Boxes';
import Carousel from '@/components/carousel/Carousel';

const HomePage = () => {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <Boxes />
            <Carousel />
        </div>
    );
}

export default HomePage;