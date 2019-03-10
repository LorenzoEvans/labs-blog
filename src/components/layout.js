import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import Sidebar from './sidebar'

const Container = styled.div`
  display: flex;
`

const Content = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex: 1;
  overflow: scroll;
  height: 100vh ;
  padding: 20px;
  color: #7e7e7e;
`

const Query = graphql`
  query {
    site {
      siteMetadata {
        title
        authorName
      }
    }
  }
`

export default ({ children }) => (
  <StaticQuery
    query={Query}
    render={data => {
      const { title, siteDescription, authorName } = data.site.siteMetadata
      return (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content={siteDescription} />
            <title>{title}</title>
          </Helmet>
          <Container>
            <Sidebar title={title} authorName={authorName} />
            <Content>{children}</Content>
          </Container>
        </>
      )
    }}
  />
)
