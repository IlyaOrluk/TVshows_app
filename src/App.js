import React from 'react';
import Header from './Header';
import ShowsPage from './ShowsPage';
import SearchList from './SearchList';
import ApiService from './services/ApiServices';
import SearchInput from './SearchInput';




import './App.css';
export default class App extends React.Component {
  ApiService = new ApiService();

  state = {
    searchContent: null,
    searchResult: null,
    showPreview: 37823,
    showPage: false,
    showList: false
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
            searchResult: [...show],
            showPage: false,
            showList: true
          });
      });
    };
    this.findShowClick = (e) =>{
        if(e.target.classList.contains('show-item')){
          this.setState({
            showPreview: e.target.id,
            showPage: true,
            showList: false
          })
        } else {
          this.setState({
            showPreview: e.target.parentNode.id,
            showPage: true,
            showList: false
          })
        }
    }
    this.hideShow = () =>{
      this.setState({
        showPage: false
      })
    }
    this.backToList = () =>{
      this.setState({
        showPage: false,
        showList: true
      })
    }
  }



  render() {
    const mainShow =  this.state.showPage ? <ShowsPage hideShow={this.hideShow} previewItem={this.state.showPreview} backToList={this.backToList}/> : null;
    const searchShows =  this.state.showList ? <SearchList searchContent={this.state.searchResult} findShowClick={this.findShowClick}/> : null;
  return (
    <div className='container'>
      <span className='info-btn'>?</span>
      <Header findShows={this.findShows}/>
      <SearchInput searchValue={this.searchValue}
                   findShows={this.findShows}/>
      {mainShow}
      {searchShows}
    </div>

  );
  }

  
}
