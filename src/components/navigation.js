import React from 'react';
import { Link } from 'gatsby';
import styles from './navigation.module.scss';

class Navigation extends React.Component {
    render(){
        return (
            <nav className={this.props.hasLanding ? styles.hasLanding : "backgroundAnimation"}>
                <ul id="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/#projects">Projects</Link></li>
                    <li><Link to="/#skills">Skills</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;

