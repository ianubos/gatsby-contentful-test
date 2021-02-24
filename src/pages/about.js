import React from 'react'
import Layout from '../components/layout/layout'
import styled from 'styled-components'

const AboutStyle = styled.section`
    h1 {
        font-size: 32px;
    }
    p {
        font-size: 18px;
    }
`

function AboutPage() {
    return (
        <Layout pageTitle="About">
            <AboutStyle>
                <h1>About</h1>
                <p>テスト</p>
            </AboutStyle>
        </Layout>
    )
}

export default AboutPage
