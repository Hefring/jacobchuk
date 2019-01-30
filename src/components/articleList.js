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
                <Article article={article} isOpen={this.state.articleId === article.id} toggleOpen={this.toggleArticle(article.id)} />
            </li>
        )
    }

    toggleArticle = (id) => {
        console.log('toggleArticle');
        this.setState({
            articleId: id
        })
    }

}

export default ArticleList