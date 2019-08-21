import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Accordion, Card } from 'react-bootstrap';
import { Content } from './styles';

const Sessoes = require('./data');

function Sobre () {
    
    return (
    <Content>
        <Helmet>
            <title>Atividades - Centro Holístico Vida Feliz</title>
            <meta name="description" content="Com sessões individuais ou com pacotes de 5 ou 10 sessões com duração aproximada de 60 a 90 minutos cada, pode ser solucionado desconfortos definitivamente." />
        </Helmet>
        <Container>
        <section>
            <h1>Atividades</h1>
            <h3>O que é reprogramação mental?</h3>
            <p>Hoje, embasados em trabalhos científicos, na prática clínica, nos recursos da Programação Neurolinguística (PNL), Hipnose, Controle Mental e outras tecnologias avançadas, podemos afirmar que nossas mentes foram programadas. E se foram programadas, podem ser reprogramadas... É só utilizarmos as tecnologias e metodologias avançadas, compatíveis com a linguagem do cérebro... Todos nós temos milhares de informações armazenadas no nosso inconsciente, que nos ditam a maneira de como perceber o mundo a nossa volta, baseado nas nossas crenças adquiridas com o tempo, umas positivas (evolutivas) outras negativas (limitantes). A reprogramação mental é simplesmente um processo de uso da própria mente para trocar informações inadequadas por outras mais úteis, com o intuito de dar mais qualidade a saúde física, mental e espiritual.</p>

            <h3>Benefícios da reprogramação mental</h3>
            <p>Esta reprogramação é indicada para aquelas pessoas que estão sendo dominadas pelos pensamentos negativos, perdidas sem saber qual caminho seguir, sem foco, sem amor próprio, desmotivadas, sem confiança, estagnadas, sem propósito…</p>
            <p>Se algo está em desarmonia em sua casa, no trabalho ou na vida social, suas emoções estão desequilibradas, é possível que necessite ampliar suas estratégias para lidar com as diversas situações do cotidiano.</p>

            <h4>Esta reprogramação facilita</h4>
            <p>O tratamento da depressão, fobias, pânicos, raivas, insegurança, timidez, ciúmes e traumas etc...</p>

            <h4>O autoconhecimento</h4>
            <p>Quem é você? Qual a sua relação consigo mesmo? Qual a sua identidade? Qual a sua missão? Como ser? … você sabe? Qual a sua relação com o sistema no qual está inserido? Qual sua relação espiritual ou sistêmica, com tudo isso?</p>

            <h3>Como funciona o tratamento</h3>
            <p>O tratamento é feito através de encontros semanais ou quinzenais para reprogramação mental em dez sessões. Estas técnicas, sistematizadas fazem com que o efeito da terapia seja breve, facilitando a vida do cliente.</p>
            
            <p><b>Em 10 sessões, com duração aproximada de 60 a 90 minutos cada, podem ser alterados os parâmetros ou “programações” registrados em nosso cérebro e em nossa mente.</b></p>
        </section>
        <Accordion>
            {Sessoes.map( data => {
                return(
                <Card key={data.id} >
                    <Card.Header>
                        <Accordion.Toggle variant="link" eventKey={data.id}>
                           { data.title }
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={data.id}>
                        <Card.Body>
                        <p> { data.description } </p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                );
            })}
        </Accordion>
        </Container>
    </Content>
    )
};

export default Sobre;
