import React, {Component} from 'react';
import ItemList from './ItemList';
import ApiServices from './services/ApiServices';


export default class SearchList extends Component {
  ApiServices = new ApiServices();
  state = {

  }
    
    render(){
        return(    
              <ItemList getData={this.ApiServices.searchShow}
                        listGroupClass={'show-item'}
                        searchContent={this.props.searchContent}
                        findShow={this.props.findShowClick}>
              {(i) => (
                <React.Fragment>
                  <img src={i.img} alt='show'/>
                  <span>{i.name}</span>
                  <span>{i.premiered}</span>
                </React.Fragment>

                      )}
              </ItemList>
        );
    }
}


