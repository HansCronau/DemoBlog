import _ from 'lodash'
import React, { Component } from 'react'
import { Pagination } from 'semantic-ui-react'
import BlogArticle from './BlogArticle.js'
import Centered from './Centered.js'

const defaultArticlesPerPage = 5;
const defaultPaginationSibling = 2;

const BlogPagination = (props) =>
    props.totalPages > 1 ?
    <Centered>
        <Pagination
            totalPages={props.totalPages}
            activePage={props.activePage}
            siblingsRange={defaultPaginationSibling}
            firstItem={null}
            lastItem={null}
            onPageChange={props.onPageChange}
        />
    </Centered> : null

class BlogArticlesOverview extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            activePage: 1,
            articlesPerPage: props.articlesPerPage ? props.articlesPerPage : defaultArticlesPerPage,
        }
    }

    handlePaginationChange = (e, {activePage}) => this.setState({activePage});

    render() {
        const {articlesData} = this.props

        // Don't render if there are no articles. (Yet to load?)
        if(articlesData.length < 1)
        {
            return null
        }

        // Render article summaries and pagination.
        const {activePage, articlesPerPage} = this.state
        const firstArticle = (activePage-1)*articlesPerPage
        const lastArticle = firstArticle + articlesPerPage
        const totalPages = _.ceil(articlesData.length/articlesPerPage)

        return <div>
            <BlogPagination
                totalPages={totalPages}
                activePage={activePage}
                onPageChange={this.handlePaginationChange}
            />
            { // Map all article data to article components.
                articlesData.slice(firstArticle, lastArticle)
                .map( article =>
                    <BlogArticle
                        key={article.id}
                        articleData={article}
                        summary
                    />
                )
            }
            <BlogPagination
                totalPages={totalPages}
                activePage={activePage}
                onPageChange={this.handlePaginationChange}
            />
        </div>
    }
}

export default BlogArticlesOverview
