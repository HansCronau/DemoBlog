import React from 'react';
import './BlogArticle.css';

function BlogArticle(props) {
    return (
        <div className="BlogArticle-article">
            <h2>{props.articleData.heading}</h2>
            <span className="BlogArticle-date">{props.articleData.date}</span>
            <div className="BlogArticle-summary">
                {props.articleData.summary}
            </div>
            <div className="BlogArticle-summary">
                {props.articleData.body}
            </div>
        </div>
    )
}

export default BlogArticle;
