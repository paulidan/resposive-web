import img_desk_topPhotoBox1 from '@/icons/desktop/Clip_bw.png';
import img_desk_topPhotoBox2 from '@/icons/desktop/Clip_bs.png';
import img_desk_topPhotoBox3 from '@/icons/desktop/Clip_bo.png';
import img_desk_topPhotoBox4 from '@/icons/desktop/Clip_bj.png';
import img_phone_topPhotoBox1 from '@/icons/smartphone/Clip_bo.png';
import img_phone_topPhotoBox2 from '@/icons/smartphone/Clip_bk.png';
import img_phone_topPhotoBox3 from '@/icons/smartphone/Clip_be.png';
import img_phone_topPhotoBox4 from '@/icons/smartphone/Clip_.png';
import img_tablet_topPhotoBox1 from '@/icons/tablet/Clip_bt.png';
import img_tablet_topPhotoBox2 from '@/icons/tablet/Clip_bk.png';
import img_tablet_topPhotoBox3 from '@/icons/tablet/Clip_bp.png';
import img_tablet_topPhotoBox4 from '@/icons/tablet/Clip_bg.png';
import CarouselTextbox from './CarouselTextbox';
import Styles from './Carousel.module.css';

const Carousel = () => {
    return(
        <div id={Styles.mainBox}>
            <div id={Styles.container}>
                <div id={Styles.topPhotoContainer}>
                    <div className={Styles.topPhotoBox} id={Styles.topPhotoBox1}>
                        <img src={img_desk_topPhotoBox1} alt="Top Photo 1" className={Styles.topPhotoDesktop}/>
                        <img src={img_phone_topPhotoBox1} alt="Top Photo 1" className={Styles.topPhotoPhone}/>
                        <img src={img_tablet_topPhotoBox1} alt="Top Photo 1" className={Styles.topPhotoTablet}/>
                    </div>
                    <div className={Styles.topPhotoBox} id={Styles.topPhotoBox2}>
                        <img src={img_desk_topPhotoBox2} alt="Top Photo 2" className={Styles.topPhotoDesktop}/>
                        <img src={img_phone_topPhotoBox2} alt="Top Photo 2" className={Styles.topPhotoPhone}/>
                        <img src={img_tablet_topPhotoBox2} alt="Top Photo 2" className={Styles.topPhotoTablet}/>
                    </div>
                    <div className={Styles.topPhotoBox} id={Styles.topPhotoBox3}>
                        <img src={img_desk_topPhotoBox3} alt="Top Photo 3" className={Styles.topPhotoDesktop}/>
                        <img src={img_phone_topPhotoBox3} alt="Top Photo 3" className={Styles.topPhotoPhone}/>
                        <img src={img_tablet_topPhotoBox3} alt="Top Photo 3" className={Styles.topPhotoTablet}/>
                        <p><span className={Styles.boxCaptionLine}>BOX</span> <span className={Styles.boxCaptionLine}>CAPTION</span></p>
                    </div>
                    <div className={Styles.topPhotoBox} id={Styles.topPhotoBox4}>
                        <img src={img_desk_topPhotoBox4} alt="Top Photo 4" className={Styles.topPhotoDesktop}/>
                        <img src={img_phone_topPhotoBox4} alt="Top Photo 4" className={Styles.topPhotoPhone}/>
                        <img src={img_tablet_topPhotoBox4} alt="Top Photo 4" className={Styles.topPhotoTablet}/>
                        <p><span className={Styles.boxCaptionLine}>BOX</span> <span className={Styles.boxCaptionLine}>CAPTION</span></p>
                    </div>
                </div>
                <div id={Styles.bottomItemContainer}>
                    <div id={Styles.bottomPhotoContainer}>
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
                    </div>
                    <CarouselTextbox />
                </div>
            </div>
        </div>
    );
}

export default Carousel;