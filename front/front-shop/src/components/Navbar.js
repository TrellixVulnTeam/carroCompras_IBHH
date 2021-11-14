import React from 'react';
import { Link } from 'react-router-dom'

 const Navbar = ()=>{
    return(
            
            <nav className="navbar navbar-dark bg-dark">
                
            <div className="container">
                    <Link to="/home" className="navbar-brand" style={{fontSize: "3rem", color: "white"}}>Tunuyork Market </Link>
                    
                    <Link to="/" class="float-xl-right" style={{fontSize: "2rem", color: "white"}}>Login</Link>
                    <Link to="/admin" className="navbar-brand float-xl-right" style={{fontSize: "2rem", color: "white"}}>Admin</Link>
                    
                    <ul className="right">
                        <li><Link to="/cart"><i className="bi bi-cart2" style={{fontSize: "4rem", color: "white"}}></i></Link></li>
                    </ul>
                </div>
            </nav>
    )
}

export default Navbar;