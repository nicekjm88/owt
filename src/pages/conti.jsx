import * as React from "react"
import PageMeta from "../components/PageMeta"
import { graphql } from "gatsby"
import Layout from "./layout"
import { Image } from "antd"
// import Swiper core and required modules
import { Pagination, Scrollbar, A11y } from "swiper/modules"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

const Conti = ({ data }) => {
  return (
    <Layout>
      <h2 className="a11y-hidden">Conti</h2>

      {/* {data.contiList.edges.map(({ node }) => (
        <div key={node.id}>
          <Image 
            src={node.frontmatter.image.childrenImageSharp[0].gatsbyImageData.images.fallback.src}
            alt={node.frontmatter.title}
            preview={{
              mask: <div><p>{node.frontmatter.title}</p>{node.frontmatter.date}</div>,
            }}
          />
        </div>
      ))} */}

      <Image.PreviewGroup>
        <Swiper
          // install Swiper modules
          modules={[Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {[
            "https://cdn.imweb.me/thumbnail/20220824/b57c3ed92967c.jpg",
            "https://cdn.imweb.me/thumbnail/20220824/31262f5c3707a.jpg",
            "https://cdn.imweb.me/thumbnail/20220824/748880d35f348.jpg",
          ].map((imageUrl, index) => (
            <SwiperSlide>
              <div key={index}>
                <Image src={imageUrl} alt=""></Image>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Image.PreviewGroup>
    </Layout>
  )
}

export default Conti

export const Head = () => <PageMeta title="Conti" />

export const query = graphql`
  query {
    contiList: allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
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
            date
          }
        }
      }
    }
  }
`
