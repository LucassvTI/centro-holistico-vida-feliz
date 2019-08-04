import React from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import Leandro from '../../assets/leandro.jpg';

import { Content } from './styles';

const Footer = () => (
    <Content>
        <Container>
            <Row>
                <Col xs={12} md={5}>
                    <img className="img-thumbnail" src={Leandro} alt='Leandro Viegas' />
                </Col>
                <Col xs={12} md={5}>
                    <strong>Centro Holístico</strong>
                    <p>
                        Horário de funcionamento: de<br/>
                        segunda a sexta: das 9h às 18h,<br/>
                        fins de semana e feriados fechados
                    </p>
                    <address>
                        Avenida Assis Brasil, N°3.257 3° andar<br/> 
                        Sala 306<br/> 
                        Passo d'Areia Porto Alegre
                    </address>
                </Col>      
                <Col xs={12} md={2}>
                <strong>Contato</strong>
                <p>
                    <a href='tel:51991085040'><FaWhatsapp /> (51) 99108-5040</a><br/>
                    <a href='tel:5139070450'><FaPhone /> (51) 3907-0450</a>
                </p>
                </Col>
            </Row>
        </Container>
        <div>
            <p>Copyright &copy; 2018 | Centro Holistico Vida Feliz.</p>
        </div>
    </Content>
);

export default Footer;
