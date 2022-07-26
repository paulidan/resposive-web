import TextboxItem from './TextboxItem';
import Styles from './TextboxContent.module.css';

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac neque bibendum, vehicula ipsum et, tincidunt ligula.";
const content = [];
for(let i = 1; i <=6; i++) {
    content.push(<TextboxItem itemNumber={i} itemText={loremIpsum} key={i}/>);
}

const TextboxContent = () => {
    return (
        <ol id={Styles.textBoxContent}>
            {content}
        </ol>
    );
}

export default TextboxContent;