import React, { Component } from 'react';

class Searchbar extends Component {
    state = {
        query: ""
    }
    handleChange = e => {
        this.setState({ query: e.currentTarget.value })
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.onSubmit(this.state.query);
        this.setState({query: ""});
    }
    render() {
            return (
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.query} onChange={this.handleChange}></input>
                    <button type="submit">Искать</button>
                </form>
            )
    }
}

export default Searchbar;