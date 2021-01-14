import { Component } from 'react';
import axios from 'axios';

import Searchbar from "../components/Searchbar";

import s from './api.module.css'

const BASE_URL = "https://pixabay.com/api/";
const KEY = "19054520-393ac84072b3b2b1923495f82"

class ImagesAPI extends Component {
    state= {
        hits: [],
        page: 1,
        searchQuery: "",
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.searchQuery !== this.state.searchQuery) {
            this.fetchImages()
        }
    }

    onChangeQuery = query => {
        this.setState({searchQuery: query, page: 1, hits: []});
    }
    fetchImages = () => {
        const { page, searchQuery } = this.state;
        axios
        .get(`${BASE_URL}?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response =>
             this.setState(prevState => (
                {hits: [...prevState.hits, ...response.data.hits],
                page: prevState.page + 1,
                })
                )
        )
    }
    render() {
        const { hits } = this.state;
        return (
            <div>
            <h1 className={s.headling}>Изображения</h1>
            <Searchbar onSubmit={this.onChangeQuery}/>
            <ul className={s.list}>
                {hits.map( ({ id, webformatURL, tags }) => (
                    <li key={id} className={s.item}>
                        <img 
                        src={webformatURL} 
                        alt={tags}
                        className={s.image}
                        />
                        </li>
                ))}
            </ul>
            <button 
            type="button" 
            onClick={this.fetchImages}
            className={s.button}
            >Загрузить еще</button>
        </div>
        )
}
}
export default ImagesAPI;