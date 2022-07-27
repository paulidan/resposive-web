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
import CarouselTopPhoto from './CarouselTopPhoto';
import Styles from './CarouselTopSection.module.css';

const CarouselTopSection = () => {
    return (              
        <div id={Styles.topPhotoContainer}>
            <CarouselTopPhoto 
                id={Styles.topPhotoBox1}
                alt="Boy in a suit standing on a skateboard and wearing a helmet."
                src={{desktop: img_desk_topPhotoBox1, tablet: img_tablet_topPhotoBox1, phone: img_phone_topPhotoBox1}}
            />
            <CarouselTopPhoto 
                id={Styles.topPhotoBox2}
                alt="Girl rollerskating in a park."
                src={{desktop: img_desk_topPhotoBox2, tablet: img_tablet_topPhotoBox2, phone: img_phone_topPhotoBox2}}
            />
            <CarouselTopPhoto 
                id={Styles.topPhotoBox3}
                alt="Athletic man running down a road."
                src={{desktop: img_desk_topPhotoBox3, tablet: img_tablet_topPhotoBox3, phone: img_phone_topPhotoBox3}}
                captioned={true}
            />
            <CarouselTopPhoto 
                id={Styles.topPhotoBox4}
                alt="Woman with sunglasses walking and listening to music."
                src={{desktop: img_desk_topPhotoBox4, tablet: img_tablet_topPhotoBox4, phone: img_phone_topPhotoBox4}}
                captioned={true}
            />
        </div>
    );
}

export default CarouselTopSection;