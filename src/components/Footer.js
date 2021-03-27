import React, { Component } from 'react';
import logo from '../assets/images/logo.png';

class Header extends Component {
    render() {
        return (
            <footer id="header">

                <div className="row navbar navbar-expand-lg navbar-light bg-light">
                    <div className="col-12" align="right">
                       <p><span id="brand">
                                <strong>Gapsi</strong>
                            </span></p>
                    </div>
                </div>

            </footer>
        );
    }
}

export default Header;
