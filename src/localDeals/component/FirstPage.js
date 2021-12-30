import React, { useState, useContext } from 'react';
import { Context } from '../../context/Context';
import { Container, Row, Col } from 'react-bootstrap';

export default function FirstPage({ buttonNames, btnId, firstPageHandleClick }) {

  return (
    <Container>
      <div className="firstPage-main-div">
        {/* <Row className="searchbar-btn-group"> */}
          {buttonNames.map(key => {
            return (
              <div
                
                key={key.id}
                onClick={() => firstPageHandleClick(key.id, key.tags)}>
                  <div className="item">
                    <div className="firstPageImgName">
                      <h3 className="firstPageH3">{key.name}</h3>
                    </div>
                    <img
                      className="firstPageImg"
                      src={key.img} 
                    />       
                </div>
              </div>

            );
          })}
        {/* </Row> */}
      </div>
    </Container>
  );
}


