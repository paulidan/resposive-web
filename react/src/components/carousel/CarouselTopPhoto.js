import Styles from './CarouselTopSection.module.css';

const CarouselTopPhoto = (props) => {
    return (
        <div className={Styles.topPhotoBox} id={props.id}>
            <div className={Styles.hoverContainer}> {/* Container for just the image+caption to capture hover on small screens properly */}
                <img src={props.src.desktop} alt={"" || props.alt} className={Styles.topPhotoDesktop}/>
                <img src={props.src.tablet} alt={"" || props.alt} className={Styles.topPhotoTablet}/>
                <img src={props.src.phone} alt={"" || props.alt} className={Styles.topPhotoPhone}/>
                {props.captioned && <p className={Styles.boxCaption}><span className={Styles.boxCaptionLine}>BOX</span> <span className={Styles.boxCaptionLine}>CAPTION</span></p>}
            </div>
        </div>
    );
}

export default CarouselTopPhoto;