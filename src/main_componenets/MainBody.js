import { styled } from "styled-components";
import TriggerBox from './TriggerBox.js';
const StyledMainBody = styled.div`
    /* width:100vw;
    height:100vh; */
    /* border:solid black 1px; */
    padding:70px;

    flex-grow:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    /* width:100%; */

    //test//
    overflow-y:hidden;

`;
const TitleBox = styled.h1`

`;
export default function MainBody({sideSignals, onHover}){
    let tmpArr = [];
    for (let i=0;i<500;i++){
        tmpArr.push(i);
    }
    return(<>
        <TriggerBox 
                    sideSignals={sideSignals} 
                    onHover={(newSideSignals)=>{onHover(newSideSignals)}}
            />
        
        <StyledMainBody>
            <TitleBox><input></input></TitleBox>
            {tmpArr.map((attr)=>{
                return <div >{attr}</div>
            })}
        </StyledMainBody>
    </>);
}