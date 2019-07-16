import React from 'react';

const ItemList = props => {
  const { data, findShow, listGroupClass, children: renderLabel } = props;
  
  console.log(data)
  const items = data.map((item) => {
      const { id } = item;
      const label = renderLabel(item);

      return (
        <div className={listGroupClass}
            key={id}
            id={id}
            onClick={findShow}>
          {label}
        </div>
      );
    });
  

    return (
      <div className="item-list">
        {items}
      </div>
    );
  }

export default ItemList;