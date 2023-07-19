import logo from './logo.svg';
import Header from './headers_components/Header';
import Sidebar from './headers_components/Sidebar';
import styled from "styled-components"
import { useState } from 'react';
import MainBody from './main_componenets/MainBody';

// import './App.css';

const StyledApp = styled.div`
    display:flex;
    flex-direction: row; 
    justify-content:stretch;
    /* margin:0;
    padding: 0; */
    /* align-items:flex-end;
    justify-content:stretch;
    justify-items:stretch; */
    /* justify-content:stretch; */
    height:100vh;
    
    
`;

const MainSection = styled.div`
  display:flex;
  flex-direction:column;
  align-items:stretch;
  /* flex-basis:1; */
  flex-grow:1;
`;






export default function App() {
  const [sideSignals, setSideSignals] = useState({clicked:false, hovered:false});
  const [totalBedgeCount, setTotalBedgeCounts] = useState(0);
  if(sideSignals.hovered){console.log("hovering!!");}


  return (
    <div>
      
      <StyledApp>
     
        {sideSignals.clicked&&<Sidebar sideSignals={sideSignals}onClose={newSideSignals=>{setSideSignals(newSideSignals)}}/>}
        <MainSection>
        
          <Header
            sideSignals={sideSignals} 
            onShow={newSideSignals=>{setSideSignals(newSideSignals)}}
            bedgeCount={totalBedgeCount}
          />
          
          <MainBody 
            sideSignals={sideSignals}
            onHover={newSideSignals=>{setSideSignals(newSideSignals)}}
          />
        </MainSection>
        
        {/* hovered sidebar */}
     
        
     </StyledApp>

    
     

     {(sideSignals.hovered===true && sideSignals.clicked===false)&&
        <Sidebar 
          sideSignals={sideSignals}
          onClose={newSideSignals=>{setSideSignals(newSideSignals)}}
        />} 
      

    </div>
    
    
      // <div style={{'display':'flex'}}>
      //    <div>1</div>
      //    <div>2</div>
      // </div>
      
      
     

  );
}


