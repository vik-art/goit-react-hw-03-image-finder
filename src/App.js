import React, { Component } from 'react'

import imagesAPI from "./services/images-api";

import ImagesGallery from "./components/ImageGallery";
import Searchbar from './components/Searchbar';
import Button from './components/Button'

import s from './App.module.css'


class App extends Component {
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

fetchImages = () => {
    const { page, searchQuery } = this.state;
    const options = { searchQuery, page }
imagesAPI.fetchImages(options).then(hits =>
         this.setState(prevState => (
            {hits: [...prevState.hits, ...hits],
            page: prevState.page + 1,
            })
            )
    )
}
  onChangeQuery = query => {
    this.setState({searchQuery: query, page: 1, hits: []});
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
    const { hits } = this.state;
  return (
  <>
  <h1 className={s.headling}>Изображения</h1>
    <Searchbar onSubmit={this.onChangeQuery} />
    <ImagesGallery items = {hits}/>
    {hits.length > 0 && <Button onClick={this.onLoadMore}/>
  }
  </>
  )
  }
}

export default App;
