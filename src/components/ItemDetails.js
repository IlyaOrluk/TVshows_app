import React, { Component } from 'react';
import Spinner from './Spinner';
// import './item-list.css';

const Detail = ({ itemDetails, field, label, itemTag}) => {
  return (
    React.createElement(itemTag, null, `${label} ${itemDetails[field]}`)
  );
};

export {
  Detail
};

export default class ItemDetails extends Component {

  state = {
    itemDetails: null
  };

  componentDidMount() {
    const { getData, itemId } = this.props;
    getData(itemId)
      .then((itemDetails) => {
        this.setState({
          itemDetails
        });
      });
  }

  render() {

    const { itemDetails } = this.state;
    console.log(itemDetails)
    if (!itemDetails) {
      return <Spinner />;
    }

    const { name, img } = itemDetails;

    // const item = this.renderItems(itemDetails);
    const {itemClass} = this.props;
    return (
      <React.Fragment>
      <img src={img} alt='show'/>
      <div className={itemClass}>
      <h4 className='item-title'>{name}</h4>
        {
          React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, { itemDetails });
          })
        }
      </div>
      </React.Fragment>
    );
  }
}





// renderItems(arr) {
//   return arr.map((item) => {
//     const { id } = item;
//     const label = this.props.children(item);
//     const {listGroupClass, findShow} = this.props;

//     return (
//       <div className={listGroupClass}
//           key={id}
//           onClick={findShow}>
//         {label}
//       </div>
//     );
//   });
// }