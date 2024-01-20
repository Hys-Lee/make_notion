import Header from './headers_components/Header.js';
import Sidebar from './headers_components/Sidebar';
import styled from 'styled-components';
import { useState } from 'react';
import MainBody from './main_componenets/MainBody';

// import './App.css';

const StyledApp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;

  width: 100vw;
  height: auto;
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-shrink: 1;
  flex-grow: 1;
  max-width: 100%;
  min-width: 0%;

  top: 0px;
`;

export default function App() {
  const [sideSignals, setSideSignals] = useState({
    clicked: false,
    hovered: false,
  });
  const [totalBedgeCount, setTotalBedgeCounts] = useState(0);
  const [scrollPrevented, setScrollPrevented] = useState(false);
  const [coverZindex, setCoverZindex] = useState(-1);

  function handleCoverZindex(hide: boolean) {
    if (hide) {
      setCoverZindex(5); // 안 보일 임의 값
      console.log('hide');
    } else {
      setCoverZindex(-5);
      console.log('show');
    }
  }

  if (scrollPrevented) {
    /// 나중에 처리
    console.log('hovering!!');
  }

  return (
    <div>
      <StyledApp
        onKeyDown={() => {
          handleCoverZindex(true);
        }}
        onMouseMove={() => {
          handleCoverZindex(false);
        }}
      >
        {sideSignals.clicked && (
          <Sidebar
            onHoveredMouse={(newScrollPrevented) => {
              setScrollPrevented(newScrollPrevented);
            }}
            sideSignals={sideSignals}
            onClose={(newSideSignals) => {
              setSideSignals(newSideSignals);
            }}
          />
        )}
        <MainSection>
          <Header
            coverZindex={coverZindex}
            onHoveredMouse={(newScrollPrevented) => {
              setScrollPrevented(newScrollPrevented);
            }}
            sideSignals={sideSignals}
            onShow={(newSideSignals) => {
              setSideSignals(newSideSignals);
            }}
            bedgeCount={totalBedgeCount}
          />

          <MainBody
            sideSignals={sideSignals}
            onHover={(newSideSignals) => {
              setSideSignals(newSideSignals);
            }}
          />
        </MainSection>

        {/* hovered sidebar */}
      </StyledApp>

      {sideSignals.hovered === true && sideSignals.clicked === false && (
        <Sidebar
          onHoveredMouse={(newScrollPrevented) => {
            setScrollPrevented(newScrollPrevented);
          }}
          sideSignals={sideSignals}
          onClose={(newSideSignals) => {
            setSideSignals(newSideSignals);
          }}
        />
      )}
    </div>

    // <div style={{'display':'flex'}}>
    //    <div>1</div>
    //    <div>2</div>
    // </div>
  );
}
