import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout/layout'
import styled from 'styled-components'

const NotFoundStyle = styled.section`
    h1 {
        font-size: 32px;
    }
    p {
        font-size: 18px;
    }
`

function NotFound() {
    return (
        <Layout title="Not Found">
            <NotFoundStyle>
                <h1>page not found</h1>
                <p><Link to="/" >Head home</Link></p>
            </NotFoundStyle>
        </Layout>
    )
}

export default NotFound
