import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'

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
    query ($slug: String!) {
        contentfulBlogPost2 (slug: {eq: $slug}) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
                raw
            }
        }
    }
`

function Blog(props) {
    console.log(JSON.stringify(props.data.contentfulBlogPost2.body.raw))
    const options = {
        renderNode: {
            'embedded-asset-block': (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url} />
            }
        }
    }
    return (
        <Layout>
            <h1>{props.data.contentfulBlogPost2.title}</h1>
            <p>{props.data.contentfulBlogPost2.publishedDate}</p>
            {documentToReactComponents(JSON.parse(props.data.contentfulBlogPost2.body.raw))}
            {/* <div dangerouslySetInnerHTML={{__html: props.data. }}></div> */}
        </Layout>
    )
}

export default Blog
