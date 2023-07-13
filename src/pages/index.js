import * as React from "react"
import PageMeta from "../components/PageMeta"
import Layout from "./layout"
import '../assets/css/reset.css'
import '../assets/css/common.scss'

const IndexPage = () => {
  return (
    <Layout>
      <h2>Welcome to the Homepage</h2>
      {/* Add your page content here */}
    </Layout>
  )
}

export default IndexPage

export const Head = () => <PageMeta title="Project" />

