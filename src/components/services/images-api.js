import axios from 'axios';

const BASE_URL = "https://pixabay.com/api/";
const KEY = "19054520-393ac84072b3b2b1923495f82"

   
const fetchImages = (page, searchQuery) => {
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
        
export default fetchImages;