import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from '../components';
import OptForm from '../components/opt-form';
import faqsData from '../fixtures/faqs.json';

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Preguntas frecuentas</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      <Accordion.Item />
      <OptForm.Text>
        ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.
      </OptForm.Text>
      <OptForm>
        <OptForm.Input placeholder="Email" />
        <Link to="/signup" style={{ textDecoration: 'none' }}>
          {/* buscaré una mejor forma */}
          <OptForm.Button>COMIENZA YA</OptForm.Button>
        </Link>
      </OptForm>
    </Accordion>
  );
}
