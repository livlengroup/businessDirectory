import React, {useState, useContext, useEffect} from 'react';
import PreClicked from './component/PreClicked';
import Clicked from './component/Clicked';
import SearchBar from './component/SearchBar';
import {Context} from '../context/Context';
import FirstPage from './component/FirstPage';
import {Container,Row,Col} from 'react-bootstrap';

export default function DealsContainer() {
  const [isClicked, setIsClicked] = useState(false);
  const [dataId, setDataId] = useState();
  const [NotFilteredData, setNotFilteredData] = useState();
  const [btnId, setBtnId] = useState(1);
  const {contextData, setContextData} = useContext(Context);
  const [frontPage, setFrontPage] = useState(true);
  const [buttonNames, setButtonNames] = useState();

  useEffect(() => {
    fetch('https://radiant-dawn-58266.herokuapp.com/businessDirectory2')
      .then(res => res.json())
      .then(response => {
        setButtonNames(response[0].buttonName)
        setContextData(response[0].data)
        setNotFilteredData(response[0].data)
      });
  }, []);

  
  console.log(contextData);
  const onChange = id => {
    if (isClicked !== true && id !== '5') {
      setIsClicked(true);
      setDataId(id);
    } else if (id !== '5') {
      setIsClicked(false);
    } else {
      setIsClicked(false);
    }
  };
  const firstPageHandleClick = (id, tags) => {
    setBtnId(id);
    if (tags === 'all') {
      setContextData(NotFilteredData);
    } else {
      setContextData(NotFilteredData.filter(data => data.tags === tags));
      
    }
    if(frontPage === true){
      setFrontPage(false);
    }
  };
  //search bar with clicking function
  const SearchBarhandleClick = (id, tags) => {
    setBtnId(id);
    if (tags === 'all') {
      setContextData(NotFilteredData);
    } else {
      setContextData(NotFilteredData.filter(click => click.tags === tags));
    }
  };

  //search bar with typing function
  const handleSearchChange =(data)=>{
    
}
  const handleSearchSubmit =(data)=>{  
  for (let i = 0; i < NotFilteredData.length - 1; i++){
    let mainData = NotFilteredData[i];
    if (mainData.name.toLowerCase().includes(NotFilteredData.toLowerCase())){
      setContextData(mainData)
    }
  }
}
  return (
    <div className="main-div">
      {contextData===null?null:
      frontPage===true?
      <FirstPage 
      buttonNames={buttonNames} 
      firstPageHandleClick={firstPageHandleClick} 
      btnId={btnId} />
      :<div>
        <SearchBar 
        buttonNames={buttonNames} 
        SearchBarhandleClick={SearchBarhandleClick} 
        btnId={btnId}
        handleSearchChange={handleSearchChange}
        handleSearchSubmit={handleSearchSubmit}
        />
        <Container>
          <Row>
      {isClicked === false ? (
        contextData.map(a => {
          return (
              <Col lg="4" 
                  key={a.id}
                  className="pre-click-div"
                  onClick={() => onChange(a.id)}>
                    <PreClicked data={a} onChange={onChange}/>
                    </Col>
          )})
          ):
          contextData
           .filter(elem => elem.id === dataId)
           .map(b => {
             return (
               <div key={b.id} className="clicked-div">
                 <Clicked data={b} onChange={onChange}/>
               </div>
             );
           })
          }
          </Row>
        </Container>
          </div>
          }
      </div>
      )
  }


