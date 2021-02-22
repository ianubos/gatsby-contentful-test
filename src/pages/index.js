import React from "react"
import { Link } from "gatsby"

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="home"/>
            <h1>hello</h1>
            <h2>this is demo</h2>
            <Link to='contact'>Contact</Link>
            <Link to='about'>About</Link>
        </Layout>
    )
}

export default IndexPage