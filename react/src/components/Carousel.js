import Styles from './Carousel.module.css';

function Carousel() {
    return(
        <div id={Styles.container}>
            <div id={Styles.topPhotoContainer}>
                <div className={Styles.topPhotoBox}>

                </div>
                <div className={Styles.topPhotoBox}>
                    
                </div>
                <div className={Styles.topPhotoBox}>
                    
                </div>
                <div className={Styles.topPhotoBox}>
                    
                </div>
            </div>
            <div className={Styles.bottomPhotoBox}>

            </div>
            <div className={Styles.bottomPhotoBox}>
                
            </div>
            <div id={Styles.textBox}>

            </div>
        </div>
    );
}

export default Carousel;