const axios = require("axios")
const path = require('path');


// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
  
    // Query for markdown nodes to use in creating pages.
    const result = await graphql(
      `
      {
        allMyNodeType {
          edges {
            node {
                postID
                text
                url
                title
            }
          }
        }
      }
      `
    )
  
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
  
    // Create pages for each markdown file.
    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
    result.data.allMyNodeType.edges.forEach(({ node }) => {
      const path =  `/article/${node.postID}`
      createPage({
        path,
        component: blogPostTemplate,
        // In your blog post template's graphql query, you can use pagePath
        // as a GraphQL variable to query for data from the markdown file.
        context: {
            article: node,
        },
      })
    })
  }

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
const { createNode } = actions
const fetchFormItems = () =>
    axios.get(
      `https://sheets.googleapis.com/v4/spreadsheets/1tfg7yW8GKWSHRVGey-o3AQ-fqcKR3aZUqyY2_lE1AB0/values:batchGet?ranges=1&majorDimension=ROWS&key=AIzaSyAvHGj2tlVVdPnqq3stJdYB3sJuT-2h9aQ`
    )

  const response = await fetchFormItems()
  const arrayOfItems = response.data.valueRanges[0].values
  let rows = []
  for (var i = 1; i < arrayOfItems.length; i++) {
    var rowObject = {}
    for (var j = 0; j < arrayOfItems[i].length; j++) {
      rowObject[arrayOfItems[0][j]] = arrayOfItems[i][j]
    }
    rows.push(rowObject)
  }
  
  rows.map((item,i)=>{
    const nodeContent = JSON.stringify(item)
      const nodeMeta = {
        id: createNodeId(`my-data-${item.postID}`),
        parent: null,
        children: [],
        internal: {
          type: `MyNodeType`,
          mediaType: `text/html`,
          content: nodeContent,
          contentDigest: createContentDigest(item),
        },
      }
      const node = Object.assign({}, item, nodeMeta)
      createNode(node)
  })

}

