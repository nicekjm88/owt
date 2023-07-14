import * as React from "react"
import PageMeta from "../components/PageMeta"
import { graphql } from "gatsby"
import Layout from "./layout"
import { Image } from "antd"
import Masonry from "react-masonry-css"
import "../assets/css/project.scss"

const Project = ({ data }) => {  

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  }

  const handlePreviewChange = (current, prev) => {
    console.log(`current index: ${current}, prev index: ${prev}`)
  }

  return (
    <Layout>
      <h2 className="a11y-hidden">Project</h2>      

      <Image.PreviewGroup preview={{ onChange: handlePreviewChange }}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
            {data.projectList.edges.map(({ node }) => (
              <div key={node.id}>
                <Image 
                  src={node.frontmatter.image.childrenImageSharp[0].gatsbyImageData.images.fallback.src}
                  alt={node.frontmatter.title}
                  preview={{
                    mask: <div><p>{node.frontmatter.title}</p>{node.frontmatter.dates}</div>,
                  }}
                />
              </div>
            ))}
          
        </Masonry>
      </Image.PreviewGroup>
    </Layout>
  )
}

export default Project

export const Head = () => <PageMeta title="Project" />

export const query = graphql`
  query {
    projectList: allMarkdownRemark(sort: {frontmatter: {dates: ASC}}) {
      edges {
        node {
          id
          frontmatter {
            title
            image {
              childrenImageSharp {
                gatsbyImageData
              }
            }
            dates
          }
        }
      }
    }
  }
`
