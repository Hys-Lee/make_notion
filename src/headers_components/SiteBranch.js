import styled from 'styled-components';

const BranchButton = styled.button`
    height:2em;
    background:none;
    border:none;
`;
const StyledSiteBranches = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;

    &>div{
        /* margin:auto; */
        
    }
`;

export default function SiteBranch(){
    const branch=["홈","다음 사이트"];

    return (<StyledSiteBranches>
        {branch.map((ele)=>{
            if (ele===branch[0]){
                return(<BranchButton>{ele}</BranchButton>);
            }else{
                return(<><div>/</div><BranchButton>{ele}</BranchButton></>)
            }
            
        })}
    </StyledSiteBranches>);
} 