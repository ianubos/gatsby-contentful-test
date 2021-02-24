import React from 'react'
import '../../assets/styles/index.scss'
import Header from './header'
import Footer from './footer'
import Head from './head'

function Layout(props) {
    return (
        <>
            <Head title={props?.pageTitle}/>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}

export default Layout
