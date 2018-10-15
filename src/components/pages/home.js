import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
            <main>
                <section>
                    <div className="titulo">
                        <h1 className='display-6 text-center'>Medicina Alternativa</h1>
                        <h2 className='display-7 text-center'>É hoje o tratamento de saúde que mais cresce no mundo</h2>
                    </div>
                        <div className="container">
                            <div className="embed-responsive embed-responsive-21by9">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/0QTUMAPjMP8?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen title='Video de apresentação vindo do Youtube'></iframe>
                            </div>
                        </div>
                </section>
                <section className='card-central'>
                    <div className='container-fluid'>
                        <div className='row justify-content-center'>
                            <div className='card p-3 col-12 col-md-6 col-xl-3 col-lg-3'>
                                <div className='mx-4'>
                                    <div className='card-img pb-4'>
                                    </div>
                                    <div className='card-box'>
                                        <h4 className='card-title mbr-fonts-style display-5'>Qual o objetivo do Centro Holístico Vida feliz</h4>
                                        <p className='mbr-text mbr-fonts-style display-7'>O objetivo do centro holístico é proporcionar a seus clientes terapias que possibilite a harmonia do corpo, mente e alma para promover o desenvolvimento espiritual. Trazendo a tão sonhada felicidade, proporcionando a elevação da sua luz interior.</p>
                                        <p className='mbr-text mbr-fonts-style display-7'>Nossa terapia ajuda o cliente se auto conhecer, permitindo e facilitando o equilíbrio energético e emocional. Nosso tratamento possibilita a reformulação da vida como um todo, buscando um olhar diferenciado para a vida.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='card p-3 col-12 col-md-6 col-xl-3 col-lg-3'>
                                <div className='mx-4'>
                                    <div className='card-img pb-4'>
                                    </div>
                                    <div className='card-box'>
                                        <h4 className='card-title mbr-fonts-style display-5'>O que é terapia holística?</h4>
                                        <p className='mbr-text mbr-fonts-style display-7'><b>A Terapia holística</b> é a que segue os princípios do holismo. O cliente é abordado integralmente, como um sistema, ou seja, objetivando tratar cada pessoa em seus aspectos físico, mental, emocional e espiritual. Buscando tratar em conjunto os sintomas físicos, dando muita atenção as causas dos reflexos ou a somatização das desarmonias já existentes nos corpos energéticos e ou emocionais.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='card p-3 col-12 col-md-6 col-xl-3 col-lg-3'>
                                <div className='mx-4'>
                                    <div className='card-img pb-4'>
                                    </div>
                                    <div className='card-box'>
                                        <h4 className='card-title mbr-fonts-style display-5'>Quais as técnicas holísticas utilizadas?</h4>
                                        <p className='mbr-text mbr-fonts-style display-7'>Aqui no centro Holístico, trabalhamos com diversas técnicas que abrangem o aconselhamento na percepção do cognitivo, e aprofundamento na mente inconsciente. Para obter estes estímulos usamos a Programação Neurolinguística, hipnose Ericksoniana, clássica e clínica, técnica de renascimento, Regressão de idade, regressão de Vidas Passadas, e outras.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='card p-3 col-12 col-md-6 col-xl-3 col-lg-3'>
                                <div className='mx-4'>
                                    <div className='card-img pb-4'>
                                    </div>
                                    <div className='card-box'>
                                        <h4 className='card-title mbr-fonts-style display-5'>Qual a medicamento sugerido?</h4>
                                        <p className='mbr-text mbr-fonts-style display-7'>Indicamos somente medicação naturais: Florais, que trabalham na reposição dos padrões em desequilíbrios de qualidades positivas.</p>
                                        <p className='mbr-text mbr-fonts-style display-7'>Homeopatia, sabendo-se que semelhante cura semelhante usamos quando necessário para aflorar a cura.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default Home

                /*
                    <h1 className='display-6 text-center'>Medicina Alternativa</h1>
                        <h2 className='display-7 text-center'>É hoje o tratamento de saúde que mais cresce no mundo</h2>
                        <div className='jumbotron jumbotron-fluid'>
                            <div className='container'>
                                <h3 className='display-8'>Qual o objetivo do Centro Holístico Vida feliz</h3>
                                <p className='lead'>O objetivo do centro holístico é proporcionar a seus clientes terapias que possibilite a harmonia do corpo, mente e alma para promover o desenvolvimento espiritual. Trazendo a tão sonhada felicidade, proporcionando a elevação da sua luz interior.</p>
                                <p className='lead'>Nossa terapia ajuda o cliente se auto conhecer, permitindo e facilitando o equilíbrio energético e emocional. Nosso tratamento possibilita a reformulação da vida como um todo, buscando um olhar diferenciado para a vida.</p>
                                <h3 className='display-8'>O que é terapia holística?</h3>
                                <p className='lead'><b>A Terapia holística</b> é a que segue os princípios do holismo. O cliente é abordado integralmente, como um sistema, ou seja, objetivando tratar cada pessoa em seus aspectos físico, mental, emocional e espiritual. Buscando tratar em conjunto os sintomas físicos, dando muita atenção as causas dos reflexos ou a somatização das desarmonias já existentes nos corpos energéticos e ou emocionais.</p>
                                <h3 className='display-8'>Quais as técnicas holísticas utilizadas?</h3>
                                <p className='lead'>Aqui no centro Holístico, trabalhamos com diversas técnicas que abrangem o aconselhamento na percepção do cognitivo, e aprofundamento na mente inconsciente. Para obter estes estímulos usamos a Programação Neurolinguística, hipnose Ericksoniana, clássica e clínica, técnica de renascimento, Regressão de idade, regressão de Vidas Passadas, e outras.</p>
                                <h3 className='display-8'>Qual a medicamento sugerido?</h3>
                                <p className='lead'>Indicamos somente medicação naturais: Florais, que trabalham na reposição dos padrões em desequilíbrios de qualidades positivas.</p>
                                <p className='lead'>Homeopatia, sabendo-se que semelhante cura semelhante usamos quando necessário para aflorar a cura.</p>
                            </div>
                        </div>
                        */