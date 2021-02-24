import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Layout from '../components/layout/layout'

// export const query = graphql`
//     query ($slug: String!) {
//         markdownRemark (fields: {slug: {eq: $slug}}) {
//             frontmatter {
//                 title
//                 data
//             }
//             html
//         }
//     }
// `

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost2 (slug: {eq: $slug}) {
            title
            publishedDate (formatString: "YYYY年MM月DD日")
            body {
                raw
                references {
                    title
                    contentful_id
                    fixed(width: 1600) {
                        width
                        height
                        src
                    }
                }
            }
        }
    }
`

function Blog(props) {
    const post = props.data.contentfulBlogPost2
    const { references } = post.body
    const options = {
        renderNode: {
            'embedded-asset-block': (node) => {
                const referenceImage = references.filter(reference => 
                    reference.contentful_id === node.data.target.sys.id
                )[0]
                return <img src={referenceImage.fixed.src} alt={referenceImage.title}/>
            }
        }
    }
    return (
        <Layout pageTitle={post.title} >
            <h1>{post.title}</h1>
            <p>{post.publishedDate}</p>
            {documentToReactComponents(JSON.parse(props.data.contentfulBlogPost2.body.raw), options)}
        </Layout>
    )
}

export default Blog
