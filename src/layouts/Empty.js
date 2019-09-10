import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import MainFooter from "../components/layout/MainFooter";

const EmptyLayout = ({ children, noNavbar, noFooter, noSidebar }) => (
  <Container fluid>
    <Row>
      {!noSidebar && <MainSidebar />}
      <Col
        className="main-content p-0"
        tag="main"
      >
        {!noNavbar && <MainNavbar />}
        {children}
        {!noFooter && <MainFooter />}
      </Col>
    </Row>
  </Container>
);

EmptyLayout.propTypes = {
  /**
   * Whether to display the sidebar, or not.
   */
  noSidebar: PropTypes.bool,
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

EmptyLayout.defaultProps = {
  noSidebar: true,
  noNavbar: true,
  noFooter: true
};

export default EmptyLayout;
