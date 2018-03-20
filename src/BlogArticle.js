import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react'
import Moment from 'react-moment'
import articleURL from './articleURL.js'
import './BlogArticle.css'

class BlogArticle extends Component {

    readMore = () => this.props.history.push('/blog/' + articleURL(this.props.articleData))

    articlesOverview = () => this.props.history.push('/blog')

    render = () => (
        <Segment
            basic={this.props.summary ? false : true}
            className="BlogArticle-article"
        >
            <Container>
                <Header as="h2">{this.props.articleData.heading}</Header>
                <p>
                    <Moment format="LL" className="BlogArticle-date">{this.props.articleData.date}</Moment>
                </p>
                {this.props.summary ?
                    <div>
                        <div className="BlogArticle-summary">
                            <p>{this.props.articleData.summary}</p>
                        </div>
                        <Button
                            icon
                            labelPosition='right'
                            onClick={this.readMore}
                        >
                            <Icon name='right arrow' />
                            Read more
                        </Button>
                    </div> :
                    <div>
                        <div className="BlogArticle-body">
                            <p>{this.props.articleData.body}</p>
                        </div>
                        <Button
                            basic
                            icon
                            labelPosition='left'
                            onClick={this.articlesOverview}
                        >
                            <Icon name='left arrow' />
                            Back to articles
                        </Button>
                    </div>
                }
            </Container>
        </Segment>
    )
}

export default withRouter(BlogArticle)
