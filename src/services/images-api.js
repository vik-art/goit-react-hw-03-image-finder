import { Component } from 'react';
import axios from 'axios';

import Searchbar from "../components/Searchbar";

const BASE_URL = "https://pixabay.com/api/";
const KEY = "19054520-393ac84072b3b2b1923495f82"

class ImagesAPI extends Component {
    state= {
        hits: [],
    }

    onChangeQuery = query => {
        axios
        .get(`${BASE_URL}?q=${query}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response =>
             this.setState({hits: response.data.hits})
        )
    }
    render() {
        const { hits } = this.state;
        return (
            <div>
            <h1>Изображения</h1>
            <Searchbar onSubmit={this.onChangeQuery}/>
            <ul>
                {hits.map( ({ id, webformatURL, tags }) => (
                    <li key={id}>
                        <img src={webformatURL} alt={tags}/>
                        </li>
                ))}
            </ul>
        </div>
        )
}
}
export default ImagesAPI;