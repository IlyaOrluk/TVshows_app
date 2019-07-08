import React, {Component} from 'react';
import NoImage from './img/no-image.gif';
// import ApiService from './services/ApiServices';


export default class SearchList extends Component {
    renderItems = () => {
        if(this.props.searchContent !== null){
        return this.props.searchContent.map((item) => {
          if(!item.show.image){
            return (
              <div className='show-item' onClick={this.props.findShowClick} key={item.show.id} id={item.show.id}>
                <img src={NoImage} alt='show'/>
                <span>{item.show.name}</span>
                </div>
            );
        } else {
          return (
            <div className='show-item' onClick={this.props.findShowClick} key={item.show.id} id={item.show.id}>
              <img src={item.show.image.medium} alt='show'/>
              <span>{item.show.name}</span>
              </div>
          );
        }
        });
    }
      }
    

    render(){
            const items = this.renderItems();   
        return(    
            <div className='search-list'>
              {items}
                {/* <button>hide search list</button> */}
            </div>
        );
    }
}