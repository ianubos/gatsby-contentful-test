import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
// import './header.module.scss'
import headerStyles from './header.module.scss'

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
        <header>
            <h1>Gutenberg</h1>
            <nav>
                <ul>
                    <li><Link to='/about'>about</Link></li>
                    <li><Link to='/blog'>blog</Link></li>
                    <li><Link to='/contact' className={headerStyles.link}>contact</Link></li>
                    <li><Link to='/contact' className={headerStyles.link}>{data.site.siteMetadata.title}</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header
