import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Col, Row } from "antd";

const Layout = ({ children }) => {
  return (
    <div id="wrapper">
      <Header />
      <Row>
        <Col span={18} offset={3}>
          {children}
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default Layout;
