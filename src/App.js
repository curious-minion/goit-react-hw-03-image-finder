import React, { Component, Fragment } from "react";

import fetchImages from './components/ApiService/ImageApi';
// import ErrorView from "./components/ErrorView/ErrorView";
import SearchBar from './components/SearchBar';
import ImageGallery from "./components/ImageGallery";

import Button from './components/Button';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





export class App extends Component {
  state = {
    searchRequest: '',
    page: 0,
    error: null,
    images: [],
    isLoading: false,
    modalBigImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevRequest = prevState.searchRequest;
    const nextRequest = this.state.searchRequest;

    if (prevRequest !== nextRequest) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    };
  }

   
    handleFormSubmit = searchRequest => {
      this.setState({ searchRequest, isLoading: true});

     fetchImages(searchRequest, 1).then(response => this.setState({ images: response.hits, page: +1})).catch(error => this.setState({ error })).finally(() => this.setState({isLoading: false }));
    
    };

    handleButtonClick = () => {
    this.setState({ isLoading: true });
    const { searchRequest, page } = this.state;
    
    fetchImages(searchRequest, page + 1).then(response => this.setState(prevState => ({ images: [...prevState.images, ...response.hits], page: prevState.page + 1 }))).catch(error => this.setState({ error })).finally(() => this.setState({ isLoading: false }));
   
    };
  onOpenModalClick = largeImageURL  => {
    this.setState({modalBigImage: largeImageURL });
  };

  closeModal = () => {
    this.setState({modalBigImage: ''});
  };
  
  notify = () => {
    toast.error("Whoops, something went wrong");
    toast.clearWaitingQueue();
    return;
  };

  render() {
    const { images, isLoading, page, modalBigImage} = this.state;
    
    
    return (
      <>
        <SearchBar onSubmit={this.handleFormSubmit} images={images} />
        <Fragment>
        {isLoading && <Loader/>}
         {(images.length < 1 && page === 1) && this.notify()} 
          {images.length > 0 && <ImageGallery images={images} onClick={ this.onOpenModalClick}/>}
          {images.length > 11 && <Button onClick={this.handleButtonClick} />}
          {modalBigImage && <Modal
          modalBigImage={modalBigImage}
          closeModal={ this.closeModal}/>}
        </Fragment>
        
        
      <ToastContainer autoClose={2000} limit={1} />    
     
      
       </>
    
    /* <Modal/> 
       */
       
    );
    
  };
};

   
export default App;


