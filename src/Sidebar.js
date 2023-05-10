import { hover } from "@testing-library/user-event/dist/hover";
import { useState, useEffect  } from "react";

function Sidebar(){
    const [hovered, setHovered] = useState(false);

    
    useEffect(()=>{
        console.log("Here!")
        },[hovered]
    );
    
    return(
        <div onMouseEnter={()=>{setHovered(true)}} onMouseLeave={()=>{setHovered(false)}}>
            <div>
                <div>계정명의...</div>
                {hovered? <div>사이드바 닫기</div> : null}
                <div>새페이지 만들기</div>
            </div>

            <li>
                <ul>검색</ul>
                <ul>업데이트</ul>
                <ul>설정과 멤버</ul>
                <ul>
                    <div>
                        <li>
                            <ul>페이지 추가</ul>
                        </li>
                    </div></ul>
                <ul>팀스페이스 생성</ul>
                <ul>템플릿</ul>
                <ul>가져오기</ul>
                <ul>휴지통</ul>
            </li>
        </div>
    );


} export default Sidebar;