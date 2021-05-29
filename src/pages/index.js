import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'
// import { RegVideo } from '../components/Complete'
const IndexPage = ({ data }) => {
  // console.log(data)
  const {
    allMdx: { nodes: posts },
  } = data

  return (
    <Layout>
      <Hero showPerson />
      {/* <RegVideo /> */}
      <Posts posts={posts} title="recently published" />
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(limit: 3, sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        frontmatter {
          title
          author
          category
          readTime
          slug
          date(formatString: "MMMM, Do YYYY")
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        excerpt
      }
    }
  }
`

export default IndexPage
