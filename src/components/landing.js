import React from 'react';
import styles from "./landing.module.scss"

class Landing extends React.Component {
    render(){
        return (
            <div className={`${styles.landing} background-navigation`} >
                <h1>Michael du Toit</h1>
                <h3>Full Stack Developer</h3>
                <span className={styles.downArrow}>&rsaquo;</span>
            </div>
        )
    }
}

export default Landing;