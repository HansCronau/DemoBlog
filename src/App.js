import React, { Component } from 'react'
import { Message, Header, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import SiteHeader from './SiteHeader.js'
import Blog from './Blog.js'
import SiteFooter from './SiteFooter.js'
import './App.css'

const articlesURL = 'https://virtserver.swaggerhub.com/ecochainadmin/Blog/1.0.0/articles'
const nrDemoArticles = 13;

const Home = () => (
    <Segment basic>
        <Message info>
            <Message.Header>Welcome to the demo</Message.Header>
            <Message.List>
                <Message.Item>This basic landing page was included to demonstrate URL-handling.</Message.Item>
                <Message.Item>A dummy(!) header and footer were included to integrate with EcoChain's look and feel.</Message.Item>
                <Message.Item>Follow the "Blog" link below to view the blog functionality.</Message.Item>
                <Message.Item>Check the address bar while browsing to see how the URL changes.</Message.Item>
            </Message.List>
        </Message>
        <Header as="h1">Home</Header>
        <p>
            Visit our <Link to='/blog'>Blog</Link> for the latest developments.
        </p>
    </Segment>
)

const EcoChainBlog = () => <Blog articlesURL={articlesURL} nrDemoArticles={nrDemoArticles} />

class App extends Component {
    render() {
        console.log(
            'HansCronau: Hi. Inspecting the console?\n' +
            'HansCronau: Warnings below are caused by bugs in a third party component (Semntic UI React).'
        )
        // Note: Component <Link> was replaced with <a> as a workaround.
        //       Link removes prop className (which according to the docs it shouldn't).
        return (
            <Router>
                <div className='App-container'>
                    <SiteHeader />
                    <main>
                        <Route exact path='/' component={Home}/>
                        <Route path='/blog' component={EcoChainBlog} />
                    </main>
                    <SiteFooter />
                </div>
            </Router>
        )
    }
}

export default App
