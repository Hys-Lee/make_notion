import { hover } from "@testing-library/user-event/dist/hover";
import { useState, useEffect  } from "react";
import { styled } from "styled-components";



const StyledSidebar=styled.div`
    background-color:beige;
    flex-basis : 230px;
`;
const HoveredSidebar=styled(StyledSidebar)`
    /* position:absolute; */
    display:inline-block;
    padding-top:20px;
`;
function MutualSidebar({sideSignals, children}){

    
    return(
        <>
            {sideSignals.clicked ?
                <StyledSidebar>{children}</StyledSidebar>:
                <HoveredSidebar>{children}</HoveredSidebar>}
  

        </>
        
         
    );
}


const AccountBox = styled.div`
    display:flex;
    flex-direction :row;
    justify-content:space-between;
    > div{
        display:flex;
        flex-direction:row;
        /* justify-content:space-between; */
        /* flex-basis:50px; */
        align-items:center;
        justify-content:flex-end;
    }
`;
const CloseButton = styled.button`
    background-color:rgba(0,0,0,0);
    /* border:none; */

    
    
    /* &::after{
        content:"${props => props.bedge}";
        color:white;
        text-align:center;
        
        line-height:1.2em;
        width: 1.2em;
        height:1.2em;

        border-radius:20%;
        margin: 1em;
        background-color:red;
        display:inline-block;

        
    } */
`;
const Bedge = styled.div`
    /* >p{
        display:inline-block;
        font-size:0.9em;
        margin:0;
        line-height:1em;
    } */
    
    color:white;
    text-align:center;
    font-size:0.8em;
    
    
    line-height:1.1em;
    width: 1.1em;
    height:1.1em;

    border-radius:20%;
    margin: 1em;
    background-color:red;
    display:inline-block;
`;

function Sidebar({sideSignals, onClose}){
    
    // const [closeButtonShown, setCloseButtonShown] = useState(true);
    const bedgeCount = "1";
    
    // const onSideShow = ()=>{console.log("!!!");}


    return(
        // <div onMouseEnter={()=>{setHovered(true)}} onMouseLeave={()=>{setHovered(false)}}>
        <MutualSidebar sideSignals={sideSignals}>
            
            <div
                onMouseOver={()=>{onClose({...sideSignals, hovered:true});}} 
                onMouseLeave={()=>{onClose({...sideSignals, hovered:false});}}
            >
                <div>
                    <AccountBox>
                    
                        <p>계정명의...</p>
                        <div>
                            {(sideSignals.clicked===true && sideSignals.hovered===true) &&
                                <CloseButton 
                                    onClick={()=>{
                                        onClose({
                                            ...sideSignals,
                                            clicked:false
                                        })
                                    }}
                                >
                                    &lt;&lt;
                                </CloseButton>
                            }
                            <Bedge >{bedgeCount}</Bedge>
                        </div>
                    </AccountBox>
                    
                    
                </div>

                <li>
                    <ul>검색</ul>
                    <ul>업데이트</ul>
                    <ul>설정과 멤버</ul>
                    <div>새페이지</div>
                    <ul>
                        <div>
                            <li>
                                <ul>개인 홈</ul>
                            </li>
                        </div></ul>
                    <ul>팀스페이스 생성</ul>
                    <ul>템플릿</ul>
                    <ul>가져오기</ul>
                    <ul>휴지통</ul>
                </li>
            </div>
        </MutualSidebar>

    );


} export default Sidebar;