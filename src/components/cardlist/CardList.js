import React from 'react';
import Card from '../card/Card';

export const CardList = ({robots}) => {
  const cardsArray = robots.map((roboItem)=>{
    return <Card key={roboItem.id} id={roboItem.id} name={roboItem.name} email={roboItem.email}/>
  });
  return (
    <div>
      {cardsArray}
    </div>
  );
};
