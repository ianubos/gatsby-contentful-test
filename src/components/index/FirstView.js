import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

const FirstViewStyle = styled.section`
    min-height: 700px;
    // background: #333;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    border: solid 2px red;
    h1 {
        font-size: 48px;
        font-weight: 600;
        position: absolute;
        top: 50%;
        left: 5%;
        color: white;
    }
    .image {
        // max-height: 1024px;
        border: solid 2px green;
        width: 100%;
        height: 100%;
        overflow: hidden;
        picture img {
            object-fit: cover;
            width: 100%;
            min-height: 100%;
        }
    }
`


function FirstView() {
    const data = useStaticQuery(graphql`
    query {
        firstview: file(relativePath: { eq: "oversuspention.jpg" }) {
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
            <Img fluid={data.firstview.childImageSharp.fluid} alt="first view" className="image" />
        </FirstViewStyle>
    )
}

export default FirstView
