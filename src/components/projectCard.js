import React from 'react';
import { Link } from 'gatsby';

import * as styles from './projectCard.module.scss';

const ProjectCard = ({ projectName, headerImage, slug }) => {
    return (
        <Link to={`/project/${slug}`} className={styles.projectCard}>
            <div className={styles.thumbnail}>
                <img src={headerImage.file.url} alt={projectName} />
            </div>
            <div className={styles.cardContent}>
                <h2>{projectName}</h2>
                <p className={styles.description}>
                    This is my short project description, blah blah blah blah. blah blah blah blah.
                </p>
            </div>
        </Link>
    )
}

export default ProjectCard;