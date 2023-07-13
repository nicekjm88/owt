import React from "react";
import { Link } from "gatsby";
import { Col, Row } from "antd";
import "./header.scss"

const Header = () => {
  return (
    <header>
      <Row>
        <Col span={18} offset={3}>
          <h1 className="logo">OWT</h1>
          <nav>
            <ul>
              <li>
                <NavLink to="/project">PROJECTS</NavLink>
              </li>
              <li>
                <NavLink to="/conti">CONTI</NavLink>
              </li>
              <li>
                <NavLink to="/about">ABOUT OWT</NavLink>
              </li>
              <li>
                <NavLink to="/contact">CONTACT</NavLink>
              </li>
            </ul>
          </nav>
        </Col>
      </Row>
    </header>
  );
};

const NavLink = ({ to, children }) => {
  return (
    <Link to={to} activeClassName="active">
      {children}
    </Link>
  );
};

export default Header;
