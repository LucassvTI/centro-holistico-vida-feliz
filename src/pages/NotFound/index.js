import React from 'react';
import { Helmet } from 'react-helmet';
import { Content } from './styles';

const NotFound = () => (
  <Content>
    <Helmet>
        <title>Não Encontrado - Centro Holístico Vida Feliz</title>
        <meta name="description" content="Desculpe esta pagina não foi encontrada" />
        <meta name="robots" content="noindex,nofollow" />
    </Helmet>
    <h1>Desculpe esta pagina não existe!</h1>
    <p>
      <strong>404</strong>
    </p>
  </Content>
);

export default NotFound;
