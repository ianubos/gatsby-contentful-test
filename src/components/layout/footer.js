import React from 'react'
import styled from 'styled-components'

const FooterStyle = styled.footer`
    width: 100%;
    min-height: 300px;
    background: #111;
    color: #fff;
`

function Footer() {
    return (
        <FooterStyle>
            <p>Created by Gourtenberg</p>
        </FooterStyle>
    )
}

export default Footer
