import styled from 'styled-components';
import { iSideSignals, iOnHover } from '../interfaces/interfaces';

const StyledTriggerBox = styled.div`
  position: fixed;
  background: none;
  top: 50px;
  left: 0;
  height: 100vh;
  width: 5%;
  z-index: 5;
`;

export default function TriggerBox({
  sideSignals,
  onHover,
}: {
  sideSignals: iSideSignals;
  onHover: iOnHover;
}) {
  // onHover("1");

  return (
    <StyledTriggerBox
      onMouseEnter={() => {
        onHover({
          ...sideSignals,
          hovered: true,
        });
      }}
      onMouseLeave={() => {
        onHover({
          ...sideSignals,
          hovered: false,
        });
      }}
    />
  );
}
