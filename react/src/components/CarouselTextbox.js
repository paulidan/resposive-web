import Icon from '@/icons/desktop/Icon.png';
import TextboxContent from './TextboxContent';
import Styles from './CarouselTextbox.module.css';

const CarouselTextbox = () => {
    return(
        <div id={Styles.textBox}>
            <div id={Styles.textBoxHeader}>
                <img src={Icon} alt="Icon" />
                <p>Title</p>
            </div>
            <TextboxContent />
        </div>
    );
}

export default CarouselTextbox;