import Styles from './TextboxItem.module.css';

const TextboxItem = (props) => {
    return(
        <li className={Styles.textBoxItem}>
            <div className={Styles.textBoxItemNumber}>
                <p>{props.itemNumber}</p>
                <div />
            </div>
            <p className={Styles.textBoxItemText}>{props.itemText}</p>
        </li>
    );
}

export default TextboxItem;