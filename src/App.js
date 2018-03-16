import React, { Component } from 'react'
import './App.css'
import Blog from './Blog.js'
import 'semantic-ui-css/semantic.min.css'
import { Segment } from 'semantic-ui-react'

class App extends Component {
    render() {
        return (
            <div className='App-container'>
                <header>EcoChain Blog</header>
                <Blog className='main' articleURL='https://virtserver.swaggerhub.com/ecochainadmin/Blog/1.0.0/articles' />
                <footer>&copy; EcoChain</footer>
            </div>
        )
    }
}

export default App;
