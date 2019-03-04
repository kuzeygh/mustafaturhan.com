/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginTop: rhythm(2),
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  minWidth: 50,
                  borderRadius: `100%`,
                }}
                imgStyle={{
                  borderRadius: `50%`,
                }}
              />
              <div>
                <p style={{ marginBottom: 0 }}>
                  Written by <strong>{author}</strong>.
                </p>
                <a
                  style={{ marginRight: rhythm(1 / 4) }}
                  href={`https://twitter.com/${social.twitter}`}
                >
                  Twitter
                </a>
                <a
                  style={{ marginRight: rhythm(1 / 4) }}
                  href={`https://github.com/mustaphaturhan`}
                >
                  Github
                </a>
                <a
                  style={{ marginRight: rhythm(1 / 4) }}
                  href={`mailto:odunluzikkim@gmail.com`}
                >
                  odunluzikkim@gmail.com
                </a>
              </div>
            </div>
            <div style={{ alignSelf: "center" }}>
              Thanks <a href="https://www.gatsbyjs.org/">Gatsby</a>.
            </div>
          </div>
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
        }
      }
    }
  }
`

export default Bio
