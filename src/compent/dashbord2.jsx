// src/components/Dashboard.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col md={3}>
          {/* Sidebar component */}
          <div>Sidebar</div>
          {/* You can replace this div with your Sidebar component */}
        </Col>
        <Col md={9}>
          {/* Main content component */}
          <div>Main Content</div>
          {/* You can replace this div with your Main Content component */}
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
