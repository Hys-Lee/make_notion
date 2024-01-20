import { styled } from 'styled-components';
import TriggerBox from './TriggerBox';
// import { useState } from 'react';
import { iSideSignals, iOnHover } from '../interfaces/interfaces';
const StyledMainBody = styled.div`
  padding: 70px;

  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* width:100%; */

  //test//
  overflow-y: hidden;
`;
const TitleBox = styled.h1`
  & > textarea {
    outline: none;
    resize: none;

    border: none;
    font-size: 1em;
    font-family: 'Malgun gothic';
    font-weight: 900;

    width: 200px;

    overflow-y: visible;
  }
`;

export default function MainBody({
  sideSignals,
  onHover,
}: {
  sideSignals: iSideSignals;
  onHover: iOnHover;
}) {
  //   const [title, setTitle] = useState('123456');

  const tmpArr: number[] = [];
  for (let i = 0; i < 500; i++) {
    tmpArr.push(i);
  }
  return (
    <>
      <TriggerBox
        sideSignals={sideSignals}
        onHover={(newSideSignals: iSideSignals) => {
          onHover(newSideSignals);
        }}
      />

      <StyledMainBody>
        <TitleBox>
          <textarea />
        </TitleBox>
        {tmpArr.map((attr) => {
          return <div>{attr}</div>;
        })}
      </StyledMainBody>
    </>
  );
}
