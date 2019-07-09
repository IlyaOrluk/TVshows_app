import React, { Component } from 'react';
import Spinner from './Spinner';
// import './item-list.css';

export default class ItemList extends Component {

  state = {
    itemList: null
  };

  componentDidMount() {
    const { getData, searchContent } = this.props;

    getData(searchContent)
      .then((itemList) => {
        this.setState({
          itemList
        });
        console.log(itemList)
      });
  }

  renderItems(arr) {
    return arr.map((item) => {
      const { id } = item;
      const label = this.props.children(item);
      const {listGroupClass, findShow} = this.props;

      return (
        <div className={listGroupClass}
            key={id}
            id={id}
            onClick={findShow}>
          {label}
        </div>
      );
    });
  }

  render() {

    const { itemList } = this.state;

    if (!itemList) {
      return <Spinner />;
    }

    const items = this.renderItems(itemList);

    return (
      <div className="item-list">
        {items}
      </div>
    );
  }
}