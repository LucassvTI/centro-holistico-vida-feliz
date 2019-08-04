import React from 'react';
import { Container, Accordion, Card } from 'react-bootstrap';
import { Content } from './styles';

function Sobre () {
    
    return (
    <Content>
        <Container>
        <section>
            <h1>Nosso Consultório</h1>
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
        <Accordion defaultActiveKey="1">
            <Card>
                <Card.Header>
                    <Accordion.Toggle variant="link" eventKey="1">
                        1- Avaliação e Recodificação do Sistema de Crenças
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        Aqui o objetivo é detectar se auto conhecer e desinstalar crenças limitantes e, aproveitando a oportunidade, instalar ou incentivar crenças capacitantes, fortalecedoras, que conduzam o indivíduo a maiores e mais relevantes realizações pessoais. Facilitando a autoestima e aceitação.    
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle variant="link" eventKey="2">
                        2- Técnica do Perdão
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>Utilizada para eliminar cargas emocionais negativas de experiências passadas, através da associação de estímulos (âncoras), e do uso apropriado da linguística, “Esvaziando a Cesta de Lixos Emocionais”, ou seja, aqui o perdão utilizado não é o perdão racional, teórico ou teológico. É uma técnica que gera o perdão de maneira sentida e consentida, fora das racionalizações. Tem embasamento na utilização linguística de “falsas relações de causa e efeito”, da sensorialidade que fica ligada a cada evento de nossas vidas e ao entendimento de nossa ancestralidade biológica e funcionamento neurológico.</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle variant="link" eventKey="3">
                        3- Regressão na Linha do Tempo
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                    <Card.Body>O indivíduo é conduzido – metaforicamente – às suas experiências passadas: juventude, adolescência, infância, momento do parto, etc. Valendo-nos de alguns estímulos positivos (âncoras) gerados previamente, com boas sensações/emoções, tais como amor, gratidão, segurança, alegria, superação, etc., dessensibilizamos e imprimimos novo significado (ressignificação) à História de Vida da pessoa.</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle variant="link" eventKey="4">
                        4- Regressão À Vida Intrauterina
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                    <Card.Body>Dessensibilização e eliminação de traumas codificados durante a vida intrauterina, pela simbiose gestante-feto e dessensibilização e ressignificação de possíveis traumas e eventos relativos ao parto... Na atualidade, já sabemos que praticamente tudo que é vivenciado pela mãe durante a gestação é armazenado pelo feto, de maneira acrítica (sem juízo de valor), o que pode levar o indivíduo a incorporar em sua vida de relação, padrões aprendidos durante a vida intrauterina, gerados por fortes emoções ou por frases pronunciadas pela mãe ou ouvidas e emocionalizadas por esta...</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle variant="link" eventKey="5">
                        5- Recodificação do sistema de auto aceitação
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                    <Card.Body>Utiliza-se do poder criador do cérebro e da mente humana para limpar ou recodificar, valendo-nos de recursos especiais de ancoragem (associação de estímulos), momentos vividos de menos preso ou vergonhas, “instalar” novas qualidades que o indivíduo necessite em seu dia a dia.</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle variant="link" eventKey="6">
                    6- Regressão a Vivências Passadas ou Padrões Ancestrais
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="6">
                    <Card.Body>Aqui o indivíduo é conduzido, em transe leve, a experiências de Vivências Passadas (Dessa ou de outras encarnações, se isso fizer parte de seu sistema de crenças) ou a experiências registradas em sua Memória Genética (Padrões Ancestrais). Utilizamos essa sessão tanto para realizar o desbloqueio e ressignificação de eventuais traumas, quanto para busca</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle variant="link" eventKey="7">
                    7- Avaliação e Reprogramação da Identidade
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="7">
                    <Card.Body>Através de uma técnica denominada Matriz da Identidade, alinhamos e construímos o entendimento entre as “várias partes” do indivíduo: Essência, Potencial, Limitação, Proteção, Defeitos e Sombra. Desse entendimento, surge a reestruturação do Autoconceito, da Autoimagem e da Autoestima da pessoa.</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle variant="link" eventKey="8">
                    8- (Re) Criando a Jornada do Herói
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="8">
                    <Card.Body>Fortalecimento da autoimagem e da autoestima através da recriação lúdica da Jornada ou Saga do Herói, levando o indivíduo a experienciar-se como seu próprio herói... Através de estudos de religiões e mitologias comparadas, Joseph Campbell constatou que a saga ou jornada de todos heróis (reais, fictícios ou mitológicos) possuem uma mesma estrutura: todo herói ouve um chamado; rompe ou transpõe um portal; enfrenta demônios; recebe recursos através de Mentores ou Guardiões (aqui o indivíduo entra em contato com os Mentores/Guardiões de sua jornada); cumpre sua jornada e volta para os seus... Esta técnica se revelou como potente reestruturadora da capacidade dos indivíduos assumirem a condição de Protagonistas da Própria História, ou, como dizemos metaforicamente, “assumir a direção do carro da própria vida”.</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle variant="link" eventKey="9">
                    9- Revisão da Linha do Tempo
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="9">
                    <Card.Body>Aqui levamos o indivíduo a revisar e lançar Luz em sua Linha do Tempo, purificando e equilibrando o Passado (eliminado raiva, mágoa, culpa, ressentimento, impotência, etc) o Presente e Futuro (eliminando medo, ansiedade etc.). Aproveitamos a ida ao futuro (progressão de memória) para visitar um objetivo já realizado.</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle variant="link" eventKey="10">
                    10- (Re)Encontrando O Mestre Interior
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="10">
                    <Card.Body>A Sabedoria Interior, Ancestral pode ser resgatada e revivida através de práticas especiais. O propósito desta etapa, através de técnica lúdica de visualização e meditação, é levar o indivíduo ao reencontro de sua intuição e de seu crescimento pessoal... Bom, agora você já sabe que é possível, sim, reprogramar a mente. Como todas as coisas na vida, é preciso o uso do livre-arbítrio, de tomar-se a decisão de melhorar (e para melhorar não é preciso estar ruim) e evoluir sempre.</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        </Container>
    </Content>
    )
};

export default Sobre;
