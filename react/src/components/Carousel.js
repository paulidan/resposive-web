import img_desk_topPhotoBox1 from '../icons/desktop/Clip_bw.png';
import img_desk_topPhotoBox2 from '../icons/desktop/Clip_bs.png';
import img_desk_topPhotoBox3 from '../icons/desktop/Clip_bo.png';
import img_desk_topPhotoBox4 from '../icons/desktop/Clip_bj.png';
import img_phone_topPhotoBox1 from '../icons/smartphone/Clip_bo.png';
import img_phone_topPhotoBox2 from '../icons/smartphone/Clip_bk.png';
import img_phone_topPhotoBox3 from '../icons/smartphone/Clip_be.png';
import img_phone_topPhotoBox4 from '../icons/smartphone/Clip_.png';
import CarouselTextbox from './CarouselTextbox';
import Styles from './Carousel.module.css';

function Carousel() {
    return(
        <div id={Styles.mainBox}>
            <div id={Styles.container}>
                <div id={Styles.topPhotoContainer}>
                    <div className={Styles.topPhotoBox} id={Styles.topPhotoBox1}>
                        <img src={img_desk_topPhotoBox1} alt="Top Photo 1" className={Styles.topPhotoDesktop}/>
                        <img src={img_phone_topPhotoBox1} alt="Top Photo 1" className={Styles.topPhotoPhone}/>
                    </div>
                    <div className={Styles.topPhotoBox} id={Styles.topPhotoBox2}>
                        <img src={img_desk_topPhotoBox2} alt="Top Photo 2" className={Styles.topPhotoDesktop}/>
                        <img src={img_phone_topPhotoBox2} alt="Top Photo 2" className={Styles.topPhotoPhone}/>
                    </div>
                    <div className={Styles.topPhotoBox} id={Styles.topPhotoBox3}>
                        <img src={img_desk_topPhotoBox3} alt="Top Photo 3" className={Styles.topPhotoDesktop}/>
                        <img src={img_phone_topPhotoBox3} alt="Top Photo 3" className={Styles.topPhotoPhone}/>
                        <p>BOX CAPTION</p>
                    </div>
                    <div className={Styles.topPhotoBox} id={Styles.topPhotoBox4}>
                        <img src={img_desk_topPhotoBox4} alt="Top Photo 4" className={Styles.topPhotoDesktop}/>
                        <img src={img_phone_topPhotoBox4} alt="Top Photo 4" className={Styles.topPhotoPhone}/>
                        <p>BOX CAPTION</p>
                    </div>
                </div>
                <div id={Styles.bottomItemContainer}>
                    <div className={Styles.bottomPhotoBox} id={Styles.bottomPhotoBox1}>
                        <div className={Styles.bottomPhotoOverlay} id={Styles.bottomPhotoOverlay1}>
                            <p>»</p>
                        </div>
                    </div>
                    <div className={Styles.bottomPhotoBox} id={Styles.bottomPhotoBox2}>
                        <div className={Styles.bottomPhotoOverlay} id={Styles.bottomPhotoOverlay2}>
                            <p>«</p>
                        </div>
                    </div>
                    <CarouselTextbox />
                </div>
            </div>
        </div>
    );
}

export default Carousel;