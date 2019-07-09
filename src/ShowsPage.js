import React, {Component} from 'react';
// import Spinner from './Spinner';
import ApiServices from './services/ApiServices';
import CastShow from './CastShow';
import './ShowsPage.css';
import ItemDetails from './ItemDetails';

export default class ShowsPage extends Component {

  ApiServices = new ApiServices();

  state = {
    // loading: true
  };
  

  render() {
    console.log(this.props)
    return (
  <ItemDetails itemId={this.props.previewItem} itemClass={'preview'} getData={this.ApiServices.getShow}>
    {(i) => (
      <React.Fragment>
        <span onClick={this.props.backToList} className='back-preview-show'><i className="fas fa-arrow-circle-left"></i></span>
<span onClick={this.props.hideShow} className='hide-preview-show'><i className="fas fa-times"></i></span>
            <img src={i.image.medium} alt="show"/>
      <ul className="preview-show">
      <h4>{i.name}</h4>
      <li className="preview-show-item">
          <span className="term">Genres: </span>
          <span>{i.genres}</span>
        </li>
        <li className="preview-show-item">
          <span className="term">Premiered: </span>
          <span>{i.premiered}</span>
        </li>
        <li className="preview-show-item">
          <span className="term">Type: </span>
          <span>{i.type}</span>
        </li>
        <li className="preview-show-item">
          <span className="term">Summary: </span>
          <p>{i.summary.replace(/<\/?[^>]+>/g,'')}</p>
        </li>
          <a href={i.officialSite}>{i.officialSite}</a>
      </ul>
    <CastShow previewCastItem={this.props.previewItem}/>
    </React.Fragment>
    )}
</ItemDetails>
    );
  }
}


// const ShowContent = ({item, props}) =>{
//   const {previewItem, hideShow, backToList} = props;
//   const {name, type, premiered, img, summary, genres, officialSite} = item;
//   const officialSiteShow = officialSite?
//   <li className="list-group-item">
//   <span className="term">OfficialSite: </span>
//   <a href={officialSite}>{officialSite}</a>
//   </li>: null;


//     return (
        
//     )
// }

