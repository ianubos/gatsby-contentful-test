import React from 'react'
import styled from 'styled-components'

const FooterStyle = styled.footer`
    width: 100%;
    min-height: 250px;
    background: #222;
    color: #eee;
    position: relative;
    .copy-right {
        position: absolute;
        box-sizing: border-box;
        bottom: 5px;
        width: 100%;
        text-align: right;
        padding-right: 10px;
        font-size: 14px;
    }
`

function Footer() {
    return (
        <FooterStyle>
            <p className="copy-right">© 2021, Gourtenberg</p>
        </FooterStyle>
    )
}

export default Footer
