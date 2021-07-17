// Import NPM packages
import * as React from "react";
import { graphql } from "gatsby";

// Import components
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Landing from "../components/landing";
import ProjectCard from "../components/projectCard";
import TextSection from "../components/textSection";
import SkillsSection from "../components/skillsSection";
import Seo from '../components/seo';

//Import global styles
import "../components/global.scss";

const IndexPage = ({ data }) => {
  const projects = data.allContentfulNgProject.edges;
  const aboutMe = data.contentfulBasic;
  const skills = data.contentfulSkillsList;

  return(
    <>
      <Seo />
      <Navigation hasLanding={true} />
      <Landing />
      <TextSection id={"About"} {...aboutMe} />
      <div className="projectsContainer">
        <h2 className="centerHeader">Projects</h2>
        <div className="projectItemsContainer" id="Projects">
          {
            projects.map(({node}) => (
              <ProjectCard key={node.displayOrder} {...node} />
            ))
          }
        </div>
      </div>
      <SkillsSection props={skills} />
      <Footer />
    </>
    );
}

export default IndexPage;

export const query = graphql`
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
  contentfulBasic(slug: {eq: "/about-me"}) {
    title
    content {
      childMarkdownRemark {
        html
      }
    }
  }
  contentfulSkillsList(title: {eq: "Skills"}) {
    technologyName
    title
  }  
}
`;