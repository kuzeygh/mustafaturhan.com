import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Post = styled.div`
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);

  &:first-child {
    border-top: 0;
    border-bottom: 0;
  }

  &:last-child {
    border-bottom: 0;
  }
`

const PostText = styled.div`
  margin: 0;
  padding: 1.5em 0;
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Mustafa Turhan"
          keywords={[`blog`, `front-end`, `javascript`, `react`]}
        />
        {posts.map(({ node }) => {
          return (
            <Post key={node.fields.slug}>
                <PostText
                  dangerouslySetInnerHTML={{
                    __html: node.html,
                  }}
                />
            </Post>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          html
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
