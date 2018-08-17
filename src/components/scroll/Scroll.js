import React from 'react';

export const Scroll = (props) => {
  return (
    <div style={{'overflow' : 'hidden', height: '500px'}}>
      <div style={{'margin-right': '-17px',
        'overflow-y' : 'scroll', height: '500px'}}>
        {props.children}
      </div>
    </div>
  );
};
