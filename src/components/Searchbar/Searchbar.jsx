import React, { Component } from 'react';

import s from './Searchbar.module.css';

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
                <header className="Searchbar">
                <form 
                onSubmit={this.handleSubmit} 
                className={s.searchForm}>
                    <input 
                    type="text" 
                    value={this.state.query} 
                    onChange={this.handleChange}
                    className={s.searchFormInput}
                    placeholder="Введите название картинки"
                    >
                    </input>
                    <button 
                    type="submit"
                    className={s.searchFormButton}
                    ><span className="SearchForm-button-label">Search</span></button>
                </form>
                </header>
            )
    }
}

export default Searchbar;