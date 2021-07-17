import React from 'react';
import { graphql } from 'gatsby';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import * as style from './projectPage.module.scss';
import '../components/global.scss';
import Seo from '../components/seo';


const ProjectPage = ({ data, pageContext }) => {
    const project = data.allContentfulNgProject.edges[pageContext.id].node;
    let techStack = project.techStack.techStack;
    const techStackArray = techStack.split(',');
    return (
        <>
          <Seo title={project.projectName} />
          <Navigation />
          <div className={style.projectPage}>
              <h2 className={style.projectName}>{project.projectName}</h2>              
              <img src={project.headerImage.file.url} alt={project.projectName} />
              <div className={style.techStackContainer}>
                {
                  techStackArray.map( item => (
                    <span className={style.item}>{item.trim()}</span>
                  ))
                }
              </div>
              <div className={style.content} dangerouslySetInnerHTML={{ __html: project.content.childMarkdownRemark.html}} />
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
              childMarkdownRemark {
                html
              }
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