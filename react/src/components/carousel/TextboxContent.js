import { useState, useEffect } from 'react';
import TextboxItem from './TextboxItem';
import Styles from './TextboxContent.module.css';

const TextboxContent = () => {
    const [content, setContent] = useState([]);
    useEffect(() => {
        const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac neque bibendum, vehicula ipsum et, tincidunt ligula.";
        const premadeContent = [];
        for(let i = 1; i <= 6; i++) {
            premadeContent.push(<TextboxItem itemNumber={i} itemText={loremIpsum} key={i}/>);
        }
        setContent(content.concat(premadeContent));
    }, []);

    return (
        <ol id={Styles.textBoxContent}>
            {content}
        </ol>
    );
}

export default TextboxContent;