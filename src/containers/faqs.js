import React from 'react';
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

      <OptForm>
        <OptForm.Input placeholder="Email" />
        <OptForm.Button>COMENZÁ YA</OptForm.Button>
        <OptForm.Text>
          ¿Querés mirar Netflix ya? Ingresá tu email para crear una cuenta o reiniciar tu membresía de Netflix.
        </OptForm.Text>
      </OptForm>
    </Accordion>
  );
}
