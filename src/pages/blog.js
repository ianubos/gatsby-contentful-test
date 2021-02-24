import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout/layout'
import styled from 'styled-components'

const BlogStyle = styled.section`
    h1 {
        font-size: 32px;
    }
    p {
        font-size: 18px;
    }
`

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost2 (sort: {fields: publishedDate, order: DESC}) {
                edges { 
                    node {
                        title
                        slug
                        publishedDate(formatString:"MMM Do, YYYY")
                    }
                }
            }
        }
    `)
    return (
        <Layout pageTitle="Blog">
            <BlogStyle>
                <h1>Blog</h1>
                <ol>
                    {data.allContentfulBlogPost2.edges.map((edge) => {
                        if (!edge.node?.slug) { 
                            return
                        }
                        return (
                            <li>
                                <Link to={`/blog/${edge.node.slug}`}>
                                    <h2>{edge.node.title}</h2>
                                    <p>{edge.node.publishedDate}</p>
                                </Link>
                            </li>
                        )
                    })}
                </ol>
            </BlogStyle>
        </Layout>
    )
}

export default BlogPage
