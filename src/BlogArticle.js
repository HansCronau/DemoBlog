import React from 'react';
import './BlogArticle.css';
import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react';
import Moment from 'react-moment';

function BlogArticle(props) {
    return (
        <Segment className="BlogArticle-article">
            <Container text>
                <Header as="h2">{props.articleData.heading}</Header>
                <p>
                    <Moment format="LL" className="BlogArticle-date">{props.articleData.date}</Moment>
                </p>
                <div className="BlogArticle-summary">
                    <p>{props.articleData.summary}</p>
                </div>
                <Button content='Read more' />
                <div className="BlogArticle-body">
                    <p>{props.articleData.body}</p>
                </div>
                <Button basic icon labelPosition='left'>
                    <Icon name='left arrow' />
                    Back to articles
                </Button>
            </Container>
        </Segment>
    )
}

export default BlogArticle;
