import * as React from "react"
import PageMeta from "../components/PageMeta"
import Layout from "./layout"
import { Button } from "antd"

const Contact = () => {
    return (
      <Layout>
        <h2 className="a11y-hidden">Contact</h2>

        문의주세요
        <Button
          type="primary"
          href="https://forms.gle/HnTAPUD988igE5oX7" target="_blank"
        >
          견적요청하기
        </Button>
      </Layout>
    )
  }
  
  export default Contact

  export const Head = () => <PageMeta title="Contact" />