import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout/layout'

const ContactStyle = styled.section`
    h1 {
        font-size: 32px;
    }
    p {
        font-size: 18px;
    }
`


function ContactPage() {
    return (
        <Layout pageTitle="Contact">
            <ContactStyle>
                <h1>Contact Page</h1>
            </ContactStyle>
        </Layout>
    )
}

export default ContactPage
