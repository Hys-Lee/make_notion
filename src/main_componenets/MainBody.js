import { styled } from "styled-components";
import TriggerBox from './TriggerBox.js';
const StyledMainBody = styled.div`
    /* width:100vw;
    height:100vh; */
    flex-grow:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    
`;

export default function MainBody({sideSignals, onHover}){
    return(<>
        
        <StyledMainBody>
        <TriggerBox 
                sideSignals={sideSignals} 
                onHover={(newSideSignals)=>{onHover(newSideSignals)}}
        />    
            <div>
                111
            </div>
        </StyledMainBody>
    </>);
}