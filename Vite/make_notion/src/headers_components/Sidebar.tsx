import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import Page from './Page.js';

// svg 들
import searchSVG from '../svgs/search.svg';
import clockSVG from '../svgs/clock.svg';
import settingSVG from '../svgs/setting.svg';
import plusSVG from '../svgs/plus.svg';
import writtenPageSVG from '../svgs/memo.svg';
import pinSVG from '../svgs/quick_memo.svg';
import homeSVG from '../svgs/home.svg';
import emptyPageSVG from '../svgs/empty_page.svg';
import eLearningSVG from '../svgs/e-learning.svg';
import justPlusSVG from '../svgs/just_plus.svg';
import profileSVG from '../svgs/profiles.svg';
import shapesSVG from '../svgs/shapes.svg';
import donwloadSVG from '../svgs/download.svg';
import trashSVG from '../svgs/trash.svg';
import doubleLeftSVG from '../svgs/double_left.svg';

const MenuList = styled.li`
  list-style: none;
  height: auto;
  /* height:100px; */

  & li {
    list-style: none;
    display: block;
  }
  & ul {
    /* padding-left:20px; */

    padding: 0;
    height: 2em;
    line-height: 2em;
    border-radius: 3px;
    margin: 3px;
    /* border: solid black 1px; */
    & > div img {
      width: 0.9em;
      /* display:inline; */
    }
  }

  & ul:hover {
    background-color: rgba(20, 20, 20, 0.1);
  }
`;
const FixedMenu = styled.div`
  /* flex-basis:10px; */
  height: 150px;

  display: flex;
  flex-direction: column;
  & > ul > div {
    display: flex;
    padding-left: 20px;

    & > p {
      padding-left: 10px;
      margin: 0;
      font-size: 0.9em;
    }
  }
`;
const ScrolledMenu = styled.div`
  /* display:flex;
    flex-direction:column; */
  height: calc(100vh - 200px);
  overflow-y: auto;
  & > div > div > p {
    padding-left: 20px;
    display: inline-block;
    font-weight: 500;
    font-size: 0.8em;
    margin: 0.5em 0;
  }
  /* & p:hover{
        background-color:rgb(251,251,250);
    } */
  & div li ul {
  }
  & > div {
    margin: 20px 0 0 0px;
  }
`;
const OtherMenu = styled.div`
  & > li > ul {
    padding-left: 20px;
  }
  & > li > ul > div {
    display: flex;
    & > p {
      padding-left: 10px;
      margin: 0;
      font-size: 0.9em;
    }
  }
`;
const BookmarkMenu = styled.div`
  display: flex;
  flex-direction: column;
  & > p {
    height: 50px;
  }
  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
const StyledPersonalPageMenu = styled.div`
  /* padding-right:20px; */
  display: flex;
  flex-direction: column;
  /* height:auto; */
  & > div {
    padding-right: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  & > div > button {
    background: none;
    border: none;
    /* padding-right:20px; */
    width: 1.5em;
    height: 1.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20%;
    padding: 0;
    margin: 0;
  }
  & > div > button:hover {
    background-color: rgba(20, 20, 20, 0.2);
  }

  & > div > button > img {
    width: 1em;
  }
`;

const AccountBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  > div {
    display: flex;
    flex-direction: row;
    /* justify-content:space-between; */
    /* flex-basis:50px; */
    align-items: center;
    justify-content: flex-end;
  }
  &:hover {
    background-color: rgba(20, 20, 20, 0.1);
  }
`;
const CloseButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  height: 20px;
  width: 20px;
  /* padding:0 10px; */
  margin: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 20%;

  & > img {
    width: 0.9em;
    height: 0.9em;
  }
  &:hover {
    background-color: rgba(20, 20, 20, 0.1);
  }
  /* border:none; */
`;
const Bedge = styled.div`
  /* >p{
        display:inline-block;
        font-size:0.9em;
        margin:0;
        line-height:1em;
    } */

  color: white;
  text-align: center;
  font-size: 0.8em;
  font-weight: 500;

  line-height: 1.3em;
  width: 1.3em;
  height: 1.3em;

  border-radius: 20%;
  /* margin: 1em; */
  background-color: red;
  display: inline-block;
`;
const StyledSidebar = styled.div`
  font-size: 0.9em;

  color: #19171199;
  background-color: rgb(251, 251, 250);
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);

  width: 230px;
  flex-shrink: 0;
  height: 100vh;
  top: 0px;
  position: sticky;
  z-index: 1;
`;
const HoveredSidebar = styled(StyledSidebar)`
  /* position:absolute; */
  position: fixed;
  display: inline-block;
  z-index: 100;
  top: 60px;
  /* width:100%; */
  /* transform:translate(0px,50px); */
`;

function PersonalPageMenu({ children }: { children: React.ReactNode }) {
  return <StyledPersonalPageMenu>{children}</StyledPersonalPageMenu>;
}

function MutualSidebar({
  sideSignals,
  children,
}: {
  sideSignals: { clicked: boolean; hovered: boolean };
  children: React.ReactNode;
}) {
  return (
    <>
      {sideSignals.clicked ? (
        <StyledSidebar>{children}</StyledSidebar>
      ) : (
        <HoveredSidebar>{children}</HoveredSidebar>
      )}
    </>
  );
}

function Sidebar({
  onHoveredMouse,
  sideSignals,
  onClose,
}: {
  onHoveredMouse: (hover: boolean) => void;
  sideSignals: { clicked: boolean; hovered: boolean };
  onClose: (newSideSignals: { clicked: boolean; hovered: boolean }) => void;
}) {
  // const [closeButtonShown, setCloseButtonShown] = useState(true);
  const bedgeCount = '1';

  // const onSideShow = ()=>{console.log("!!!");}

  return (
    // <div onMouseEnter={()=>{setHovered(true)}} onMouseLeave={()=>{setHovered(false)}}>
    <MutualSidebar sideSignals={sideSignals}>
      <div
        onMouseEnter={() => {
          onClose({ ...sideSignals, hovered: true });
          onHoveredMouse(true);
        }}
        onMouseLeave={() => {
          onClose({ ...sideSignals, hovered: false });
          onHoveredMouse(false);
        }}
      >
        <div>
          <AccountBox>
            <div>
              <p>계정명의...</p>
            </div>
            <div>
              {sideSignals.clicked === true && sideSignals.hovered === true && (
                <CloseButton
                  onClick={() => {
                    onClose({
                      ...sideSignals,
                      clicked: false,
                      hovered: false,
                    });
                  }}
                >
                  <img src={doubleLeftSVG} alt="close sidebar" />
                </CloseButton>
              )}
              <Bedge>{bedgeCount}</Bedge>
            </div>
          </AccountBox>
        </div>

        <MenuList>
          <FixedMenu>
            <ul>
              <div>
                <img src={searchSVG} alt="search" />
                <p>검색</p>
              </div>
            </ul>
            <ul>
              <div>
                <img src={clockSVG} alt="update" />
                <p>업데이트</p>
              </div>
            </ul>
            <ul>
              <div>
                <img src={settingSVG} alt="setting and member" />
                <p>설정과 멤버</p>
              </div>
            </ul>
            <ul>
              <div>
                <img src={plusSVG} alt="new page" />
                <p>새 페이지</p>
              </div>
            </ul>
          </FixedMenu>
          <ScrolledMenu>
            <BookmarkMenu>
              <div>
                <p>즐겨찾기</p>
              </div>
              <li>
                <ul>
                  <Page
                    imgSVG={eLearningSVG}
                    imgAlt={'front-end'}
                    title="FrontEnd"
                  />
                </ul>
              </li>
            </BookmarkMenu>
            <PersonalPageMenu>
              <div>
                <p>개인 페이지</p>
                {sideSignals.hovered === true && (
                  <button>
                    <img src={justPlusSVG} alt="add new page" />
                  </button>
                )}
              </div>

              <li>
                <ul>
                  <Page
                    imgSVG={writtenPageSVG}
                    imgAlt="start in mobile"
                    title="모바일에서 시작하기"
                  />
                </ul>
                <ul>
                  <Page imgSVG={pinSVG} imgAlt="quick memo" title="빠른 메모" />
                </ul>
                <ul>
                  <Page
                    imgSVG={homeSVG}
                    imgAlt="personal home"
                    title="개인 홈"
                  />
                </ul>
                <ul>
                  <Page
                    imgSVG={emptyPageSVG}
                    imgAlt="no title"
                    title="제목 없음"
                  />
                </ul>
              </li>
            </PersonalPageMenu>

            <OtherMenu>
              <li>
                <ul>
                  <div>
                    <img src={profileSVG} alt="create team space" />
                    <p>팀스페이스 생성</p>
                  </div>
                </ul>
                <ul>
                  <div>
                    <img src={shapesSVG} alt="template" />
                    <p>템플릿</p>
                  </div>
                </ul>
                <ul>
                  <div>
                    <img src={donwloadSVG} alt="bring something" />
                    <p>가져오기</p>
                  </div>
                </ul>
                <ul>
                  <div>
                    <img src={trashSVG} alt="trash" />
                    <p>휴지통</p>
                  </div>
                </ul>
              </li>
            </OtherMenu>
          </ScrolledMenu>
        </MenuList>
      </div>
    </MutualSidebar>
  );
}
export default Sidebar;
