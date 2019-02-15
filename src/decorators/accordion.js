import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {

    state = {
        openItemId: null
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleItem={this.toggleItem} />
    }

    toggleItem = (id) => {
        this.setState({
            openItemId: id
        });
    }
}