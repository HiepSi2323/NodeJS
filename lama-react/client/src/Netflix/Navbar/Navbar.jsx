import { ArrowDropDown,Search, Notifications} from '@material-ui/icons';
import React, { useState } from 'react'
import './navbar.scss'
import {Link} from 'react-router-dom'
const Navbar = () => {
    //set  scroll down
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true); //if
        return () => (window.onscroll = null);
    };

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"} >
           <div className="container">
               <div className="left">
                   <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                   />
                    <Link to="/" className="link">
                    <span>HomePage</span>
                    </Link>
                    
                    <Link to="/series" className="link">
                        <span>Serires</span>
                    </Link>
                    <Link to="/movies" className="link">
                        <span>Movies</span>
                    </Link>
                    <span>New and Popular</span>
                    <span>My List</span>
               </div>

               <div className="right">
                    <Search className="icon" />
                    <span>KID</span>
                    <Notifications className="icon" />
                    <img
                        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                    <div className="profile">
                         <ArrowDropDown className="icon" />
                         <div className="options">
                             <span>Settings</span>
                             <span>Logout</span>
                         </div>
                    </div>
               </div>
           </div>
        </div>
    )
};

export default Navbar;
