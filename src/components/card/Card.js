import React from 'react';


const Card = (props) => {
  // destructuring of props
  const { id, name, email } = props;
    return (
      <div className={'tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5'}>
        <img alt='robots' src={`https://robohash.org/${id}?size=100x100`}/>
        <div>
          <h4> {name} </h4>
          <p> {email}</p>
        </div>
      </div>
    );
}

export default Card;