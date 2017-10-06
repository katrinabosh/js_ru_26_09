import React from 'react'
import ArticleList from './ArticleList'
import articles from '../fixtures'
import PropTypes from 'prop-types'
import ArticleListWithInheritance from "./ArticleListWithInheritance";

function App() {
    return (
        <div>
            <h1>App name</h1>
           <ArticleList articles = {articles} />
            <h2>With Inheritance</h2>
           <ArticleListWithInheritance articles = {articles} />
        </div>
    )
}

App.propTypes = {

}

export default App