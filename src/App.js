import logo from './logo.svg';
import Header from './headers_components/Header';
import Sidebar from './headers_components/Sidebar';
import styled from "styled-components"
import { useState } from 'react';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

// import './App.css';

const StyledApp = styled.div`
    display:flex;
    flex-direction: row; 
    /* margin:0;
    padding: 0; */
    /* align-items:flex-end;
    justify-content:stretch;
    justify-items:stretch; */
    justify-content:stretch;
    
    
`;

const StyledSidebar = styled(Sidebar)`
  >div{
    background-color:beige;
    flex-basis : 230px;
  }
    
`;
const HoveredSidebar=styled(Sidebar)`
  color:white;

  
`;



export default function App() {
  const [sideSignals, setSideSignals] = useState({clicked:false, hovered:false});
  


  return (
    <>
      
      <StyledApp>
     
     {sideSignals.clicked&&<Sidebar sideSignals={sideSignals}onClose={newSideSignals=>{setSideSignals(newSideSignals)}}/>}
     <Header
       sideSignals={sideSignals} onShow={newSideSignals=>{setSideSignals(newSideSignals)}}
       
     />
     
     </StyledApp>
     {(sideSignals.hovered===true && sideSignals.clicked===false)&&
        <Sidebar 
          sideSignals={sideSignals}
          onClose={newSideSignals=>{setSideSignals(newSideSignals)}}
        />} 
      
      {/* {(sideHovered&&!sideClicked)&&
        <HoveredSidebar 
          sideClicked={sideClicked}
          onSideShow={handleSideHovered}
          />} */}
    </>
    
    
      // <div style={{'display':'flex'}}>
      //    <div>1</div>
      //    <div>2</div>
      // </div>
      
      
     

  );
}


