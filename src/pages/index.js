// Import NPM packages
import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

// Import project components
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Landing from "../components/landing";

//Import global styles
import "../components/global.scss";
import ProjectCard from "../components/projectCard";

const IndexPage = ({ data }) => {
  // GraphQL query get projects
  const projects = useStaticQuery(grapql`
  allContentfulNgProject(sort: { fields: [displayOrder], order: ASC }){
    edges {
      node {
        displayOrder,
        projectName,
        slug,
        headerImage {
          file {
            url
          }
        }
      }
    }
  }
`);

  return(
    <>
    <Navigation hasLanding={true} />
    <Landing />
      {
        projects.map(({node}) => (
          <ProjectCard key={node.displayOrder} {...node} />
        ))
      }
    <Footer />
    </>
    );
}

export default IndexPage;