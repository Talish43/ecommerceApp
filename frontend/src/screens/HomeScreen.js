import React from "react";
import products from "../products";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import PageTitle from "../components/PageTitle";
const HomeScreen = () => {
  return (
    <>
      <PageTitle title="Wacom" />
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col
            key={product._id}
            sm={12}
            md={6}
            lg={4}
            xl={3}
            className="mb-4 mt-4"
          >
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
