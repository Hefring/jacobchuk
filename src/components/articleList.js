import React from 'react'
import Article from './article'
import accordion from '../decorators/accordion'

class ArticleList extends React.Component {

    render() {
        console.log('render ArticleList');
        return (
            <ul>
                {this.body}
            </ul>
        )
    }

    get body() {
        const { toggleItem, articles, openItemId } = this.props;
        return articles.map(article => 
            <li key={article.id}>
                <Article 
                    article={article} 
                    isOpen={openItemId === article.id} 
                    toggleOpen={toggleItem} 
                />
            </li>
        )
    }
}

export default accordion(ArticleList)