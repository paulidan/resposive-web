import { useState, useEffect } from 'react';
import styles from './Boxes.module.css';

function Boxes() {

    /* Detect device based on screen width */
    const [device, setDevice] = useState("desktop");
    const deviceWidth = window.innerWidth;
    useEffect(() => {
        if(window.innerWidth <= 600) {
            setDevice("mobile");
        }
        else if(window.innerWidth <= 992) {
            setDevice("tablet");
        }
    });

    return (
        <div id={styles.mainBox}>     
            <div id={styles.container}>       
                <div className={styles.subBox} id={styles.topRightBox}>
                    {device === "mobile" ? <p>2</p> : <p>BOX NAME 2</p>}
                </div>
                <div className={styles.subBox} id={styles.bottomLeftBox}>
                    {device === "mobile" ? <p>3</p> : <p>BOX NAME 3</p>}
                </div>
                <div className={styles.subBox} id={styles.bottomRightBox}>
                    {device === "mobile" ? <p>4</p> : <p>BOX NAME 4</p>}
                </div>
                <div id={styles.centerBoxContainer}>
                    <div className={styles.subBox} id={styles.centerBoxOutline}>
                        
                    </div> 
                    <div className={styles.subBox} id={styles.centerBox}>
                        <div id={styles.centerBoxInner}>
                            <p>
                                <span id={styles.centerBoxHeader}>
                                    Text from box name 1
                                </span>
                                <span id={styles.centerBoxText}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare turpis nec mauris scelerisque, sed suscipit elit dapibus. Aliquam ut eros sed risus convallis venenatis eget vitae mi. Cras dictum est non nunc semper blandit. Quisque convallis tristique dolor eget ultrices. Mauris ac orci quis neque facilisis laoreet. Suspendisse vitae ultrices ipsum, at placerat eros. Proin varius malesuada ultricies. Cras a metus elementum, pellentesque libero eu, faucibus lorem. Integer ac ornare lacus. Ut pretium felis tellus, nec faucibus eros rhoncus eget. Pellentesque ultrices, ligula vestibulum porttitor pharetra, arcu nisl vulputate ligula, id vulputate ligula urna vel tortor. In ullamcorper blandit erat, nec egestas massa commodo consectetur. In nec odio lorem. Donec nulla neque, vehicula in bibendum et, rhoncus sit amet nibh.
                                </span>
                            </p>
                        </div>
                    </div> 
                </div>
                <div id={styles.topLeftBoxContainer}>
                    <div className={styles.subBox} id={styles.topLeftBoxOutline}>
                    </div>
                    <div className={styles.subBox} id={styles.topLeftBox}>
                        {device === "mobile" ? <p>1</p> : <p>BOX NAME 1</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Boxes;