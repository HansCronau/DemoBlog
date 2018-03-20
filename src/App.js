import React, { Component } from 'react'
import { Message, Header, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Blog from './Blog.js'
import './App.css'

const articlesURL = 'https://virtserver.swaggerhub.com/ecochainadmin/Blog/1.0.0/articles'

const Home = () => (
    <Segment basic>
        <Message info>
            <Message.Header>Welcome to the demo</Message.Header>
            <Message.List>
                <Message.Item>This basic landing page was included to demonstrate URL-handling.</Message.Item>
                <Message.Item>Check the address bar while browsing to see how the URL changes.</Message.Item>
            </Message.List>
        </Message>
        <Header as="h1">Home</Header>
        <p>
            Visit our <Link to='/blog'>Blog</Link> for the latest developments.
        </p>
    </Segment>
)

const EcoChainBlog = () => <Blog articlesURL={articlesURL} />

class App extends Component {
    render() {
        console.log(
            'HansCronau: Hi. Inspecting the console?\n' +
            'HansCronau: Warnings below are caused by bugs in a third party component (Semntic UI React).'
        )
        return (
            <Router>
                <div className='App-container'>
                    <header>EcoChain Blog</header>
                    <Route exact path='/' component={Home} />
                    <Route path='/blog' component={EcoChainBlog} />
                    <footer>&copy; EcoChain</footer>
                </div>
            </Router>
        )
    }
}

export default App
