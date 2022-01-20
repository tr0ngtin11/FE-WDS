import React from 'react';

const CategoryItem = ({item}) => {
  return (
    <div>
        <img src={item.img} />
        <div>
            <h1>{item.title}</h1>
            <button>SHOW NOW</button>
        </div>
    </div>
  );
};

export default CategoryItem;
