import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const HeaderStyle = styled.header`
    width: 100%;
    height: 80px;
    h1 {
        font-size: 30px;
        font-weight: 900;
    }
    nav {
        ul {
            li {
                font-size: 16px;
            }
        }
    }
`;

function Header() {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <HeaderStyle>
            <h1><Link to='/'>Gutenberg Template</Link></h1>
            <nav>
                <ul>
                    <li><Link to='/about'>about</Link></li>
                    <li><Link to='/blog'>blog</Link></li>
                    <li><Link to='/contact'>contact</Link></li>
                </ul>
            </nav>
        </HeaderStyle>
    )
}
export default Header
