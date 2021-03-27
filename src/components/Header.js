import React, { Component } from 'react';
import logo from '../assets/images/logo.png';

class Header extends Component {
    render() {
        return (
            <header id="header">

                <div className="row navbar navbar-expand-lg navbar-light bg-light">
                    <div className="col-8">
                        { /* LOGO */}
                        <div id="logo">
                            <img src={logo} className="app-logo" alt="logotipo" />
                            
                        </div>
                    </div>
                    <div className="col-4">
                        { /* MENU */}
                        <nav id="menu" >
                            <ul className="nav justify-content-center">
                                <li className="nav-item"><a className="nav-link active" href="#">Inicio</a></li>

                            </ul>
                        </nav>
                    </div>
                </div>

            </header>
        );
    }
}

export default Header;
