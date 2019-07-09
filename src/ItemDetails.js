import React, { Component } from 'react';
import Spinner from './Spinner';
// import './item-list.css';

export default class ItemDetails extends Component {

  state = {
    itemDetails: null
  };

  componentDidMount() {
    const { getData, itemId } = this.props;
    console.log(getData)
    getData(itemId)
      .then((itemDetails) => {
        this.setState({
          itemDetails
        });
        console.log(itemDetails)
      });
  }

  renderItems(item) {
      const label = this.props.children(item);


      return (

          label

      );
  }

  render() {

    const { itemDetails } = this.state;
    console.log(itemDetails)
    if (!itemDetails) {
      return <Spinner />;
    }

    const item = this.renderItems(itemDetails);
    const {itemClass} = this.props;
    return (
      <div className={itemClass}>
        {item}
      </div>
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