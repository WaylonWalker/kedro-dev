import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'


import Header from './header'
import './layout.css'
// import '@quantumblack/kedro-ui/lib/styles/app.css';


const LayoutStyles = styled.div`
background: #001521;
main{
  font-family: Titillium Web,sans-serif;
  margin: 0 auto;
  max-width: 960px;
  background: #001521;
  min-height: 80vh;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  color: white;
}

h1 {
  font-family: 'Titillium Web',sans-serif;
  /* font-family: sans-serif; */
}
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <LayoutStyles>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>
          {children}
        </main>
      </LayoutStyles>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
