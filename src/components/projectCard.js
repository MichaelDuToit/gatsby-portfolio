import React from 'react';
import { Link } from 'gatsby';

import styles from './projectCard.module.scss';

const ProjectCard = ({ projectName, featureImage, slug}) => {
    return(
        <Link to={`/project/${slug}`} title={projectName}>
            <img src={featureImage.file.url} alt={projectName} />
            <figcaption>
                <h3>{projectName}</h3>
            </figcaption>
        </Link>
    )
}

export default ProjectCard;