import React from 'react';


export default function PreClicked({data,onChange}) {
  return (
    <div className="preClickMainDiv" key={data.id}>
      {/* <h5 className="preClickImgName">{data.name}</h5 > */}
      <img className="business-preclick-img" 
       src=
       {data.image} 
       />
      <div className="preClickDetailMain">
        <p className="preclick-detail-name">{data.name}</p>
        <div className="preClickSubDetail">
          <p className="preclick-desc">{data.tags}</p>
          <button
          className="pre-click-btn"
          onClick={() => onChange(data.id)}
          > See More</button>
        </div>
      </div>
    </div>
    
  );
}
