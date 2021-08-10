import React, { Component } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar, SearchForm, SearchForm_button, SearchForm_button_label, SearchForm_input} from './SearchBar.module.css';

export default class SearchBar extends Component {
  state = {
    searchRequest: '',
  };

  handleRequestChange = event => {
    this.setState({ searchRequest: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchRequest.trim() === '') {
      toast.error('Type in your search request');
      return;
    }
    
    this.props.onSubmit(this.state.searchRequest);
    this.setState({ searchRequest: '' });

  };

  render() {
    const { searchRequest } = this.state;
    
    return (
      <header className={Searchbar}>
      <form onSubmit={this.handleSubmit} className={SearchForm}>
        <button type="submit" className={SearchForm_button}>
          <span className={SearchForm_button_label}>Search</span>
        </button>

        <input
          className={SearchForm_input}
            type="text"
            name="searchRequest"
            value={searchRequest}
            onChange={this.handleRequestChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>);
  }

}

