import * as React from "react";

import "./global.scss";
import * as style from "./skillsSection.module.scss";

const SkillsSection = ({ props }) => {
    const skillsArray = props.technologyName;

    return (
        <div className={style.defaultSection}>
            <h2 className="centerHeader" id={props.title}>{props.title}</h2>
            <div className={style.skillsContainer}>
                {
                    skillsArray.map((item, index) => (
                        <span key={index} className="techItemLarge">{item}</span>
                    ))
                }
            </div>
        </div>
    )
}

export default SkillsSection;