import Icon from '../icons/desktop/Icon.png';
import Styles from './CarouselTextbox.module.css';

function CarouselTextbox() {
    return(
        <div id={Styles.textBox}>
            <div id={Styles.textBoxHeader}>
                <img src={Icon} alt="Icon" />
                <p>Title</p>
            </div>
            <ol id={Styles.textBoxContent}>
                <li>
                    <div className={Styles.textBoxItem}>
                        <div className={Styles.textBoxItemNumber}>
                            <p>1</p>
                            <div />
                        </div>
                        <p className={Styles.textBoxItemText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac neque bibendum, vehicula ipsum et, tincidunt ligula.</p>
                    </div>
                </li>
                <li>
                    <div className={Styles.textBoxItem}>
                        <div className={Styles.textBoxItemNumber}>
                            <p>2</p>
                            <div />
                        </div>
                    <p className={Styles.textBoxItemText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac neque bibendum, vehicula ipsum et, tincidunt ligula.</p>
                    </div>
                </li>
                <li>
                    <div className={Styles.textBoxItem}>
                        <div className={Styles.textBoxItemNumber}>
                            <p>3</p>
                            <div />
                        </div>
                        <p className={Styles.textBoxItemText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac neque bibendum, vehicula ipsum et, tincidunt ligula.</p>
                    </div>
                </li>
                <li>
                    <div className={Styles.textBoxItem}>
                        <div className={Styles.textBoxItemNumber}>
                            <p>4</p>
                            <div />
                        </div>
                        <p className={Styles.textBoxItemText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac neque bibendum, vehicula ipsum et, tincidunt ligula.</p>
                    </div>
                </li>
                <li>
                    <div className={Styles.textBoxItem}>
                            <div className={Styles.textBoxItemNumber}>
                                <p>5</p>
                                <div />
                            </div>
                            <p className={Styles.textBoxItemText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac neque bibendum, vehicula ipsum et, tincidunt ligula.</p>
                    </div>
                </li>
                <li>
                    <div className={Styles.textBoxItem}>
                        <div className={Styles.textBoxItemNumber}>
                            <p>6</p>
                            <div />
                        </div>
                        <p className={Styles.textBoxItemText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac neque bibendum, vehicula ipsum et, tincidunt ligula.</p>
                    </div>
                </li>
            </ol>
        </div>
    );
}

export default CarouselTextbox;