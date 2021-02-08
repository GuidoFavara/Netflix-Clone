import React from 'react';
import { Link } from 'react-router-dom';
import { Feature, OptForm } from '../components';
import { HeaderContainer } from '../containers/header';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { JumbotronContainer } from '../containers/jumbotron';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Películas y series ilimitadas y mucho más.</Feature.Title>
          <Feature.SubTitle>Disfruta donde quieras. Cancela cuando quieras.</Feature.SubTitle>
          <OptForm.Text>
            ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.
          </OptForm.Text>
          <OptForm>
            <OptForm.Input placeholder="Email" />
            <Link to="/signup">
              <OptForm.Button>COMIENZA YA</OptForm.Button>
            </Link>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
