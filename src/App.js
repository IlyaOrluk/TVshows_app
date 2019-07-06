import React from 'react';
import Header from './Header';
import ShowsPage from './ShowsPage';
import SearchList from './SearchList';
import ApiService from './services/ApiServices';

// import styled from 'styled-components'

import './App.css';

export default class App extends React.Component {
  ApiService = new ApiService();

  state = {
    searchContent: null,
    searchResult: null,
    showPreview: 565
  }
  constructor(){
    super();
    this.searchValue = (e) => {
      this.setState({
      searchContent: e.target.value
    });
    }

    this.findShows = () => {
      this.ApiService
      .searchShow(this.state.searchContent)
      .then((show) =>{
          this.setState({
            searchResult: [...show]
          });
      });
    };
    this.findShowClick = (e) =>{
      if(e.target){
        this.setState({
          showPreview: e.target.id
        })
      }
    }
  }





  render() {
  return (
    <div className='container'>
      <Header searchValue={this.searchValue}
              findShows={this.findShows}/>
      <SearchList searchContent={this.state.searchResult}
                  findShowClick={this.findShowClick}/>
      <ShowsPage previewItem={this.state.showPreview}/>

    </div>

  );
  }

  
}

// const Item = styled.li`
//     list-style: none;
//   `
// <style>

// </style>