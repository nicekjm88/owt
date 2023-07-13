import * as React from "react"
import PageMeta from "../components/PageMeta"
import Layout from "./layout"

const About = () => {
    return (
      <Layout>
        <h2 className="a11y-hidden">About</h2>      

        <h3>
          Clients
        </h3>
        <p>
          <img src="https://cdn.imweb.me/thumbnail/20190923/33465e8453462.jpg" alt="" />
        </p>

      </Layout>
    )
  }
  
  export default About

  export const Head = () => <PageMeta title="About" />