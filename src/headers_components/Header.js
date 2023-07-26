import React, { useState,  useEffect} from "react";
import Sidebar from "./Sidebar";
import styled from "styled-components"
import SiteBranch from "./SiteBranch";
import { isDOMComponent } from "react-dom/test-utils";

import messageSVG from '../svgs/message.svg';
import clockSVG from '../svgs/clock.svg';
import starSVG from '../svgs/star.svg';
import menuSVG from '../svgs/menu_dot.svg';


const StyledHeader = styled.div`
    
    margin:0;
    display:flex;
    flex-direction: row;
    align-items:center;
    justify-content:space-between;
    background-color:white;
    flex-basis:40px;
    position:sticky;
    

    

    height:50px;
    flex-shrink:0;
    top:0px;
    
    

    & .Left{
        min-width:0px;
        display:flex;
        height:100%;
        align-items:center;
        /* flex-grow:1; */
        
        /* flex-basis:0px; */
    }

    /* overflow::none; */
    
    &>.Right {
        /* flex-grow:1; */
        height:100%;
        align-items:center;
        flex-shrink:0;
        flex-basis:0px;
        /* width:auto; */
        display:flex;
        /* max-width:max-content; */
        width:auto;

        flex-direction:row;
        justify-content:flex-end;
        flex-shrink:0;
        /* overflow-x:hidden; */
        /* flex-grow:1; */
        
        &>button{
            /* flex-shrink:0; */
            flex-basis: max-content;
            min-width:max-content;
            font-size:0.85em;
            background:none;
            display:flex;
            text-align:center;
            justify-content:center;
            padding: 4px 6px;
            border:none;
            border-radius:20%;
            margin: 0 1px;
            flex-grow:1;
            &:hover{
                background-color:rgba(20,20,20,0.1);
            }
            &>img{
                width:1.2em;
            }
            
        }
    }


`;
const SideButton = styled.button`
flex-shrink:0;

height:100%;
background:none;
text-align:center;
border:none;
font-size:2em;
padding:0 0.3em;

&::after{
    content:"${props=>props.bedgeCount}";
    position:absolute;
    /* display:inline-block;   */
    left:2em;
    background-color:red;
    width:1em;
    height:1em;
    font-size:0.3em;
    font-weight:700;
    padding:0.3em;
    text-align:center;
    color:white;
    border-radius:20%;
    /* line-height:center; */
    

}

`;
const Cover = styled.div`
    position:absolute;
    background-color:white;
    width:100%;
    height:100%;
    transition: opacity 0.5s ease-in,z-index 0.5s ease-in;;
    z-index:${props=>props.zindex};
    opacity:${props=>
        props.zindex/10+1
    };
`;
function Headers({coverZindex,onHoveredMouse,sideSignals, onShow, bedgeCount}){
    // const [clicked,setClicked] = useState(false);
    // const [hovered,setHovering] = useState(false);

    
    // console.log("!!!!");


    
return (
    <StyledHeader 
        onMouseEnter={()=>{onHoveredMouse(true)}}
        onMouseLeave={()=>{onHoveredMouse(false)}}
        
    >
        <Cover zindex = {coverZindex}/>
        <div className="Header Left">
            {!sideSignals.clicked && 
                <SideButton
                    bedgeCount={bedgeCount}
                    onClick={()=>{onShow({
                        ...sideSignals,
                        clicked:true
                    })}}
                    onMouseEnter={()=>{onShow({
                        ...sideSignals,
                        hovered:true
                    })}}
                    onMouseLeave={()=>{onShow({
                        ...sideSignals,
                        hovered:false
                    })}}
                >
                    +{/* {sideHovered? ">>" :"+"} */}
                </SideButton>}
            {/* <div classNmae = "SideIcon" onmouseleave={()=>{setHovering(true)}} onMouseLeave={()=>{setHovering(false)}}>
            </div>  */}
            {/* ㄴ> Too many rerendering이라고 에러가 남. 뭔가 event랑 State관련해서 rendering문제인 것 같아서,
            렌더링 관련해서 state랑 effect에 대해서 공부좀 하고 다시 와야 할 듯? 
             ㄴ> 보통 함수를 param으로 보내야 하는데, 실행을 보내서 그렇다. 화살표함숬셈.*/}
            <SiteBranch />
            
        </div>
        <div className="Header Right">
        
            <button>공유</button>
            <button><img src={messageSVG} alt="open reply bar"/></button>
            <button><img src={clockSVG} alt="all updates"/></button>
            <button><img src={starSVG} alt="bookmarking"/></button>
            <button><img src={menuSVG} alt="menu"/></button>
        
        </div>
        
    </StyledHeader>

    

    
);


} export default Headers;