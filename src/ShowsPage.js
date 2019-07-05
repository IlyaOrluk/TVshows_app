import React, {Component} from 'react';

import ApiService from './services/ApiServices';

import './ShowsPage.css';

export default class ShowsPage extends Component {

  ApiService = new ApiService();

  state = {
    name: null,
    type: null,
    premiered: null,
    img: null,
    summary: null,
    officialSite: null
  };

  constructor() {
      super();
      this.updateShow();
  }

//   componentDidMount() {
//     this.updatePlanet();
//     this.interval = setInterval(this.updatePlanet, 10000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   onPlanetLoaded = (planet) => {
//     this.setState({
//       planet,
//       loading: false,
//       error: false
//     });
//   };

//   onError = (err) => {
//     this.setState({
//       error: true,
//       loading: false
//     });
//   };

  updateShow = () => {
    this.ApiService
    .getShow(28954)
    .then((show) =>{
        this.setState({
            name: show.name,
            type: show.type,
            premiered: show.premiered,
            img: show.image.medium,
            summary: show.summary,
            officialSite: show.officialSite
        });
        console.log(show)
    });

  };

  render() {
      const {name, type, premiered, img, summary, officialSite} = this.state;

    return (
        
        <div className='preview'>
            <div className='title'>
                <h4>{name}</h4>
                <img src={img} alt="show"/>
            </div>


          <ul className="list-group">
            <li className="list-group-item">
              <span className="term">Premiered: </span>
              <span>{premiered}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Type: </span>
              <span>{type}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Summary: </span>
              <p>{summary}</p>
            </li>
            <li className="list-group-item">
              <span className="term">OfficialSite: </span>
              <span>{officialSite}</span>
            </li>
          </ul>
        </div>
    );
  }
}


