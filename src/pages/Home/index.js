import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Card, Row, Col } from 'react-bootstrap';

import Carousel from '../../components/Carousel';
import { Main } from './styles';

const Home = () => (
    <Main>
        <Helmet>
            <title>Home - Centro Holístico Vida Feliz</title>
            <meta name="description" content="A medicina alternativa, com suas técnicas especificas, trabalha com estado alterado da consciência, possibilitando soluções breves para os desconfortos de seus clientes." />
        </Helmet>
        <Container>
        <header>
            <h1>Medicina Alternativa</h1>
            <h2>É hoje o tratamento de saúde que mais cresce no mundo</h2>
        </header>
        <Carousel/>
        <section>
            
                <Row>
                    <Col xs={12} md={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Qual o objetivo do Centro Holístico Vida feliz</Card.Title>
                                <Card.Text>O objetivo do centro holístico é proporcionar a seus clientes terapias que possibilite a harmonia do corpo, mente e alma para promover o desenvolvimento espiritual. Trazendo a tão sonhada felicidade, proporcionando a elevação da sua luz interior.</Card.Text>
                                <Card.Text>Nossa terapia ajuda o cliente se auto conhecer, permitindo e facilitando o equilíbrio energético e emocional. Nosso tratamento possibilita a reformulação da vida como um todo, buscando um olhar diferenciado para a vida.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>O que é terapia holística?</Card.Title>
                                <Card.Text><b>A Terapia holística</b> é a que segue os princípios do holismo. O cliente é abordado integralmente, como um sistema, ou seja, objetivando tratar cada pessoa em seus aspectos físico, mental, emocional e espiritual. </Card.Text>
                                <Card.Text>Buscando tratar em conjunto os sintomas físicos, dando muita atenção as causas dos reflexos ou a somatização das desarmonias já existentes nos corpos energéticos e ou emocionais.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Quais as técnicas holísticas utilizadas?</Card.Title>
                                <Card.Text>Aqui no centro Holístico, trabalhamos com diversas técnicas que abrangem o aconselhamento na percepção do cognitivo, e aprofundamento na mente inconsciente.</Card.Text>
                                <Card.Text>Para obter estes estímulos usamos a Programação Neurolinguística, hipnose Ericksoniana, clássica e clínica, técnica de renascimento, Regressão de idade, regressão de Vidas Passadas, e outras.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Qual a medicamento sugerido?</Card.Title>
                                <Card.Text>Indicamos somente medicação naturais: Florais, que trabalham na reposição dos padrões em desequilíbrios de qualidades positivas.</Card.Text>
                                <Card.Text>Homeopatia, sabendo-se que semelhante cura semelhante usamos quando necessário para aflorar a cura.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
        </section>
        </Container>
    </Main>
);

export default Home;
