import React, {Component} from 'react';
import axios from 'axios';


class Blog extends Component{

    state ={
        data: [],
        status: null
    }
    render(){
        axios.get("https://node-red-nxdup.mybluemix.net/productos/")
            .then(res => {
                console.log(res.data);
                this.setState({
                    products : res.data.data,
                    status: 'success'
                }) ;      
            });
        return(
            <div id="blog">
                  <div className="center">
                    <div id="content">
                        {/** Listado de articulos que vendran del api */}

                        {this.state.status === 'success' &&
                            <div>
                                {this.state.data.map ((article) => {
                                    return(<h1 key={article.id}>{article.type}</h1>)  
                                })}
                            </div>
                        }
                    </div>
                </div>                
            </div>
        );
    }
}

export default Blog;