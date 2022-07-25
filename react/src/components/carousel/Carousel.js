import CarouselTopSection from './CarouselTopSection';
import CarouselBottomSection from './CarouselBottomSection';
import Styles from './Carousel.module.css';

const Carousel = () => {
    return(
        <div id={Styles.mainBox}>
            <div id={Styles.container}>
                <CarouselTopSection />
                <CarouselBottomSection />
            </div>
        </div>
    );
}

export default Carousel;