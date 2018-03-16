import _ from 'lodash'
import faker from 'faker'
import React, { Component } from 'react';
import './Blog.css';
import BlogArticle from './BlogArticle.js';
import BlogSearch from './BlogSearch.js';
import { Container, Grid, Segment, Transition, Loader } from 'semantic-ui-react'

// For demoing/testing with more than one article.
const fakeArticles = _.times(10, () => ({
    id: faker.random.alphaNumeric(16),
    heading: faker.company.companyName() + ' partners with EcoChain',
    date: faker.date.recent().toString(),
    summary: faker.lorem.sentences(3),
    body: faker.lorem.paragraphs(3),
}))

class Blog extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            isLoading: true,
            pageNumber: 1,
        };
    }

    componentDidMount() {
        // Demo functionality
        if(!this.props.articleURL) {
            this.setState({articles: fakeArticles})
            return
        }

        // Normal functionality
        fetch(this.props.articleURL, {headers: {'Accept': 'application/json'}})
        .then(response => {
            return response.json()
        })
        .then(data => {
            this.setState({
                articles: _.concat(data, fakeArticles),
                isLoading: false,
            })
        })
    }

    render() {
        return (
            <Segment basic>
                <Grid stackable columns={2}>
                    <Grid.Column width={4}>
                        <BlogSearch articlesData={this.state.articles} />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        {this.state.articles.map( article =>
                            <BlogArticle key={article.id} articleData={article} />
                        )}
                        <Loader active={this.state.isLoading} />
                    </Grid.Column>
                </Grid>
            </Segment>
        )
    }
}

export default Blog;
