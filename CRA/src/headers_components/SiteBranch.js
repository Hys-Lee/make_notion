import styled from 'styled-components';

const BranchButton = styled.button`
    height:2em;
    background:none;
    border:none;
    

    
    display:flex;
    min-width:0px;
    flex-direction:row;
    align-items:center;


    &>span{
        overflow:hidden;
        white-space:nowrap;
        text-overflow:ellipsis;
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
    min-width:0px;
    display:flex;

    
`;
const Branch = styled.div`
    /* flex-grow:1; */
    /* display:flex;
    flex-basis:0px;
    flex-direction:row;
    align-items:center;
    min-width:2em;
    max-width:max-content; */
    
    display:flex;
    flex-direction:row;
    align-items:center;
    min-width:0px;
    /* flex-shrink:${props=>{
        if(props.index===1){
            return 0;
        }else{
            return 1;
        }
    }};
    min-width:100px;
    max-width:max-content;
    flex-grow:1;
    margin: 0 2px;
    */
`;


export default function SiteBranch(){
    const branch=["홈","...","직전 사이트 위치","현재 사이트 위치 보다 더 길어지면"];

    return (<StyledSiteBranches>
        {/* <Branch>
        <BranchButton><span>123456789</span></BranchButton>
        </Branch> */}
        
        {branch.map((ele, index)=>{
            if (ele===branch[0]){
                return(<Branch index={index}><BranchButton>{ele}</BranchButton></Branch>);
            }else{
                return(<Branch index={index}><div>/</div><BranchButton><span>{ele}</span></BranchButton></Branch>)
            }
            
        })}
    </StyledSiteBranches>);
} 