import React from "react";
import { Form, Button } from "react-bootstrap";

export default function MetodoPago() {
  return (
    <div className="form-container">
      <h3>Registrar Método de Pago</h3>
      <Form>
        <Form.Group controlId="formPaymentMethodName">
          <Form.Label>Nombre del Método</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa el nombre del método de pago"
          />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            type="text"
            placeholder="Descripción del método de pago"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Registrar Método
        </Button>
      </Form>
    </div>
  );
}
