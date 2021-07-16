import React from 'react';
import * as styles from './footer.module.scss';

class Footer extends React.Component {
    render(){
        return(
            <footer className="backgroundAnimation">
                <ul>
                    <li><a href="https://github.com/michaeldutoit">GitHub - MichaelDuToit</a></li>
                    <li><a href="https://www.twitter.com/michaeldtdev">Twitter - @michaeldtdev</a></li>
                    <li><a href="https://www.linkedin.com/in/michael-du-toit-216404107/">LinkedIn - Michael du Toit</a></li>
                    <li><a href="https://codepen.io/Michaeldt/">CodePen - michaeldt</a></li>
                </ul>
            </footer>
        )
    }
}

export default Footer;