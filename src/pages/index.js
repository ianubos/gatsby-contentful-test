import React from "react"
import styled from 'styled-components'
import Layout from '../components/layout/layout'
import FirstView from '../components/index/FirstView'

const IndexStyle = styled.section`
    h1 {
        font-size: 32px;
    }
    p {
        font-size: 18px;
    }
`

const IndexPage = () => {
    return (
        <Layout pageTitle="Home">
            <IndexStyle>
                <FirstView />
            </IndexStyle>
        </Layout>
    )
}

export default IndexPage