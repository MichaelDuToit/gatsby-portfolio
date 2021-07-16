import React from 'react';
import { graphql } from 'gatsby';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import * as style from './projectPage.module.scss';
import '../components/global.scss';


const ProjectPage = ({ data, pageContext }) => {
    const project = data.allContentfulNgProject.edges[pageContext.id].node;
    return (
        <>
          <Navigation />
          <div className={style.projectPage}>
              <h2 className={style.projectName}>{project.projectName}</h2>
              <p className={style.techStack}>{project.techStack.techStack}</p>
              <img src={project.headerImage.file.url} alt={project.projectName} />
              <div className={style.content} dangerouslySetInnerHTML={{ __html: project.content.content}} />
          </div>
          <Footer />
        </>
    )
}

export const query = graphql`
    query {
      allContentfulNgProject(sort: {fields: [displayOrder], order: ASC}) {
        edges {
          node {
            displayOrder
            projectName
            slug
            techStack {
              techStack
            }
            content {
              content
            }
            headerImage {
              file {
                url
              }
            }
          }
        }
      }
    }      
`;

export default ProjectPage;