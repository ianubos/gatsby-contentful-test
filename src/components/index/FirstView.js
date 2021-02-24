import React from 'react'
import styled from 'styled-components'
// import ImageSrc from '../../assets/images/firstview.jpg'

export const data = graphql`
  query {
    fileName: file(relativePath: { eq: "../../assets/images/firstview.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

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
    .background {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 700px;
        width: 100%;
    }
`

function FirstView() {
    return (
        <FirstViewStyle>
            <h1>ファーストビュー</h1>
            <div className="background">
                <img src="../../../images/firstview.jpg" />
            </div>
            {/* <Img fluid={data.fileName.childImageSharp.fluid} alt="" /> */}
        </FirstViewStyle>
    )
}

export default FirstView
