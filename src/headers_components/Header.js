import React, { useState,  useEffect} from "react";
import Sidebar from "./Sidebar";
import styled from "styled-components"
import SiteBranch from "./SiteBranch";
import { isDOMComponent } from "react-dom/test-utils";

const StyledHeader = styled.div`

    display:flex;
    direction: row;
    align-items:center;
    justify-content:space-between;
    /* flex-grow:1; */
    flex-basis:50px;
    position:sticky;
    height:50px;
    & .Left{
        display:flex;
        height:100%;
        /* align-items:stretch; */
        
        
    }

    & .Right>div {
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        &>div{
            padding:0 0.4em;
            font-size:0.95em;
        }
    }


`;
const SideButton = styled.button`
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

function Headers({sideSignals, onShow, bedgeCount}){
    // const [clicked,setClicked] = useState(false);
    // const [hovered,setHovering] = useState(false);

    
    // console.log("!!!!");


    
return (
    <StyledHeader>
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
            
            {/* <Sidebar/ > */}
            <SiteBranch />
        </div>
        <div className="Header Right">
            <div className="etc" >
                <div>공유</div>
                <div>업데이트</div>
                <div>고정</div>
                <div>*</div>
            </div>
        </div>
        
    </StyledHeader>

    

    
);


} export default Headers;