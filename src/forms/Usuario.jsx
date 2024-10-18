import React from "react";
import { Form, Button } from "react-bootstrap";

export default function Usuario() {
  return (
    <div className="form-container">
      <h3>Regístrate</h3>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu nombre" />
        </Form.Group>
        <Form.Group controlId="formAge">
          <Form.Label>Edad</Form.Label>
          <Form.Control type="number" placeholder="Ingresa tu edad" />
        </Form.Group>
        <Form.Group controlId="formPhone">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control type="tel" placeholder="Ingresa tu teléfono" />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu correo" />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
        <Form.Group controlId="formDate">
          <Form.Label>Fecha de registro</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Form.Group controlId="formCity">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu ciudad" />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Registrarse
        </Button>
      </Form>
    </div>
  );
}
