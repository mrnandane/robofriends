import React from 'react';

export const Scroll = (props) => {
  return (
    <div style={{'overflow' : 'hidden', height: '500px'}}>
      <div style={{'marginRight': '-17px',
        'overflowY' : 'scroll', height: '500px'}}>
        {props.children}
      </div>
    </div>
  );
};
