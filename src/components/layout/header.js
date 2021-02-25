import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const HeaderStyle = styled.header`
    // font-family: 'Lato','Open Sans','Helvetica Neue','Arial','San-serif';
    // font-family:Verdana, Arial, Helvetica, sans-serif;
    font-family: Maison Neue,sans-serif;
    position: fixed;
    top: 0;
    z-index: 1000;
    box-sizing: border-box;
    // background: rgba(10,10,10,0.9);
    width: 100%;
    height: 80px;
    padding: 30px 20px;
    div {
        height: 100%;
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        h1 {
            a {
                font-family: times, Times New Roman, times-roman, georgia, serif;
                letter-spacing: -0.05em;
                color: #ddd;
                font-size: 28px;
                font-weight: 900;
                padding: 10px;
            }
        }
        nav {
            ul {
                box-sizing: border-box;
                display: flex;
                align-items: center;
                justify-content: space-between;
                min-width: 300px;
                li {
                    a {
                        color: #ddd;
                        font-size: 18px;
                        font-weight: 600;
                    }
                    cursor: pointer;
                    margin: 0 2vw;
                    padding: 5px 10px;
                    font-size: 16px;
                }
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
            <div>
                <h1><Link to='/'>GutenbergTemplate</Link></h1>
                <nav>
                    <ul>
                        <li><Link to='/about'>ABOUT</Link></li>
                        <li><Link to='/blog'>BLOG</Link></li>
                        <li><Link to='/contact'>CONTACT</Link></li>
                    </ul>
                </nav>
            </div>
        </HeaderStyle>
    )
}
export default Header
