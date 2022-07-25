import CarouselTextbox from './CarouselTextbox';
import Styles from './CarouselBottomSection.module.css';

const CarouselBottomSection = () => {
    return (
        <div id={Styles.bottomItemContainer}>
            <div id={Styles.bottomPhotoContainer}>
                <div className={Styles.bottomPhotoBox} id={Styles.bottomPhotoBox1}>
                    <div className={Styles.bottomPhotoOverlay} id={Styles.bottomPhotoOverlay1}>
                        <span>»</span>
                    </div>
                </div>
                <div className={Styles.bottomPhotoBox} id={Styles.bottomPhotoBox2}>
                    <div className={Styles.bottomPhotoOverlay} id={Styles.bottomPhotoOverlay2}>
                        <span>«</span>
                    </div>
                </div>
            </div>
            <CarouselTextbox />
        </div>
    );
}

export default CarouselBottomSection;