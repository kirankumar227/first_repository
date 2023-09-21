import { useState } from "react";

const Navbar = () => {
    const [navItemArray, setNavItemArray] = useState([
        {text:"Home",id:1},
        {text:"About",id:2},
        {text:"Service",id:3},
        {text:"Contact us",id:4}
    ]);
    return ( 
        <nav className="menu_box">
            <a href="#" className="logo">Logo</a>
            <ul className="menu">
                {navItemArray.map((item)=>{
                    <li className="nav-item" key={navItemArray.id}>{item.text}</li>
                })};
                {/* <li className="nav-item"><a href="#" className="nav_link">Home</a></li>
                <li className="nav-item"><a href="#" className="nav_link">About</a></li>
                <li className="nav-item"><a href="#" className="nav_link">Service</a></li>
                <li className="nav-item"><a href="#" className="nav_link">Contact us</a></li> */}
            </ul>
        </nav>
     );
}
 
export default Navbar;