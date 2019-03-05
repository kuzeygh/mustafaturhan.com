import React from "react"
import { Link, StaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"
import Bio from "./bio"

const Title = styled.h1`
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0;
  display: flex;
  align-items: center;
`

const HeaderLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
  margin-left: ${rhythm(1 / 2)};
`

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    return (
      <StaticQuery
        query={logoQuery}
        render={data => {
          return (
            <Container>
              <header>
                <Title style={{ ...scale(1.4) }}>
                  <Image
                    fadeIn={false}
                    fixed={data.logo.childImageSharp.fixed}
                    alt="Logo"
                  />
                  <HeaderLink to={`/`}>{title}</HeaderLink>
                </Title>
              </header>
              <main>{children}</main>
              <footer>
                <Bio />
              </footer>
            </Container>
          )
        }}
      />
    )
  }
}

const logoQuery = graphql`
  query {
    logo: file(absolutePath: { regex: "/logo.png/" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Layout
