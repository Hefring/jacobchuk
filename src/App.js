import React from 'react'
import ArticleList from './components/articleList'
import articles from './data'

class App extends React.Component {
    render() {
        return (
            <div>
                <ArticleList articles={articles} />
            </div>
        )
    }
}

export default App