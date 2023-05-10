import { useState,  useEffect} from "react";
import Sidebar from "./Sidebar";


function Headers(){
    const [clicked,setClicked] = useState(false);
    const [hovered,setHovering] = useState(false);

    // console.log("!!!!");

return (
    // <Sidebar />
    <div>
        
        <div className="Header left">
            <div> {clicked ? "Sidebar will be placed" :  <button className="sidemenu" onMouseOut={()=>{setHovering(false)}} onMouseOver={()=>{setHovering(true)}} onClick={()=>{setClicked(!clicked)}}>123 </button>}</div>
            <div>
                <li>
                    <ul>
                        breadcrumb 현재 위치
                    </ul>
                </li>
            </div>
        </div>
        
        <div className="Header right">
            <div>공유</div>
            <div>업데이트</div>
            <div>고정</div>
            <div ></div>
        </div>
        {hovered?<Sidebar /> : null}
    </div>

    

    
);


} export default Headers;