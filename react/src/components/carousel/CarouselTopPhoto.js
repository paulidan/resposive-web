import Styles from './CarouselTopSection.module.css';

const CarouselTopPhoto = (props) => {
    return (
        <div className={Styles.topPhotoBox} id={props.id}>
            <img src={props.srcDesktop} alt={props.alt} className={Styles.topPhotoDesktop}/>
            <img src={props.srcTablet} alt={props.alt} className={Styles.topPhotoTablet}/>
            <img src={props.srcSmartphone} alt={props.alt} className={Styles.topPhotoPhone}/>
            {props.captioned && <p><span className={Styles.boxCaptionLine}>BOX</span> <span className={Styles.boxCaptionLine}>CAPTION</span></p>}
        </div>
    );
}

export default CarouselTopPhoto;