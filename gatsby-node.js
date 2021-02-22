const path = require('path')

// module.exports.onCreateNode = ({node, actions}) => {
//     const { createNodeField } = actions

//     if (node.internal.type === 'MarkdownRemark') {
//         const slug = path.basename(node.fileAbsolutePath, '.md')
//         // console.log(JSON.stringify(node, undefined, 4))
//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug
//         })
//     }

// }


exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    // Query for markdown nodes to use in creating pages.
    const result = await graphql(
      `
        query {
            allContentfulBlogPost2 {
                edges {
                    node {
                        slug
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
    const blogPostTemplate = path.resolve(`./src/templates/blog.js`)
    result.data.allContentfulBlogPost2.edges.forEach(({ node }) => {
      if (!node.slug) { return }
      console.log(node.slug)
      createPage({
        path: `/blog/${node.slug}`,
        component: blogPostTemplate,
        // In your blog post template's graphql query, you can use pagePath
        // as a GraphQL variable to query for data from the markdown file.
        context: {
          slug: node.slug
        },
      })
    })
  }