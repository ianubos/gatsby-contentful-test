import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Head from '../components/head'

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
        <Layout>
            <Head title="Blog"/>
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
        </Layout>
    )
}

export default BlogPage
