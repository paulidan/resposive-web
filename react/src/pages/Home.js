import Navbar from '../components/Navbar';
import Header from '../components/Header';



function HomePage() {
    return (
        <div className="App">
            <div id="header"> 
                <Header />
                <div id="menu">
                <Navbar />
            </div>
            </div>
            
            <div>
                HOME
            </div>
        </div>
    );
}

export default HomePage;