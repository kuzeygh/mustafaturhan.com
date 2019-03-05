import React from "react"
import { Link, StaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { rhythm } from "../utils/typography"
import Bio from "./bio"

const Title = styled.h1`
  margin-bottom: 0;
  margin-top: 0;
  display: flex;
  align-items: center;
`

const HeaderLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
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
                <Title>
                  <HeaderLink to={`/`}>
                    <Image
                      fadeIn={false}
                      style={{ padding: "40px", marginRight: "0.5em" }}
                      fixed={data.logo.childImageSharp.fixed}
                      alt="Logo"
                    />
                    <span>{title}</span>
                  </HeaderLink>
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
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`

export default Layout
