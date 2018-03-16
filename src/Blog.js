import _ from 'lodash'
import faker from 'faker'
import React, { Component } from 'react';
import './Blog.css';
import BlogArticle from './BlogArticle.js';
import BlogSearch from './BlogSearch.js';
import { Container, Grid, Pagination, Segment, Transition, Loader } from 'semantic-ui-react'

// For demoing/testing with more than one article.
const fakeArticles = _.times(10, () => ({
    id: faker.random.alphaNumeric(16),
    heading: faker.company.companyName() + ' partners with EcoChain',
    date: faker.date.recent().toString(),
    summary: faker.lorem.sentences(3),
    body: faker.lorem.paragraphs(3),
}))

const Centered = ({children}) =>
    <Grid columns='equal'>
        <Grid.Column />
        <Grid.Column>
            {children}
        </Grid.Column>
        <Grid.Column />
    </Grid>

class Blog extends Component {
    
    constructor() {
        super();
        this.state = {
            articles: [],
            isLoading: true,
            activePage: 1,
            articlesPerPage: 5,
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

    handlePaginationChange = (e, {activePage}) => this.setState({activePage});

    pagination() {
        const {articles, isLoading, activePage, articlesPerPage} = this.state;
        return isLoading ? null : <Pagination
            totalPages={_.ceil(articles.length/articlesPerPage)}
            activePage={activePage}
            siblingsRange={2}
            firstItem={null}
            lastItem={null}
            onPageChange={this.handlePaginationChange}
        />
    }

    render() {
        const {articles, isLoading, activePage, articlesPerPage} = this.state;
        const firstArticle = (activePage-1)*articlesPerPage;
        const lastArticle = firstArticle + articlesPerPage;
        return (
            <Segment basic>
                <Grid stackable stretched columns={2}>
                    <Grid.Column width={4}>
                        <BlogSearch articlesData={articles} />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        {
                            articles.slice(firstArticle, lastArticle)
                            .map( article => <BlogArticle
                                key={article.id}
                                articleData={article}
                            />)
                        }
                        <Centered>
                            {this.pagination()}
                        </Centered>
                        <Loader active={isLoading} />
                    </Grid.Column>
                </Grid>
            </Segment>
        )
    }
}

export default Blog;
