import React, {useState, useContext} from 'react';
import {Context} from '../../context/Context';

export default function SearchBar({buttonNames,btnId,SearchBarhandleClick}) {
  
  return (
    <div className="searchbar-main-div">
      <div className="searchbar-btn-group">
        {buttonNames.map(key => {
          return (
            <button
            key={key.id}
              className={
                key.id === btnId ? 'searchbar-btn' : 'searchbar-btn active'
              }
              onClick={() => SearchBarhandleClick(key.id, key.tags)}>
              {key.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
