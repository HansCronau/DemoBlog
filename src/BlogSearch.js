import _ from 'lodash'
import React, { Component } from 'react'
import { Search } from 'semantic-ui-react'
import moment from 'moment'

class BlogSearch extends Component {
    componentWillMount() {
        this.resetComponent()
    }

    resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

    handleResultSelect = (e, { result }) => this.setState({ value: result.title })

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })

        setTimeout(() => {
            if (this.state.value.length < 1) {
                return this.resetComponent()
            }

            const regex = new RegExp(_.escapeRegExp(this.state.value), 'i')
            const isMatch = article => { return (
                regex.test(article.heading) ||
                regex.test(article.summary) ||
                regex.test(article.body)
                //TODO(HansCronau): Check if input is date and if article date is (within) given date.
            )}

            this.setState({
                isLoading: false,
                results: _.filter(this.props.articlesData, isMatch),
            })
        }, 500)
    }

    resultRenderer = article => (
        // Fun fact: Search component has at this point overwritten acticle.id with article's index in results.
        //           Note that this is not what causes the unique key warning (see console when searching).
        <Search.Result
            title={article.heading}
            description={moment(article.date).format('LL')}
        />
    )
    
    render() {
        const { isLoading, value, results } = this.state

        return (
            <Search
                fluid
                loading={isLoading}
                onResultSelect={this.handleResultSelect}
                onSearchChange={this.handleSearchChange}
                results={results}
                value={value}
                placeholder='Search blog...'
                resultRenderer={this.resultRenderer}
            />
        )
    }
}

export default BlogSearch
