import React from 'react';
import searchDude from './img/searchman.png';
import './Header.css';


export default class Header extends React.Component {


  render(){
  return (
    <div className="header">
      <img className='dude' src={searchDude} alt='dude'/>
      <div className='title'>
        <h3>Search Any TV Show</h3>
      </div>
    </div>
  );
}
};

