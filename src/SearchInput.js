import React, {Component} from 'react';


export default class SearchInput extends Component {
    state = {

    }


    render(){
        const{searchValue, findShows} = this.props
        return(
            <div className='search'>
            <input type="text"
            className="search-input"
            placeholder="Type to search..." 
            onInput={searchValue}/>
            <button className='search-btn' onClick={findShows}>SEARCH</button>
            </div>

        );
    }
}
