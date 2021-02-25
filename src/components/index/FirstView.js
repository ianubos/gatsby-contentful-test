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
    border: solid 2px red;
    h1 {
        font-size: 48px;
        font-weight: 600;
        position: absolute;
        top: 50%;
        left: 5%;
        color: white;
    }
`

function FirstView() {
    const data = useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "images/oversuspention.jpg" }) {
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
            <h1>ファーストビュー</h1>
            <Img fluid={data.file.childImageSharp.fluid} alt="" className="image" />
        </FirstViewStyle>
    )
}

export default FirstView
