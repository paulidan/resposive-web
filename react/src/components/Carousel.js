import Clip_bw from '../icons/desktop/Clip_bw.png';
import Clip_bs from '../icons/desktop/Clip_bs.png';
import Clip_bo from '../icons/desktop/Clip_bo.png';
import Clip_bj from '../icons/desktop/Clip_bj.png';
import Clip_ from '../icons/desktop/Clip_.png';
import Clip from '../icons/desktop/Clip.png';
import Icon from '../icons/desktop/Icon.png';
import Styles from './Carousel.module.css';

function Carousel() {
    return(
        <div id={Styles.container}>
            <div id={Styles.topPhotoContainer}>
                <div className={Styles.topPhotoBox} id={Styles.topPhotoBox1}>
                    <img src={Clip_bw} alt="Top Photo 1"/>
                </div>
                <div className={Styles.topPhotoBox} id={Styles.topPhotoBox2}>
                    <img src={Clip_bs} alt="Top Photo 2"/>
                </div>
                <div className={Styles.topPhotoBox} id={Styles.topPhotoBox3}>
                    <img src={Clip_bo} alt="Top Photo 3"/>
                    <p>BOX CAPTION</p>
                </div>
                <div className={Styles.topPhotoBox} id={Styles.topPhotoBox4}>
                    <img src={Clip_bj} alt="Top Photo 4"/>
                    <p>BOX CAPTION</p>
                </div>
            </div>
            <div id={Styles.bottomItemContainer}>
                <div className={Styles.bottomPhotoBox} id={Styles.bottomPhotoBox1}>
                    <img src={Clip_} alt="Bottom Photo 1"></img>
                    <div className={Styles.bottomPhotoOverlay} id={Styles.bottomPhotoOverlay1}>
                        <p>»</p>
                    </div>
                </div>
                <div className={Styles.bottomPhotoBox} id={Styles.bottomPhotoBox2}>
                    <img src={Clip} alt="Bottom Photo 2" />
                    <div className={Styles.bottomPhotoOverlay} id={Styles.bottomPhotoOverlay2}>
                        <p>«</p>
                    </div>
                </div>
                <div id={Styles.textBox}>
                    <div id={Styles.textBoxHeader}>
                        <img src={Icon} alt="Icon" />
                        <p>Title</p>
                    </div>
                    <div id={Styles.textBoxContent}>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;