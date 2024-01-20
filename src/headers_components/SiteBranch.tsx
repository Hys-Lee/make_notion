import styled from 'styled-components';

const BranchButton = styled.button`
  height: 2em;
  background: none;
  border: none;

  display: flex;
  min-width: 0px;
  flex-direction: row;
  align-items: center;

  & > span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
const StyledSiteBranches = styled.div`
  /* position:absolute; */
  /* display: grid;
    grid-template:  1fr / 3fr 1fr 1fr 3fr; */
  /* min-width:2em;
    flex-basis:0px;
    display:flex; */
  /* width:max-content; */
  min-width: 0px;
  display: flex;
`;
const Branch = styled.div`
  /* flex-grow:1; */
  /* display:flex;
    flex-basis:0px;
    flex-direction:row;
    align-items:center;
    min-width:2em;
    max-width:max-content; */

  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 0px;
`;

export default function SiteBranch() {
  const branch = [
    '홈',
    '...',
    '직전 사이트 위치',
    '현재 사이트 위치 보다 더 길어지면',
  ];

  return (
    <StyledSiteBranches>
      {/* <Branch>
        <BranchButton><span>123456789</span></BranchButton>
        </Branch> */}

      {branch.map((ele: string, index: number) => {
        if (ele === branch[0]) {
          return (
            <Branch>
              <BranchButton>{ele}</BranchButton>
            </Branch>
          );
        } else {
          return (
            <Branch>
              <div>/</div>
              <BranchButton>
                <span>{ele}</span>
              </BranchButton>
            </Branch>
          );
        }
      })}
    </StyledSiteBranches>
  );
}
