import React from 'react';
import * as styles from './textSection.module.scss';
import "./global.scss";

const TextSection = ( props ) => {
    return (
        <div className={styles.textSection}>
            <h2 className="centerHeader" id={props.id}>{ props.title }</h2>
            <div dangerouslySetInnerHTML={{ __html: props.content.childMarkdownRemark.html }}></div>
        </div>
    )
}

export default TextSection;