import React, {Component} from 'react';
import ApiServices from '../services/ApiServices';
import './ShowsPage.css';
import ItemDetails, {Detail} from './ItemDetails';



export default class ShowsPage extends Component {
  ApiServices = new ApiServices();

  render() {
    const ShowsDateils = ({itemId}) => {
      return (
        <div className='preview'>  
<span onClick={this.props.backToList} className='back-preview-show'><i className="fas fa-arrow-circle-left"></i></span>
<span onClick={this.props.hideShow} className='hide-preview-show'><i className="fas fa-times"></i></span>
<ItemDetails itemId={itemId} itemClass={'preview-info'} getData={this.ApiServices.getShow}>
  <Detail itemTag='span' label='Premiered:'  field='premiered'/>
  <Detail itemTag='span' label='Genres:' field='genres'/>
  <Detail itemTag='span' label='Type:' field='type'/>
  <Detail itemTag='span' label='Rating:' field='rating'/>
  <Detail itemTag='span' label='Summary:' field='summary'/>
</ItemDetails>
      </div>
      )
    }
    return (
<React.Fragment>
  <ShowsDateils itemId={this.props.previewItem}/>
</React.Fragment>
    );
  }
}








/* <CastShow>
{({name, img, id}) =>
<div key={id} className='show-item'>
<img src={img} alt='show'/>
<span>{name}</span>
</div>}
</CastShow> */

