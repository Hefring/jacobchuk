import React from 'react'

class Article extends React.PureComponent {
    render() {
        console.log('render Article');
        const {article, isOpen} = this.props;
        return (
            <div>
                <div>
                    <h3>{article.title}</h3>
                    <button onClick={this.handleClick}>{isOpen ? "close" : "open"}</button>
                </div>
                {isOpen && <section>{article.text}</section>}
            </div>
        )
    }

    handleClick = () => {
        this.props.toggleOpen(this.props.article.id);
    }
}

export default Article

