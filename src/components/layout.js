import React from "react"
import { Link, StaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import Helmet from "react-helmet"
import moon from "../assets/moon.png"
import sun from "../assets/sun.png"

import { rhythm } from "../utils/typography"
import Bio from "./bio"
import Toggle from "./toggle"

const Title = styled.h1`
  margin-bottom: 0;
  margin-top: 0;
  display: flex;
  align-items: center;
  color: var(--text-headerTitle);
  letter-spacing: 1px;
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

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

class Layout extends React.Component {
  state = {
    theme: null,
  }
  componentDidMount() {
    this.setState({ theme: window.__theme })
    window.__onThemeChange = () => {
      this.setState({ theme: window.__theme })
    }
  }
  render() {
    const { title, children } = this.props
    return (
      <StaticQuery
        query={logoQuery}
        render={data => {
          return (
            <div
              style={{
                color: "var(--textNormal)",
                background: "var(--bg)",
                transition: "color 0.2s ease-out, background 0.2s ease-out",
                minHeight: "100vh",
              }}
            >
              <Helmet
                meta={[
                  {
                    name: "theme-color",
                    content:
                      this.state.theme === "light" ? "#f7f7f7" : "#282c35",
                  },
                ]}
              />
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
                <Footer>
                  <Bio />
                  {this.state.theme !== null ? (
                    <Toggle
                      icons={{
                        checked: (
                          <img
                            src={moon}
                            width="16"
                            height="16"
                            role="presentation"
                            alt="moon"
                            style={{ pointerEvents: "none" }}
                          />
                        ),
                        unchecked: (
                          <img
                            src={sun}
                            width="16"
                            height="16"
                            role="presentation"
                            alt="sun"
                            style={{ pointerEvents: "none" }}
                          />
                        ),
                      }}
                      checked={this.state.theme === "dark"}
                      onChange={e =>
                        window.__setPreferredTheme(
                          e.target.checked ? "dark" : "light"
                        )
                      }
                    />
                  ) : (
                    <div style={{ height: "24px" }} />
                  )}
                </Footer>
              </Container>
            </div>
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
