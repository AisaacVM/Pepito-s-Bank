import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
//import NavBar from "./forms/NavBar";
import Usuario from "./forms/Usuario";
import Gasto from "./forms/Gasto";
import Categoria from "./forms/Categoria";
import MetodoPago from "./forms/MetodoPago";
import Footer from "./forms/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Container>
          <Row>
            <Col>
              <Usuario />
            </Col>
            <Col>
              <Gasto />
            </Col>
          </Row>
          <Row>
            <Col>
              <Categoria />
            </Col>
            <Col>
              <MetodoPago />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default App;
