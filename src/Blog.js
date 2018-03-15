import React, { Component } from 'react';
import './Blog.css';
import BlogArticle from './BlogArticle.js';

class Blog extends Component {
    constructor() {
        super();
        this.state = {
            articles: []
        };
    }

    componentDidMount() {
        fetch(this.props.articleURL, {headers: {'Accept': 'application/json'}})
        .then(response => {
            return response.json();
        })
        .then(data => {
            let articles = data.map( articleData => {
                return <BlogArticle key={articleData.id} articleData={articleData} />
            });
            this.setState({articles: articles});
        })
    }

    render() {
        return (
            <div>
                {this.state.articles}
            </div>
        )
    }
}

export default Blog;
