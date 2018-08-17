import React from 'react';

export const Searchbox = ({searchChange}) => {
  return (
    <div>
      <input className={'br4 bg-lightest-blue pa2 mb2 outline-0'}
             type={'text'}
             placeholder={'type to search'}
             onChange={searchChange} />
    </div>
  )
}