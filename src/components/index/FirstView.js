import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

const FirstViewStyle = styled.section`
    // background: #333;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    h1 {
        font-size: 48px;
        font-weight: 600;
        position: absolute;
        top: 50%;
        left: 5%;
        color: #fff;
        z-index: 10;
    }
    .image {
        width: 100%;
        min-height: 500px !important;
        // picture {
        //     max-height: 100%;
        //     height: 450px;
        //     img {
        //         width: 100%;
        //         height: 100px;
        //         object-fit: cover;
        //     }
        // }
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
            <Img
                fluid={data.firstview.childImageSharp.fluid} 
                alt="first view" 
                className="image" />
        </FirstViewStyle>
    )
}

export default FirstView
