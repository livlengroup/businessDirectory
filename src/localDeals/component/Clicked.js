import React from 'react';
import GoogleMapReact from 'google-map-react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const MapMarker = ({ text }) => <div>{text}</div>;

export default function Clicked({data,onChange}) {
const mapCenter = {
      lat:  31.000000,
      lng: -100.000000
}

  return (
    <div className="clicked-main-div">
      <button
        className="x-btn"
        onClick={() => onChange()}
      >X</button>
      
      <div className="clicked-desc-div">
        <h2>{data.name}</h2>
        <Carousel images={data.images} style={{ height: 300, width: 600, marginTop:"20px", marginBottom:"20px" }} />
        <div className="clicked-desc">
          <h4>About</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae tempus est. 
            Cras congue ipsum lectus, cursus tincidunt ante suscipit a. Aenean sed vulputate magna. 
            Nunc a porta erat. Mauris at enim eget arcu tristique fermentum. Sed sit amet rutrum lorem. 
            Cras vitae suscipit felis. Quisque id convallis ligula. 
            Aenean sollicitudin lorem vitae nisi luctus vehicula. 
            Donec porta elementum elit et euismod. Etiam sed metus nunc. Praesent sollicitudin, 
            tortor quis vehicula malesuada, nulla libero sagittis odio, sed elementum ipsum libero vitae risus.
             Integer tincidunt tellus in orci dapibus, et aliquet augue faucibus. 
             Vestibulum imperdiet odio accumsan odio fringilla, eu fermentum nunc dapibus. 
             Praesent eget dictum tortor, eget mollis urna.</p>
          <h4>Discount</h4>
          <p>{data.discountDesc}</p>
          <p>{data.address}</p>

          {/* map size */}
        <div className="clicked-map-container" >
        <GoogleMapReact
          className="clicked-map-container"
          // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={mapCenter}
          defaultZoom={11}
        >
          <MapMarker
            lat={mapCenter.lat}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
      {/* end map size */}

          <button className="website-btn">
              <p>
                <a
              href={data.link}
              target="_blank"
              rel="noreferrer"
              >
                Visit Website <p>&#8594;</p>
                </a>
              </p>
          </button>
        </div>
      </div>
    </div>
  );
}
