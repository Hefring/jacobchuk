import React from 'react'
import Article from './article'

class ArticleList extends React.Component {

    state = {
        articleId: null
    }

    render() {
        return (
            <ul>
                {this.body}
            </ul>
        )
    }

    get body() {
        return this.props.articles.map(article => 
            <li key={article.id}>
                <Article article={article} toggleOpen={this.toggleArticle} />
            </li>
        )
    }

    toggleArticle = (id) => {
        this.setState({
            articleId: id
        })
    }

}

export default ArticleList