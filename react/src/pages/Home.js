import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Boxes from '../components/Boxes';

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
            <div id="boxes">
                <Boxes />
            </div>
        </div>
    );
}

export default HomePage;