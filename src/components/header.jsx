import React, { Component } from 'react';

class Header extends Component {
    state = {  }

    nav_tag=[1,2,3,4,5];
    render() { 
        return ( 
            <header style={{padding:" 10px 20px 10px 20px",display:'flex',justifyContent:'space-between'}}>
                <a className="logo">logo</a>
                <nav style={{display:'flex',justifyContent:'flex-end'}}>
                    <a className="nav-item" href="#">home</a>
                    <a className="nav-item" href="#">home</a>
                    <a className="nav-item" href="#">home</a>
                </nav>
            </header>
         );
    }
}
 
export default Header;