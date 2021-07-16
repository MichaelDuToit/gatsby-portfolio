// Import NPM packages
import * as React from "react";
import { graphql } from "gatsby";

// Import project components
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Landing from "../components/landing";

//Import global styles
import "../components/global.scss";
import ProjectCard from "../components/projectCard";

const IndexPage = ({ data }) => {
  const projects = data.allContentfulNgProject.edges;

  return(
    <>
      <Navigation hasLanding={true} />
      <Landing />
      <div className="projectsContainer">
        <h2 className="header">Projects</h2>
        <div className="projectItemsContainer" id="projects">
          {
            projects.map(({node}) => (
              <ProjectCard key={node.displayOrder} {...node} />
            ))
          }
        </div>
      </div>
      <Footer />
    </>
    );
}

export default IndexPage;

export const projectsQuery = graphql`
query {
  allContentfulNgProject(sort: { fields: [displayOrder], order: ASC} ) {
    edges {
      node {
        displayOrder,
        projectName,
        slug,
        description
        techStack {
          techStack
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
`