/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

const Container = styled.div`
  display: flex;
  margin-top: ${rhythm(2)};
  justify-content: space-between;
`

const Avatar = styled(Image)`
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 0;
  min-width: 50px;
  border-radius: 100%;

  img {
    border-radius: 50%;
  }
`
const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;

  a {
    margin-right: ${rhythm(1 / 4)};
  }
`

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <Container>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Avatar fixed={data.avatar.childImageSharp.fixed} alt={author} />
              <div>
                <p style={{ marginBottom: 0 }}>
                  Written by <strong>{author}</strong>.
                </p>
                <SocialLinks>
                  <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>
                  <a href={`https://github.com/${social.github}`}>Github</a>
                  <a href={`mailto:${social.email}`}>odunluzikkim@gmail.com</a>
                </SocialLinks>
              </div>
            </div>
          </Container>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
          github
          email
        }
      }
    }
  }
`

export default Bio
