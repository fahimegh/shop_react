import { Link } from "react-router-dom";
import styled from "./navbar.module.css"


function Navbar(props){

    // let title = "فهیمه بلاگ"



    return(
        
       <div className={styled.headerWrapper}>
        
        <div className="container">
            
        <div className={styled.header}>
            {/* <h3>{title}</h3> */}
            <h3>{props.title}</h3>
            <ul>
                <li>
                    <Link to="/"> لیست مقالات </Link>
                </li>
                <li><Link to="/create-article">مقاله جدید</Link> </li>
                <li><Link to="/about">درباره ما</Link> </li>
            </ul>
        </div>
        </div>
       </div>
    )
}

export default Navbar;