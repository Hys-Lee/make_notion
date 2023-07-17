import React, { useState,  useEffect} from "react";
import Sidebar from "./Sidebar";
import styled from "styled-components"
import SiteBranch from "./SiteBranch";
import { isDOMComponent } from "react-dom/test-utils";

const StyledHeader = styled.div`
    display:flex;
    direction: row;
    justify-content:space-between;
    flex-grow:1;

    & .Left{
        display:flex;
    }
`;


function Headers({sideSignals, onShow}){
    // const [clicked,setClicked] = useState(false);
    // const [hovered,setHovering] = useState(false);

    
    // console.log("!!!!");
    
return (
    <StyledHeader>
        <div className="Header Left">
            {!sideSignals.clicked && 
                <button 
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
                </button>}
            {/* <div classNmae = "SideIcon" onmouseleave={()=>{setHovering(true)}} onMouseLeave={()=>{setHovering(false)}}>
            </div>  */}
            {/* ㄴ> Too many rerendering이라고 에러가 남. 뭔가 event랑 State관련해서 rendering문제인 것 같아서,
            렌더링 관련해서 state랑 effect에 대해서 공부좀 하고 다시 와야 할 듯? 
             ㄴ> 보통 함수를 param으로 보내야 하는데, 실행을 보내서 그렇다. 화살표함숬셈.*/}
            
            {/* <Sidebar/ > */}
            <SiteBranch />
        </div>
        <div className="Header Right">
            <div className="etc" style={
            {display:"flex",justifyContent:"space-around"}}>
                <div>공유</div>
                <div>업데이트</div>
                <div>고정</div>
                <div>*</div>
            </div>
        </div>
        
    </StyledHeader>

    

    
);


} export default Headers;