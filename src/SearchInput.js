import React, {Component} from 'react';


export default class SearchInput extends Component {
    state = {

    }


    render(){
        const{searchValue, findShows} = this.props
        return(
            <div>
            <input type="text"
            className="search-input"
            placeholder="type to search" 
            onInput={searchValue}
            onChange={findShows}/>
            <button onClick={findShows}>SEARCH</button>
            </div>

        );
    }
}