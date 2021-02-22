import React from "react"
import { Link } from "gatsby"

import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout>
            <h1>hello</h1>
            <h2>this is demo</h2>
            <Link to='contact'>Contact</Link>
            <Link to='about'>About</Link>
        </Layout>
    )
}

export default IndexPage