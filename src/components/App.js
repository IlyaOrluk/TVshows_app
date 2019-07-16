import React from 'react';
import Header from './Header';
import ShowsPage from './ShowsPage';
import ItemList from './ItemList';
import ApiServices from '../services/ApiServices';
import SearchInput from './SearchInput';
import withData from './hoc-helpers/withData';
import './App.css';



const{ searchShow, castShow } = new ApiServices();
export default class App extends React.Component {
  ApiServices = new ApiServices();

  state = {
    searchContent: '',
    searchResult: null,
    showPreview: 23314,
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
          this.setState({
            showPage: false,
            showList: true
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
        console.log(e.target.id)
    }
    this.hideShow = () =>{
      this.setState({
        showPage: false,
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
    const SearchList =  withData(ItemList, searchShow, this.state.searchContent);
    const CastList = withData(ItemList, castShow, this.state.showPreview);
    const mainShow =  this.state.showPage ? <ShowsPage hideShow={this.hideShow} previewItem={this.state.showPreview} backToList={this.backToList}/> : null;
    const searchShows =  this.state.showList ? <SearchList>
                                                {({name, premiered, img, id}) =>
                                                <div key={id} id={id} className='show-item'onClick={this.findShowClick}>
                                                    <img src={img} alt='show'/>
                                                    <span>{name}</span>
                                                    <span>{premiered}</span>
                                                </div>}
                                              </SearchList> : null;
  const mainShowCasts = this.state.showPage ? <CastList>
                                    {({name, premiered, img, id}) =>
                                  <div key={id} id={id} className='cast-show-item'>
                                      <img src={img} alt='show'/>
                                      <span>{name}</span>
                                      <span>{premiered}</span>
                                  </div>}
                                    </CastList> : null;
  return (
    <div className='container'>
      <span className='info-btn'>?</span>
      <Header findShows={this.findShows}/>
      <SearchInput searchValue={this.searchValue}
                   findShows={this.findShows}/>
      {mainShow}
      {mainShowCasts}
      {searchShows}
    </div>

  );
  }

  
}







/* <CastShow>
{({name, img, id}) =>
<div key={id} className='show-item'>
 <img src={img} alt='show'/>
 <span>{name}</span>
</div>}
</CastShow> */