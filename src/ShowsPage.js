import React, {Component} from 'react';
import Spinner from './Spinner';
import ApiService from './services/ApiServices';
import CastShow from './CastShow';
import NoImage from './img/no-image.gif';
import './ShowsPage.css';

export default class ShowsPage extends Component {

  ApiService = new ApiService();

  state = {
    name: null,
    type: null,
    premiered: null,
    img: null,
    summary: null,
    officialSite: null,
    loading: true
  };

  constructor() {
      super();
      this.updateShow = (showId) => {
        this.ApiService
        .getShow(showId)
        .then((show) =>{
            this.setState({
                name: show.name,
                type: show.type,
                premiered: show.premiered,
                summary: show.summary,
                genres: [...show.genres],
                officialSite: show.officialSite,
                loading: false
            });
            if(!show.image){
                this.setState({
                  img: NoImage
                })
            } else {
              this.setState({
                img: show.image.medium
              })
            }
            console.log(show)
        });
    
      };
  }


  componentDidMount() {
    this.updateShow(this.props.previewItem);
  }
  componentDidUpdate(prevProps){
    if(this.props.previewItem !== prevProps.previewItem){
      this.updateShow(this.props.previewItem);
    }
  }
  // componentDidUpdate(prevProps) {
  //   updateItem() {
  //     const {previewItem} = this.props;
  //   }
  //     this.updateShow(previewItem)
    
  // }
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



  render() {
    const content = !this.state.loading ? <ShowContent item={this.state} props={this.props}/> : null;
    const preloader = this.state.loading ? <Spinner/> : null;
    // console.log(this.props)


    return (
        <div>
          {content}
          {preloader}
          <style jsx="true">{`
        p {
          font-size: 20px;
        }
      `}</style>
        </div>
        

    );
  }
}


const ShowContent = ({item, props}) =>{
  const {previewItem} = props;
  const {name, type, premiered, img, summary, genres, officialSite} = item;
  const officialSiteShow = officialSite?
  <li className="list-group-item">
  <span className="term">OfficialSite: </span>
  <span>{officialSite}</span>
  </li>: null;


    return (
        <React.Fragment>
                  <div className='preview'>
            <div className='title'>
                <h4>{name}</h4>
                <img src={img} alt="show"/>
            </div>
          <ul className="list-group">
          <li className="list-group-item">
              <span className="term">Genres: </span>
              <span>{genres}</span>
            </li>
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
            {officialSiteShow}
          </ul>
        </div>
        <CastShow previewCastItem={previewItem}/>
        </React.Fragment>
    )
}