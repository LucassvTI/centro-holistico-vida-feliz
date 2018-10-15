import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>    
                <a className='navbar-brand logo-img' href=' '><img src={require('../../imagens/logocombranco.png')} alt='Logo Centro Holistico Vida Feliz' /></a>
                <a className='navbar-brand logo-texto' href=' '>Centro Holistico Vida Feliz<br/><span>Psicoterapia Holistica</span></a>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav p-2 ml-auto'>
                        <li className='nav-item pl-2'>
                            <a className='nav-link' href='/'>Home</a>
                        </li>
                        <li className='nav-item pl-2'>
                            <a className='nav-link' href='/sobre'>Sobre</a>
                        </li>
                        <li className='nav-item pl-2'>
                            <a className='nav-link' href='/profissional'>Profissional</a>
                        </li>
                        <li className='nav-item pl-2'>
                            <a className='nav-link' href='/tecnicas'>Técnicas</a>
                        </li>
                        <li className='nav-item pl-2'>
                            <a className='nav-link' href='/contato'>Contato</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar