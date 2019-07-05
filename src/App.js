import React from 'react';
import Header from './Header';
import ShowsPage from './ShowsPage';
import SearchList from './SearchList';
import ApiService from './services/ApiServices';

import './App.css';

export default class App extends React.Component {
  ApiService = new ApiService();

  state = {
    searchContent: null,
    searchResult: null
  }
  constructor(){
    super();
    this.searchValue = (e) => {
      this.setState({
      searchContent: e.target.value
    });
    }

    this.findShows = () => {
      console.log('find')
      this.ApiService
      .searchShow(this.state.searchContent)
      .then((show) =>{
          // this.setState({
          //     searchResult: [...show]
          // });
          console.log(show)
      });
    };
  }





  render() {
    console.log(this.state.searchContent)
  return (
    <div className='container'>
      <Header searchValue={this.searchValue}
              findShows={this.findShows}/>
      <ShowsPage/>
      <SearchList searchContent={this.state.searchResult}/>
    </div>

  );
  }
}