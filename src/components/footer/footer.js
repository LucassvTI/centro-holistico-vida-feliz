import React, { Component } from 'react'
import './footer.css'


class Footer extends Component {
    voltarTopo(e) {
        e.preventDefault();
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <footer className='container-fluid p-0 footer'>
                <div className='container'>
                    <div className="row p-2">
                        <div className="col-md-6 imagem-footer">
                            <img className="img-thumbnail" src={require('../../imagens/leandro.jpg')} />
                        </div>
                        <div className="col-md-6 conteudo-footer">
                            <div className='col-12'>
                            <address>
                            Avenida Assis Brasil, N°3.257 3° andar, Sala 306, Passo d'Areia<br />Porto Alegre - RS, 91010-004
                            </address>
                               
                            </div>
                            <div className='col-12'>
                                <ul>
                                    <li><a href='tel:51991085040'><i className='fab fa-whatsapp'></i>&nbsp;(51) 99108-5040</a></li>
                                    <li><a href='tel:5139070450'><i className='fas fa-phone'></i>&nbsp;(51) 3907-0450&nbsp;</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center copy'>
                    <p>Copyright &copy; 2018 | Centro Holistico Vida Feliz.</p>
                </div>
            </footer>
        )
    }
}


export default Footer