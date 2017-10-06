import React, { Component } from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import accordionOpen from "../decorators/accordionOpen";

class ArticleList extends Component {
    static defaultProps = {
        articles: [],
    }

    componentWillMount() {
        console.log('---', 'mounting')
    }

    componentDidMount() {
        console.log('---', 'mounted')
    }

    componentWillUpdate(_, nextState) {
        //console.log('---', nextState.openArticleId)
    }

    render() {
        const {articles, toggleOpenChild, openChildId} = this.props

        if (!articles.length) return <h3>No articles</h3>

        const articleElements = articles.map(article => (
            <li key = {article.id}>
                <Article
                    article = {article}
                    //isOpen = {this.state.openChildId === article.id}
                    isOpen = {openChildId === article.id}
                    onButtonClick = {toggleOpenChild(article.id)}
                />
            </li>
        ))
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default accordionOpen(ArticleList)