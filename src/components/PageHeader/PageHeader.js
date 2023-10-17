import React from "react";
import { Container, Button } from "reactstrap";
import { Link } from "react-router-dom";

export default function PageHeader() {

  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
          <h1 className="h1-seo">Welcome to SYNQ</h1>
          <h3 className="d-none d-sm-block">
            Your Resume, Perfected.
          </h3>
          <Link to="/analysis">
            <Button color="primary" >
              Start          
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );

};