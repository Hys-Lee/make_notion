import { styled } from 'styled-components';

import justPlusSVG from '../svgs/just_plus.svg';
import rightBracketSVG from '../svgs/larger_than.svg';
import menuDotSVG from '../svgs/menu_dot.svg';

const StyledPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 20px;
  & img {
    /* margin:0 5px; */
    /* height:1.5em; */
    /* width:5em; */
    /* border:solid black 1px; */
  }
  & > button {
    width: 20px;
    height: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 20%;
    background: none;

    padding: 0;

    & > img {
    }
  }
  & > button:hover {
    background-color: rgba(20, 20, 20, 0.15);
  }
  & > .Option {
    visibility: hidden;
  }
  &:hover {
    & > .Option {
      visibility: visible;
    }
  }

  & > p {
    /* visibility:hidden; */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 10em;
    padding: 0 10px;
    margin: 0;
    font-size: 0.9em;
    cursor: default;
    user-select: none;
  }
`;

export default function Page({
  imgSVG,
  imgAlt,
  title,
}: {
  imgSVG: string;
  imgAlt: string;
  title: string;
}) {
  return (
    <StyledPage>
      <button>
        <img src={rightBracketSVG} alt="show subpages" />
      </button>
      <button>
        <img src={imgSVG} alt={imgAlt} />
      </button>
      <p>{title}</p>
      <button className="Option">
        <img src={menuDotSVG} alt="page menu" />
      </button>
      <button className="Option">
        <img src={justPlusSVG} alt="add a subpage" />
      </button>
    </StyledPage>
  );
}
