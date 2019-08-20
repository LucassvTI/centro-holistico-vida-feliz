import React, { useState } from 'react'
import { FaMapMarker, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import { Form, Input } from '@rocketseat/unform';
import { ClapSpinner } from "react-spinners-kit";

import { email } from '../../service/api';

import { Content } from './styles';

function Contato() {
    const [ loading, setLoading ] = useState(false)
    const [ message, setMessage] = useState(null)

    async function handleSubmit({ assunto, destinatarios, corpo }){
        document.getElementById("Btn").disabled = true;
        setLoading(true);
        const data = {
            remetente: "Centro Holistico Vida Feliz <chvidafeliz@gmail.com>",
            assunto,
            destinatarios: destinatarios.concat(",leandrotviegas@gmail.com"),
            corpo
        }
        const envio = await sendEmail(data);
        setLoading(false);
        setMessage( envio.data.message );
        document.getElementById("contact").reset();
    }

    async function sendEmail({ remetente, assunto, destinatarios, corpo }){
        return await email.post('/enviarEmail', {
            remetente,
            assunto,
            destinatarios,
            corpo
        });
    }

    return (
        <Content>
            <Container>
            <h1>Entre em Contato</h1>
            <Row>
                <Col xs={12} md={6}>
                    <h3>Pode nos encontrar</h3>
                    <p><strong>Centro de Consulta Psicoterapeuta</strong><br />
                    <FaMapMarker /> Avenida Assis Brasil, N°3.257 3° andar Sala 306<br />
                    <FaPhone /> (51) 3907-0450  / (51) 99108-5040 <br />
                    <FaEnvelope /> leandrotviegas@gmail.com (Geral)</p>
                    <div className="embed-responsive embed-responsive-21by9">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.9046870389393!2d-51.15660348488571!3d-30.010893081894597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519770bf48e5e21%3A0xe242faa12ab52b49!2sAv.+Assis+Brasil%2C+3257+-+Passo+d&#39;Areia%2C+Porto+Alegre+-+RS%2C+91010-004!5e0!3m2!1spt-BR!2sbr!4v1539566531426" width="600" height="450" frameborder="0" allowfullscreen title="Mapa para chegar no local"></iframe>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <Form onSubmit={handleSubmit} id="contact">
                        <Input name="nome" placeholder="Nome" required />
                        <Input name="destinatarios" placeholder="E-mail" required />
                        <Input name="assunto" placeholder="Assunto" required />
                        <Input multiline name="corpo" placeholder="Mensagem" required />
                        <button type="submit" id="Btn">Enviar</button>
                        {loading && <ClapSpinner /> }
                        {message && <span id="message"> { message } </span>}
                    </Form>
                </Col>
            </Row>
            </Container>
        </Content>
    );
} 

export default Contato;
