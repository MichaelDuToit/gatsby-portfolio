import React from 'react';
import "./landing.scss"

class Landing extends React.Component {
    render(){
        return (
            <div className={`landing background-navigation backgroundAnimation`} >
                <h1>Michael du Toit</h1>
                <h3>Full Stack Developer</h3>
                <span className={`downArrow`}>&rsaquo;</span>
            </div>
        )
    }
}

export default Landing;