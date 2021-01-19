import axios from 'axios';

const BASE_URL = "https://pixabay.com/api/";
const KEY = "19054520-393ac84072b3b2b1923495f82"
const fetchImages = ({ searchQuery = '', page = 1 }) => {
return axios
        .get(`${BASE_URL}?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => response.data.hits)
}
// eslint-disable-next-line
export default { fetchImages }