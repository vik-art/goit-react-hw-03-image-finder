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
                <form onSubmit={this.handleSubmit} className={s.form}>
                    <input 
                    type="text" 
                    value={this.state.query} 
                    onChange={this.handleChange}
                    className={s.input}
                    placeholder="Введите название картинки"
                    >
                    </input>
                    <button 
                    type="submit"
                    className={s.button}
                    >Искать</button>
                </form>
            )
    }
}

export default Searchbar;