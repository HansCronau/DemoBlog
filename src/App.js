import React, { Component } from 'react';
import './App.css';
import Blog from './Blog.js';

class App extends Component {
    render() {
        return (
            <Blog articleURL='https://virtserver.swaggerhub.com/ecochainadmin/Blog/1.0.0/articles' />
        )
    }
}

export default App;
