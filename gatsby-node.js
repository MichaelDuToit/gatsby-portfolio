/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    
    return new Promise((resolve, reject) => {
        graphql(`
          {
            allContentfulNgProject(sort: { fields: [displayOrder], order: ASC} ) {
              edges {
                node {
                  displayOrder,
                  projectName,
                  slug,
                  techStack {
                    techStack
                  }
                  headerImage {
                    file {
                      url
                    }
                  }
                  content {
                    content
                  }
                }
              }
            }
          }
        `).then(result => {
            result.data.allContentfulNgProject.edges.forEach(({ node }) => (
              createPage({
                    path: `/project/${node.slug}`,
                    component: path.resolve('src/templates/projectPage.js'),
                    context: { 
                        id: node.displayOrder
                    },
              })
            ))
            resolve()
        })
    })
}