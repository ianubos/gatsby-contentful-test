import React from 'react'
import styled from 'styled-components'

const FooterStyle = styled.footer`
    width: 100%;
    min-height: 300px;
    background: #222;
    color: #eee;
    .copy-right {
        font-size: 12px;

    }
`

function Footer() {
    return (
        <FooterStyle>
            <p className="copy-right">Created by Gourtenberg</p>
        </FooterStyle>
    )
}

export default Footer
