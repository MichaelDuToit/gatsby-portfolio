import React from 'react';
import { Link } from 'gatsby';

import * as styles from './projectCard.module.scss';

const ProjectCard = ({ projectName, headerImage, slug}) => {
    return(
        <Link to={`/project/${slug}`} title={projectName} className={styles.projectCard}>
            <img src={headerImage.file.url} alt={projectName} />
            <figcaption>
                <h3>{projectName}</h3>
            </figcaption>
        </Link>
    )
}

export default ProjectCard;