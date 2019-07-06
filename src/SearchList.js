import React, {Component} from 'react';

// import ApiService from './services/ApiServices';


export default class SearchList extends Component {
    state = {

    }
    renderItems = () => {
        if(this.props.searchContent !== null){
        return this.props.searchContent.map((item) => {
          return (
            <li className='search-show-item' onClick={this.props.findShowClick} key={item.show.id} id={item.show.id}>
              {item.show.name} / {item.show.language} / {item.show.premiered}
              </li>
          );
        });
    }
      }
    

    render(){

            const items = this.renderItems();
        
        return(
           
            <div>
              {items}
                <button>hide search list</button>
            </div>
        );
    }
}