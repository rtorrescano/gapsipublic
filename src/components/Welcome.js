import React, { Component } from 'react';
import axios from 'axios';
import user from '../assets/images/user.png';



class Welcome extends Component {
    
    state =  {
        data : [],
        status: null
    }

    render() {

        axios.post("https://node-red-nxdup.mybluemix.net/visitor")
            .then(res => {
                console.log(res.data);
                this.setState({
                    data : res.data.data,
                    status: 'success'
                }) ;      
            });

        
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12" align="center">
                        <img src={user} alt="Usuario" width="200 px" />
                        {this.state.status === 'success' &&
                            <div>
                                <p><strong>{this.state.data.welcome}</strong></p>
                            </div>
                        }
                        <p><a className="btn btn-primary" href="#" role="button">Continuar</a></p>
                    </div>                    
                </div>
                <div className="row">
                    <div className="card col-md-12" align="right">
                    {this.state.status === 'success' &&
                            <div>
                                <p>Versión: {this.state.data.version}</p>
                            </div>
                        }
                    </div>
                </div>
                <div className="row">
                    <hr></hr>
                </div>
            </div>
        );
    }
}

export default Welcome;
