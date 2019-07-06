import React, {Component} from 'react';
// import Spinner from './Spinner';
import ApiService from './services/ApiServices';
import NoImage from './img/no-image.gif';

import './CastShow.css';

export default class CastShow extends Component {

  ApiService = new ApiService();

  state = {
    castPersons: null,
    loading: true
  };

  constructor(props) {
      super();
      console.log(props)
    this.updateCast = (castId) => {
      this.ApiService
      .castShow(castId)
      .then((show) =>{
          this.setState({
            castPersons: [...show]
          });
          console.log(this.state.castPersons)
      });

  };
  }

  
  renderItems = () => {
    if(this.state.castPersons !== null){
    return this.state.castPersons.map((item) => {
      if(!item.character.image){
        return (
          <div className='cast-show-item' onClick={this.props.findShowClick} key={item.character.id}>
            <img src={NoImage} alt='character'/>
            <br/>  <span>Character  : {item.character.name}</span><br/>  <span>Person : {item.person.name}</span>
            </div>
        );
    } else {
      console.log(item)
      return (
        <div className='cast-show-item' onClick={this.props.findShowClick} key={item.character.id}>
          <img src={item.character.image.medium} alt='character'/>
          <br/>  <span>Character  : {item.character.name}</span><br/>  <span>Person : {item.person.name}</span>
          </div>
      );
    }
    });
  }
  }


  componentDidMount() {
    console.log('componentDidMount')
    this.updateCast(this.props.previewCastItem);
  }
  componentDidUpdate(prevProps){
    if(this.props.previewCastItem !== prevProps.previewCastItem){
      console.log('componentDidUpdate')
      this.updateCast(this.props.previewCastItem);
    }
  }


  render() {
    const items = this.renderItems();
    // const preloader = this.state.loading ? <Spinner/> : null;
    return (
        <div className='show-casts'>
          {items}
        </div>

    );
  }
}

