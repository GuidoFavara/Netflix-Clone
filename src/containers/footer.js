import React from 'react';
import { Footer } from '../components';

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>¿Preguntas? Llama al 800-345-1375</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#">Preguntas frecuentes</Footer.Link>
          <Footer.Link href="#">Relaciones con inversionistas</Footer.Link>
          <Footer.Link href="#">Formas de ver</Footer.Link>
          <Footer.Link href="#">Informacion Corporativa</Footer.Link>
          <Footer.Link href="#">Originales de Netflix</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Centro de ayuda</Footer.Link>
          <Footer.Link href="#">Empleo</Footer.Link>
          <Footer.Link href="#">Términos de uso</Footer.Link>
          <Footer.Link href="#">Contáctanos</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Cuenta</Footer.Link>
          <Footer.Link href="#">Canjear Gif Card</Footer.Link>
          <Footer.Link href="#">Privacidad</Footer.Link>
          <Footer.Link href="#">Prueba de velocidad</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Prensa</Footer.Link>
          <Footer.Link href="#">Comprar Gif Card</Footer.Link>
          <Footer.Link href="#">Preferencias de cookies</Footer.Link>
          <Footer.Link href="#">Avisos legales</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>Netflix Argentina</Footer.Text>
      <Footer.Text>Desarrollado por Guido Favara</Footer.Text>
    </Footer>
  );
}
