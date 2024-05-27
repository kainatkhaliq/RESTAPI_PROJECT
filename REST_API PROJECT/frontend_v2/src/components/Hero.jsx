import React from "react";
import { Container, Button } from "react-bootstrap";
import bgImg from "../assets/2151033646.jpg";

const Hero = () => {
  return (
    <div
      className="position-relative"
      style={{
        backgroundImage: `url(${bgImg})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <Container className="text-center">
          <div className="text-white">
            <h1 className="mb-3">A New Style</h1>
            <h4 className="mb-3">
              explore our new collection of Infinite Series
            </h4>
            <Button variant="outline-light" size="lg" href="#!" role="button">
              Explore
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
