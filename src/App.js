import React, { Component } from 'react'

import imagesAPI from "./services/images-api";

import ImagesGallery from "./components/ImageGallery";
import Searchbar from './components/Searchbar';
import Button from './components/Button';
import LoaderMark from './components/Loader';

import s from './App.module.css'


class App extends Component {
  state= {
    hits: [],
    page: 1,
    searchQuery: "",
    isLoading: false,
    error: null,
}
componentDidUpdate(prevProps, prevState) {
    if(prevState.searchQuery !== this.state.searchQuery) {
        this.fetchImages()
    }
}

fetchImages = () => {
    const { page, searchQuery } = this.state;
    const options = { searchQuery, page }
    this.setState({ isLoading: true })
imagesAPI
    .fetchImages(options).then(hits =>
         this.setState(prevState => (
            {hits: [...prevState.hits, ...hits],
            page: prevState.page + 1,
            })))
            .catch(error => this.setState({ error }))
            .finally( () => this.setState({ isLoading: false}))
}
  onChangeQuery = query => {
    this.setState({searchQuery: query, page: 1, hits: [], error: null});
}
onLoadMore = () => {
  this.fetchImages();
      setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
  }, 2000)
}
  render() {
    const { hits, isLoading, error } = this.state;
    const showLoadButton = hits.length > 0 && !isLoading;
  return (
  <>
  {error && <h1>Ой ошибка, всё пропало!!!</h1>}
  <h1 className={s.headling}>Изображения</h1>
    <Searchbar onSubmit={this.onChangeQuery} />
     {isLoading && <LoaderMark /> }
    <ImagesGallery items = {hits}/>
    {showLoadButton && <Button onClick={this.onLoadMore}/>
  }
  </>
  )
  }
}

export default App;
