import React from "react";
import ProductCard from "./ProductCard";
import { Container, Row, Col } from "react-bootstrap";

const ProductDisplay = () => {
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <Container className="py-5">
        <Row>
          <Col md={12} lg={4} className="mb-4 mb-lg-0">
            <ProductCard
              imgSrc="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
              title="HP Notebook"
              originalPrice="1099"
              discountedPrice="999"
              available="6"
              rating={5}
              combo="4"
            />
          </Col>
          <Col md={6} lg={4} className="mb-4 mb-md-0">
            <ProductCard
              imgSrc="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp"
              title="HP Envy"
              originalPrice="1199"
              discountedPrice="1099"
              available="7"
              rating={4}
              combo="2"
            />
          </Col>
          <Col md={6} lg={4} className="mb-4 mb-md-0">
            <ProductCard
              imgSrc="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/5.webp"
              title="Toshiba B77"
              originalPrice="1399"
              discountedPrice="1299"
              available="5"
              rating={4.5}
              combo="3"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDisplay;
