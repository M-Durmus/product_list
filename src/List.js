import React from 'react';

const List = ({ furniture }) => {
  return (
    <>
      {furniture.map((design) => {
        const { id, name, price, image } = design;
        return (
          <article key={id} className='design'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{price} </p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;