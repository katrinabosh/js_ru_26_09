import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ArticleListWithInheritanceBase extends Component {

    state = {
        openChildId: null
    }

    toggleOpenArticle = (id) => {
        if (this.memoizedTogglers.get(id)) return this.memoizedTogglers.get(id)

        const func = (ev) => this.setState({
            openChildId: id === this.state.openChildId ? null : id
        })

        this.memoizedTogglers.set(id, func)

        return func
    }

    memoizedTogglers = new Map()
}

ArticleListWithInheritanceBase.propTypes = {
    articles: PropTypes.array.isRequired
}

export default ArticleListWithInheritanceBase