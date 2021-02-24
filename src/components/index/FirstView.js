import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

const FirstViewStyle = styled.section`
    min-height: 700px;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
        font-size: 48px;
        font-weight: 600;
    }
`

function FirstView() {
    const data = useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "images/firstview.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
            }
        }
        }
    }
    `)
    return (
        <FirstViewStyle>
            {/* <h1>ファーストビュー</h1> */}
            <Img fluid={data.file.childImageSharp.fluid} alt=""/>
        </FirstViewStyle>
    )
}

export default FirstView
