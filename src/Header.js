import React from 'react';
import SearchInput from './SearchInput';
import './Header.css';

export default class Header extends React.Component {


  render(){
    const {findShows, searchValue} = this.props;
  return (
    <div className="header">
      <h3>
        <a href="#/">
          TTS
        </a>
      </h3>
      <ul>
        <li>
          <a href="#/people">People</a>
        </li>
        <li>
          <a href="#/planets">Shows</a>
        </li>
        <li>
          <a href="#/starships">Web Channel</a>
        </li>
      </ul>
      <SearchInput searchValue={searchValue}
                    findShows={findShows}/>
    </div>
  );
}
};

