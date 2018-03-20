import _ from 'lodash'
import faker from 'faker'
import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Grid, Segment, Loader } from 'semantic-ui-react'
import BlogArticlesOverview from './BlogArticlesOverview.js'
import BlogArticle from './BlogArticle.js'
import BlogSearch from './BlogSearch.js'
import articleURL from './articleURL.js'
import './Blog.css'

// For demoing/testing with more than one article.
const generateDemoArticles = nrOfArticles => 
    _.times(nrOfArticles, () => ({
        id: faker.random.alphaNumeric(16),
        heading: faker.company.companyName() + ' chooses EcoChain',
        date: faker.date.future(2).toISOString(),
        summary: faker.lorem.sentences(3),
        body: faker.lorem.paragraphs(3),
    }))


// Blog component assumes:
// - REST API resembling https://virtserver.swaggerhub.com/ecochainadmin/Blog/1.0.0/articles
// - Articles have unique date+heading combinations.
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
            // TODO(HansCronau): Check if json adheres to expected format.
        })
        .then(data => {
            // Add fake articles for demonstrational purposes.
            return this.props.nrDemoArticles ? _.concat(data, generateDemoArticles(this.props.nrDemoArticles)) : data
        })
        .then(data => {
            // Precalculate article URLs for quick matching.
            this.setState({
                articles: data,
                articleURLs: data.map(
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
                <Grid stackable columns={2} className='Blog-fullHeight'>
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
