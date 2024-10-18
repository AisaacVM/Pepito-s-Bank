import React from "react";
import { Form, Button } from "react-bootstrap";

export default function Categoria() {
  return (
    <div className="form-container">
      <h3>Registrar Categoría</h3>
      <Form>
        <Form.Group controlId="formCategoryName">
          <Form.Label>Nombre de la Categoría</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa el nombre de la categoría"
          />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Descripción</Form.Label>
          <Form.Control type="text" placeholder="Descripción de la categoría" />
        </Form.Group>
        <Form.Group controlId="formIcon">
          <Form.Label>Icono</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Registrar Categoría
        </Button>
      </Form>
    </div>
  );
}
