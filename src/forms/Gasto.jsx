import React from "react";
import { Form, Button } from "react-bootstrap";

export default function Gasto() {
  return (
    <div className="form-container">
      <h3>Registrar Gasto</h3>
      <Form>
        <Form.Group controlId="formAmount">
          <Form.Label>Monto</Form.Label>
          <Form.Control type="number" placeholder="Ingresa el monto" />
        </Form.Group>
        <Form.Group controlId="formDate">
          <Form.Label>Fecha</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Descripción</Form.Label>
          <Form.Control type="text" placeholder="Descripción del gasto" />
        </Form.Group>
        <Form.Group controlId="formUserName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre del usuario" />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Registrar Gasto
        </Button>
      </Form>
    </div>
  );
}
