import _ from 'lodash'
import faker from 'faker'
import React, { Component } from 'react'
import { Grid, Segment, Transition, Loader } from 'semantic-ui-react'
import { withRouter } from 'react-router'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import BlogArticlesOverview from './BlogArticlesOverview.js'
import BlogArticle from './BlogArticle.js'
import BlogSearch from './BlogSearch.js'
import articleURL from './articleURL.js'
import './Blog.css'

const nrDemoArticles = 3

// For demoing/testing with more than one article.
const demoArticles = _.times(nrDemoArticles, () => ({
    id: faker.random.alphaNumeric(16),
    heading: faker.company.companyName() + ' chooses EcoChain',
    date: faker.date.future(2).toISOString(),
    summary: faker.lorem.sentences(3),
    body: faker.lorem.paragraphs(3),
}))

class Blog extends Component {
    
    constructor() {
        super()
        this.state = {
            articles: [],
            articleURLs: [],
            isLoading: true,
        }
    }

    componentDidMount() {
        // Check if articlesURL prop is set. Blog component can't work without it.
        if(!this.props.articlesURL) {
            console.error('Blog component missing property \'articlesURL\' linking to REST API.')
            return
        }

        // Fetch articles from REST API
        fetch(this.props.articlesURL, {headers: {'Accept': 'application/json'}})
        .then(response => {
            return response.json()
        })
        .then(data => {
            // Add fake articles for demonstrational purposes.
            this.setState({
                articles: _.concat(data, demoArticles),
            })
        })
        .then(data => {
            // Precalculate article URLs for quick matching.
            this.setState({
                articleURLs: this.state.articles.map(
                    article => this.props.match.path + '/' + articleURL(article)
                ),
                isLoading: false,
            })
        })
    }

    render() {
        const path = this.props.location.pathname
        const articleIndex = this.state.articleURLs.indexOf(path)
        return (
            <Segment basic className='Blog-fullHeight'>
                <Grid stackable stretched columns={2} className='Blog-fullHeight'>
                    <Grid.Column width={4}>
                        <BlogSearch articlesData={this.state.articles} />
                    </Grid.Column>
                    <Grid.Column width={12} className='Blog-fullHeight' >
                        {
                            articleIndex >= 0 ?
                                <BlogArticle articleData={this.state.articles[articleIndex]} />
                            :
                                <BlogArticlesOverview articlesData={this.state.articles} />
                        }
                        <Loader active={this.state.isLoading} />
                    </Grid.Column>
                </Grid>
            </Segment>
        )
    }
}

export default withRouter(Blog)
